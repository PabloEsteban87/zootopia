package org.factoriaf5.zootopia.controllers;

import org.factoriaf5.zootopia.models.families.Families;
import org.factoriaf5.zootopia.services.FamiliesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;


@CrossOrigin(origins = "http://localhost:4200")
public class FamiliesController {

    @Autowired
    FamiliesService familiesService;

    @GetMapping(path = "/families/{id}")
    public Families show(@PathVariable("id") long id){
        Families familias = familiesService.findById(id);
        return familias;
    }
}
