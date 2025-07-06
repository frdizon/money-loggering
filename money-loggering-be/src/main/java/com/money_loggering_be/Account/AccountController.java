package com.money_loggering_be.Account;

import java.time.Instant;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.oauth2.jwt.JwtClaimsSet;
import org.springframework.security.oauth2.jwt.JwtEncoder;
import org.springframework.security.oauth2.jwt.JwtEncoderParameters;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/api/account")
public class AccountController {
    @Autowired
    JwtEncoder encoder;

    @Autowired
    private AccountRepository accountRepository;

    @PostMapping("/register")
    public ResponseEntity<Void> register(@RequestBody Account account) {
        if (!accountRepository.existsByUsername(account.getUsername())) {
            accountRepository.save(
                    generateAccountWithEncodedPassword(account));
            return ResponseEntity.ok().build();
        }
        return ResponseEntity.status(400).build();
    }

    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestBody Account account) {
        BCryptPasswordEncoder encoder = new BCryptPasswordEncoder(12);
        Account queriedAccount = accountRepository.findByUsername(account.getUsername());
        if (queriedAccount != null && encoder.matches(account.getPassword(), queriedAccount.getPassword())) {
            Instant now = Instant.now();
            long expiry = 36000L;

            JwtClaimsSet claims = JwtClaimsSet.builder()
                    .issuer("self")
                    .issuedAt(now)
                    .expiresAt(now.plusSeconds(expiry))
                    .subject(queriedAccount.getId().toString())
                    .build();

            return ResponseEntity.ok(this.encoder.encode(JwtEncoderParameters.from(claims)).getTokenValue());
        }
        return ResponseEntity.badRequest().build();
    }

    private Account generateAccountWithEncodedPassword(Account account) {
        BCryptPasswordEncoder encoder = new BCryptPasswordEncoder(12);

        Account accountWithEncodedPassword = new Account();
        accountWithEncodedPassword.setUsername(account.getUsername());
        accountWithEncodedPassword.setPassword(
                encoder.encode(account.getPassword()));
        return accountWithEncodedPassword;
    }
}
