package com.money_loggering_be.Activity;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Map;

public interface ActivityRepository extends JpaRepository<Activity, Long> {
    @Query(value = "SELECT id, name, amount, timestamp, categoryTable.categoryName as category, categoryTable.categoryId as categoryId FROM activities INNER JOIN (SELECT account_id, name as categoryName, id AS categoryId FROM categories) as categoryTable ON activities.Category_id = categoryTable.categoryId WHERE account_id = ?1 ORDER BY timestamp DESC", nativeQuery = true)
    List<Map<String, Object>> findByAccoundId(Long accountId);

    @Query(value = "select exists(select 1 from activities inner join (select account_id, name as categoryName, id as categoryId from categories) as categoryTable on activities.category_id = categoryTable.categoryid where account_id = ?1 and id = ?2)", nativeQuery = true)
    boolean existsByIdAndAccountId(Long id, Long accountId);
}
