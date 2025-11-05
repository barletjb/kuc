package com.example.backend.user.security;

import com.example.backend.user.configuration.JwtUtils;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.Authentication;
import org.springframework.security.web.authentication.AuthenticationSuccessHandler;
import org.springframework.stereotype.Component;

import java.io.IOException;
import java.net.URLEncoder;
import java.nio.charset.StandardCharsets;

@Component
@RequiredArgsConstructor
public class GithubOauth2SuccessHandler implements AuthenticationSuccessHandler {

    private final JwtUtils jwtUtils;

    @Override
    public void onAuthenticationSuccess(HttpServletRequest req, HttpServletResponse res,
                                        Authentication auth) throws IOException {

        String username = auth.getName();
        String token = jwtUtils.generateToken(username);

        String frontendCallBackUrl = "http://localhost:5173/oauth/callback";

        String redirect = frontendCallBackUrl + "?token=" +
                URLEncoder.encode(token, StandardCharsets.UTF_8);
        res.sendRedirect(redirect);
    }
}
