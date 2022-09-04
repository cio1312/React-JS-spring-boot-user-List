package com.coding;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.coding.model.user;
import com.coding.repository.UserRepository;

@SpringBootApplication
public class SpringBootBackendApplication implements CommandLineRunner {

	public static void main(String[] args) {
		SpringApplication.run(SpringBootBackendApplication.class, args);
	}

	@Autowired
	private UserRepository userRepo;
	
	@Override
	public void run(String... args) throws Exception { // methos of CommandLineRunner. so when code is run , this is executed
	
		this.userRepo.save(new user("johnny","english","johnny@gmail.com"));
		this.userRepo.save(new user("ravi","kumar","ravi@gmail.com"));
		this.userRepo.save(new user("simran","pillay","pillay@gmail.com"));
		this.userRepo.save(new user("feona","feona","feona@gmail.com"));
	}

}
