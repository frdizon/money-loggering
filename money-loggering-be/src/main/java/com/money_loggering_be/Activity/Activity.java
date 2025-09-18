package com.money_loggering_be.Activity;

import java.time.LocalDateTime;

import com.money_loggering_be.Category.Category;

import jakarta.persistence.*;

@Entity
@Table(name = "activities")
public class Activity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, length = 80)
    private String name;

    @Column(nullable = false)
    private LocalDateTime timestamp;

    @Column(nullable = false)
    private double amount;

    @ManyToOne
    @JoinColumn(name = "category_id")
    private Category category;

    public Activity(Long id, String name, LocalDateTime timestamp, double amount, Category category) {
        this.id = id;
        this.name = name;
        this.timestamp = timestamp;
        this.amount = amount;
        this.category = category;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public LocalDateTime getTimestamp() {
        return timestamp;
    }

    public void setTimestamp(LocalDateTime timestamp) {
        this.timestamp = timestamp;
    }

    public double getAmount() {
        return amount;
    }

    public void setAmount(double amount) {
        this.amount = amount;
    }

    public Category getCategory() {
        return category;
    }

    public void setCategory(Category category) {
        this.category = category;
    }
}
