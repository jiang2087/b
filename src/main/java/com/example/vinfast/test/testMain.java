package com.example.vinfast.test;

import com.example.vinfast.service.IUserService;
import com.example.vinfast.service.impl.UserService;

import java.sql.Date;

public class testMain {
    public static void main(String[] args) {
        IUserService userService = new UserService();
        System.out.println(userService.validEmailAndPassword("d@gmail.com", "123"));
    }
}
