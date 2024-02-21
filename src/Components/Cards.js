import React from 'react'
import CardDetails from './CardDetails'

const Cards = ({data}) => {
    // console.log("props",props)
    console.log("Card data render",data)
  return (
    <>
    <CardDetails data={data}/>
    </>  
  )
}

export default Cards