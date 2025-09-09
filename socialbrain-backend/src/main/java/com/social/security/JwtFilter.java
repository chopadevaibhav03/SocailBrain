//package com.social.security;
//
//import java.io.IOException;
//
//import org.springframework.util.StringUtils;  
//import org.springframework.web.filter.OncePerRequestFilter;
//
//import com.social.service.UserService;
//
//import jakarta.servlet.FilterChain;
//import jakarta.servlet.ServletException;
//import jakarta.servlet.http.HttpServletRequest;
//import jakarta.servlet.http.HttpServletResponse;
//
//public class JwtFilter extends OncePerRequestFilter {
//
//    private final JwtUtil jwtUtil;
//    private final UserService userService;
//
//    public JwtFilter(JwtUtil jwtUtil, UserService userService) {
//        this.jwtUtil = jwtUtil;
//        this.userService = userService;
//    }
//
//    @Override
//    protected void doFilterInternal(HttpServletRequest request,
//                                    HttpServletResponse response,
//                                    FilterChain filterChain)
//            throws ServletException, IOException {
//
//        String header = request.getHeader("Authorization");
//
//        if (StringUtils.hasText(header) && header.startsWith("Bearer ")) {
//            String token = header.substring(7);
//            try {
//            	if (jwtUtil.validateToken(token)) {
//            	    String username = jwtUtil.extractUsername(token);
//            	    request.setAttribute("username", username);
//            	}
//            } catch (Exception e) {
//                System.out.println("❌ Invalid JWT: " + e.getMessage());
//            }
//        }
//
//        filterChain.doFilter(request, response);
//    }
//}
