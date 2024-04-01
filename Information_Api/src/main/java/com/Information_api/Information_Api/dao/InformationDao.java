package com.Information_api.Information_Api.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.Information_api.Information_Api.enties.Information;

public interface InformationDao extends JpaRepository<Information,Long > {
	
	
	

}
