import React from 'react'
import Intensity from './Intensity';
import Relavance from './Relevance';
import  Regions from './Regions';
import { ToastContainer } from 'react-toastify';
import CountryPieChart from './CountryPieChart';
import CityPieChart from './CityPieChart';
import Likelihood from './Likelihood';
import Topics from './Topics';
import Year from './Year';

function Charts() {
  return (

    // <div  className='flex gap-4 flex-col' >
    // <div className='bg-white rounded-sm p-4 flex-1 border border-gray-200 flex items-center '><CountryPieChart/></div>
    // <div className='bg-white rounded-sm p-4 flex-1 border border-gray-200 flex items-center'><Intensity/></div>
    // <div className='bg-white rounded-sm p-4 flex-2 border border-gray-200 flex items-center'> <Relavance/></div>
    // <div className='bg-white rounded-sm p-4 flex-2 border border-gray-200 flex items-center'><Regions/></div>


    // </div>

    <div  className='flex Class
    Properties
    flex-wrap gap-4 w-full overflow-scroll-hidden'>
        
      <BoxWrapper><Intensity/></BoxWrapper>
      <BoxWrapper><CityPieChart/></BoxWrapper>
      <BoxWrapper><Regions/></BoxWrapper>
      <BoxWrapper><Likelihood/></BoxWrapper>
      <BoxWrapper> <Relavance/></BoxWrapper>
      <BoxWrapper><Topics/></BoxWrapper>
      <BoxWrapper><CountryPieChart/></BoxWrapper>
      <BoxWrapper><Year/></BoxWrapper>
      <BoxWrapper><Regions/></BoxWrapper>

    </div>
  )
}

export default Charts;

function BoxWrapper({children}){
  return (
      <div className='bg-white rounded-sm p-4 flex-1 border border-gray-800 flex h-50	 items-center '>{children}</div>
  )
}