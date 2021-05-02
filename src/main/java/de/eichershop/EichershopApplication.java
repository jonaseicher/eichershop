package de.eichershop;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.context.support.PropertySourcesPlaceholderConfigurer;
import org.springframework.core.io.ClassPathResource;

@SpringBootApplication
@EnableAutoConfiguration
public class EichershopApplication {

    public static void main(String[] args) {
        // Fixes issue with (spring devtools leading to) different classloaders for InteractionEvent
        // https://stackoverflow.com/questions/46848557/same-class-not-assignable-classloader-for-same-class-different
        System.setProperty("spring.devtools.restart.enabled", "false");
        SpringApplication.run(EichershopApplication.class, args);
    }

    @Bean
    public static PropertySourcesPlaceholderConfigurer placeholderConfigurer() {
        PropertySourcesPlaceholderConfigurer propsConfig
                = new PropertySourcesPlaceholderConfigurer();
        propsConfig.setLocation(new ClassPathResource("git.properties"));
        propsConfig.setIgnoreResourceNotFound(true);
        propsConfig.setIgnoreUnresolvablePlaceholders(true);
        return propsConfig;
    }

}
