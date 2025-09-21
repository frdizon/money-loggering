package com.money_loggering_be.Activity;

import java.util.List;
import java.util.Map;

import com.money_loggering_be.Category.Category;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import com.money_loggering_be.Category.CategoryRepository;

@RestController
@RequestMapping("/api/activity")
public class ActivityController {
    @Autowired
    private CategoryRepository categoryRepository;

    @Autowired
    private ActivityRepository activityRepository;

    @GetMapping
    private ResponseEntity<List<Map<String, Object>>> findAllByAccountId(Authentication authentication) {
        List<Map<String, Object>> userActivities = activityRepository
                .findByAccoundId(Long.parseLong(authentication.getName()));
        return ResponseEntity.ok(userActivities);
    };

    @PostMapping
    private ResponseEntity<Void> createActivity(
            Authentication authentication,
            @RequestBody ActivityCreateDTO activityCreateDTO) {
        List<Category> userCategories = categoryRepository.findByAccountId(Long.parseLong(authentication.getName()));
        // @formatter:off
        // Check if the category where the activity will be inserted is owned by the user.
        // @formatter:on
        if (userCategories.stream().anyMatch(c -> c.getId() == activityCreateDTO.getCategoryId())) {
            Activity newActivity = new Activity(
                    null,
                    activityCreateDTO.getActivity(),
                    activityCreateDTO.getTimestamp(),
                    activityCreateDTO.getAmount(),
                    new Category(activityCreateDTO.getCategoryId()));
            activityRepository.save(newActivity);
            return ResponseEntity.status(201).build();
        }
        return ResponseEntity.status(403).build();
    }

    @PutMapping("/{activityId}")
    private ResponseEntity<Void> putActivity(
            Authentication authentication,
            @PathVariable Long activityId,
            @RequestBody ActivityCreateDTO activityDTO) {
        if (activityRepository.existsByIdAndAccountId(Long.parseLong(authentication.getName()), activityId)){
            Activity updatedActivity = new Activity(
                    activityId,
                    activityDTO.getActivity(),
                    activityDTO.getTimestamp(),
                    activityDTO.getAmount(),
                    new Category(activityDTO.getCategoryId())
            );
            activityRepository.save(updatedActivity);
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.status(403).build();
    }

    @DeleteMapping("/{activityId}")
    private ResponseEntity<Void> deleteActivity(Authentication authentication, @PathVariable Long activityId) {
         if (activityRepository.existsByIdAndAccountId(Long.parseLong(authentication.getName()), activityId)){
             activityRepository.deleteById(activityId);
             return ResponseEntity.noContent().build();
         }
        return ResponseEntity.status(403).build();
    }
}
