package com.expedia.loyalty.viewpoint;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.web.bind.annotation.RestController;

/**
 * Hello world!
 *
 */

@SpringBootApplication

@ComponentScan("com.expedia")
public class App

{
    public static void main( String[] args )
    {
        SpringApplication.run(App.class,args);

    }
}
