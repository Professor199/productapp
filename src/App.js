
import {useEffect, useState} from 'react';
import Cards from './Components/Cards';


function App() {

  const[apiData,setApiData]=useState(null)

  useEffect(()=>{
     handleApi()
  },[])

  const handleApi=async()=>{
    const data = await fetch("https://fakestoreapi.com/products")
    const jsonData=await data.json()
    setApiData(jsonData) 
  }
   console.log("Apidata",apiData)
  return (
  <>
  <Cards data={apiData}/>
  </>
    
  )
}

export default App;
