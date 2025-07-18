package com.money_loggering_be.Account;

import org.springframework.data.jpa.repository.JpaRepository;

public interface AccountRepository extends JpaRepository<Account, Long> {
    Account findByUsername(String username);

    boolean existsByUsername(String username);
}
