package com.money_loggering_be.Activity;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Map;

public interface ActivityRepository extends JpaRepository<Activity, Long> {
    @Query(value = "SELECT id, name, amount, timestamp, categoryTable.categoryName as category FROM activities INNER JOIN (SELECT account_id, name as categoryName, id AS categoryId FROM categories) as categoryTable ON activities.Category_id = categoryTable.categoryId WHERE account_id = ?1 ORDER BY timestamp DESC", nativeQuery = true)
    List<Map<String, Object>> findByAccoundId(Long accountId);
}
