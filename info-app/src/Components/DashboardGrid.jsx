import React from 'react'
import Intensity from '../Charts_visualization/Intensity';
import Relavance from '../Charts_visualization/Relevance';
import  Regions from '../Charts_visualization/Regions';
import CountryPieChart from '../Charts_visualization/CountryPieChart';
import CityPieChart from '../Charts_visualization/CityPieChart';
import Likelihood from '../Charts_visualization/Likelihood';
import Topics from '../Charts_visualization/Topics';
import Year from '../Charts_visualization/Year';

function DashboardGrid() {
  return (

    // <div  className='flex gap-4 flex-col' >
    // <div className='bg-white rounded-sm p-4 flex-1 border border-gray-200 flex items-center '><CountryPieChart/></div>
    // <div className='bg-white rounded-sm p-4 flex-1 border border-gray-200 flex items-center'><Intensity/></div>
    // <div className='bg-white rounded-sm p-4 flex-2 border border-gray-200 flex items-center'> <Relavance/></div>
    // <div className='bg-white rounded-sm p-4 flex-2 border border-gray-200 flex items-center'><Regions/></div>


    // </div>
    <div className=' overflow-scroll-hidden bg-gray-100  flex flex-col'>
      
    <header className="bg-blue-500 py-4">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-white">Article Dashboard</h1>
      </div>
    </header>

    
    
    <div  className='flex Class bg-purple-50
    Properties
    flex-wrap gap-2 overflow-scroll-hidden'>
        
        <BoxWrapper><Intensity/></BoxWrapper>
      <BoxWrapper><CityPieChart/></BoxWrapper>
      <BoxWrapper><Topics/></BoxWrapper>
      <BoxWrapper><Regions/></BoxWrapper>
      <BoxWrapper><Likelihood/></BoxWrapper>
      <BoxWrapper> <Relavance/></BoxWrapper>
      <BoxWrapper><CountryPieChart/></BoxWrapper>
      <BoxWrapper><Year/></BoxWrapper>

    </div>
    </div>    
  )
}

export default DashboardGrid;

function BoxWrapper({children}){
  return (
      <div className='bg-white rounded-sm p-4 flex-1 border border-gray-800 flex h-50	 items-center '>{children}</div>
  )
}