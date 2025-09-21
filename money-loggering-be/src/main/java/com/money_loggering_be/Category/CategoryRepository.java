package com.money_loggering_be.Category;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

public interface CategoryRepository extends JpaRepository<Category, Long> {
    List<Category> findByAccountId(Long accountId);

    boolean existsByNameAndAccountId(String name, Long accountId);

    boolean existsByIdAndAccountId(Long id, Long accountId);
}
