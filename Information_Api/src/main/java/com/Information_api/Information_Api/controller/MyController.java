package com.Information_api.Information_Api.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.Information_api.Information_Api.enties.Information;
import com.Information_api.Information_Api.services.InformationService;
//rest :- representational state transfer 
@CrossOrigin("*")
@RestController   //annotation to tell our project this is a controller class
public class MyController {
	@Autowired  //Autowired create a object 
	private InformationService informationService;
	//controller is accept the request 
	@GetMapping("/home")
	public String home() {
		
	  return "this is Home page";
	}
	//get the information
	@GetMapping("/informations")
	public List<Information> getInformations()
	{
		return this.informationService.getInformations();
	}
	//get single information
	@GetMapping("/informations/{infoSerial_no}")
	public Information getInformation(@PathVariable String infoSerial_no) 
	{
		return this.informationService.getInformations(Long.parseLong(infoSerial_no));
		}
	//add information
	
      
}
