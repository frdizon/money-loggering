package com.money_loggering_be.Category;

import com.money_loggering_be.Account.Account;
import com.money_loggering_be.Account.AccountRepository;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/category")
public class CategoryController {

    @Autowired
    private AccountRepository accountRepository;

    @Autowired
    private CategoryRepository categoryRepository;

    @GetMapping
    private ResponseEntity<List<Category>> findAllByAccountId(Authentication authentication) {
        List<Category> userCategories = categoryRepository.findByAccountId(Long.parseLong(authentication.getName()));
        return ResponseEntity.ok(userCategories);
    }

    @PostMapping
    private ResponseEntity<Void> createCategory(Authentication authentication,
            @Validated @RequestBody Category category) {
        Optional<Account> account = accountRepository.findById(Long.parseLong(authentication.getName()));
        if (account.isPresent()) {
            boolean isCategoryAlreadyExists = categoryRepository.existsByNameAndAccountId(category.getName(),
                    Long.parseLong(authentication.getName()));
            if (!isCategoryAlreadyExists) {
                Category newCategory = new Category(account.get(), category.getName());
                categoryRepository.save(newCategory);
                return ResponseEntity.status(201).build();
            } else {
                return ResponseEntity.badRequest().build();
            }
        }
        return ResponseEntity.status(401).build();
    }
}
