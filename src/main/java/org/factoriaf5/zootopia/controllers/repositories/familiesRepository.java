package org.factoriaf5.zootopia.controllers.repositories;

import org.factoriaf5.zootopia.models.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface familiesRepository extends JpaRepository<User,Long>{
    
}