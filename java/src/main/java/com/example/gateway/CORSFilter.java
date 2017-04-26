package com.example.gateway;

import org.slf4j.*;
import org.springframework.stereotype.Component;
import javax.servlet.*;
import java.io.IOException;
import javax.servlet.http.HttpServletResponse;

@Component
public class CORSFilter implements Filter {

    private static final Logger logger = LoggerFactory.getLogger(CORSFilter.class);
    public void doFilter(ServletRequest req, ServletResponse res, FilterChain chain) throws IOException, ServletException {
        HttpServletResponse response = (HttpServletResponse) res;
        response.setHeader("Access-Control-Allow-Origin", "*");
        response.setHeader("Access-Control-Allow-Methods", "POST, GET, PATCH, OPTIONS, DELETE, PUT");
        response.setHeader("Access-Control-Max-Age", "1728000");
        response.setHeader("Access-Control-Allow-Headers",
                "Content-Type, Accepts, Origin, User-Agent, Cache-Control, Authorization, Content-Length, X-Requested-With");
        chain.doFilter(req, res);
    }

    public void init(FilterConfig filterConfig) {
        logger.info("CORS Filter Initialized");
    }

    public void destroy() {}

}