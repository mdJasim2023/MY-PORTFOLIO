// import axios from 'axios'
import React, { useEffect } from 'react'

function Exm() {
    const [dataa,setData] = React.useState([])

    // useEffect(()=>{
    //     axios.get('https://restcountries.com/v3.1/all').then((response)=>{
    //         setData(response.data)
    //     })
    // },[])
    // useEffect(()=>{
    //     fetch('https://restcountries.com/v3.1/all')
    //     .then((response)=>{
    //         return response.json()
    //     })
    //     .then((data)=>{
    //         setData(data)
    //     })
    // },[])

    // useEffect(()=>{
    //     $.ajax('https://restcountries.com/v3.1/all',)
    // })
    console.log(dataa);
  return (
    <div>
        {
            dataa.map((item)=>{
                return <h1>{item.name.common}</h1>                
            })
        }
    </div>
  )
}

export default Exm