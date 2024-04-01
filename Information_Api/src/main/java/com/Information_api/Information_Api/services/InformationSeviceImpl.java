package com.Information_api.Information_Api.services;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.Information_api.Information_Api.dao.InformationDao;
import com.Information_api.Information_Api.enties.Information;
@Service  //spring frame work identify this is service layer
public class InformationSeviceImpl implements InformationService {
    @Autowired
	private InformationDao informationDao;
	
	
    public InformationSeviceImpl() {
    	

    }
    
	@Override
	public List<Information> getInformations() {
		// TODO Auto-generated method stub
		return informationDao.findAll();
	}

	@SuppressWarnings("deprecation")
	@Override
	public Information getInformations(long infoSerial_no) {
		// TODO Auto-generated method stub
	
		return informationDao.getOne(infoSerial_no);
	}

}
