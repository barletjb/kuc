package com.example.backend.user.entity;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name = "users")
@Data
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String sexe;
    private String username;

    @Column(nullable = false, unique = true)
    private String email;

    private String password;
    private String role = "ROLE_USER";

}
