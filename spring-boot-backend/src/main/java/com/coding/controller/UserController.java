package com.coding.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.coding.model.user;
import com.coding.repository.UserRepository;

// we have used inbuilt H2 database , so no need to setup application.properties file.
@CrossOrigin(origins="http://localhost:3000")
@RestController
@RequestMapping("users/v1/")
public class UserController {

	@Autowired
	private UserRepository userRepo;
 
	
	// returns list of users
	@GetMapping("AllUsers")
	public List<user> getUsers() {
		return this.userRepo.findAll();

	}

}
