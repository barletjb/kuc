package com.example.backend.user.controllers;

import jakarta.servlet.http.HttpServletResponse;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

import java.io.IOException;

@Controller
public class OAuth2RedirectController {

    @GetMapping("/")
    public void redirectAfterOAuth2Login(Authentication authentication, HttpServletResponse response) throws IOException {
        if (authentication != null && authentication.isAuthenticated()) {
            response.sendRedirect("http://localhost:5173/oauth2/callback");
        } else {
            response.sendRedirect("http://localhost:5173/login?error=not_authenticated");
        }
    }
}