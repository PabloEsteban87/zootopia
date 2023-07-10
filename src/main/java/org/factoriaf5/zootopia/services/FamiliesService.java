package org.factoriaf5.zootopia.services;

import org.factoriaf5.zootopia.models.families.Families;
import org.factoriaf5.zootopia.repositories.FamiliesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class FamiliesService {
    


    @Autowired
    FamiliesRepository familiesRepository;
    
    public Families findById(Long id){
        Families familias = familiesRepository.findById(id);
        return familias;
    }
}


