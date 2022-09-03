package com.coding.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.coding.model.user;

@Repository
public interface UserRepository extends JpaRepository<user,Long> {

}
