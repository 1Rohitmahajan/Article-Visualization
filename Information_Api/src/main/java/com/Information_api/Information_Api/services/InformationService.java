package com.Information_api.Information_Api.services;

import java.util.List;

import com.Information_api.Information_Api.enties.Information;

public interface InformationService {
	public List<Information> getInformations();

	public Information getInformations(long infoSerial_no);
    	

}
