package com.example.web.music;


import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

import static sun.misc.Version.println;

@CrossOrigin(origins = "http://localhost:8080", allowedHeaders = "*")
@RestController
public class AllController {
    @GetMapping("/list")
    public Map<?,?> list(@PathVariable String data){

        return null;

    }
}
