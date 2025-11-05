package com.example.backend.user.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

public class UserDTO {

    @Data
    @AllArgsConstructor
    @Builder
    public static class PostInput {

        private String sexe;
        private String username;
        private String email;
        private String password;
        private String role;

    }

    public static class PostOutput{

        private int id;
        private String username;
        private String email;
        private String password;
        private String role;
    }
}
