import React, { useState, useEffect } from 'react'

export default function Graph() {

    let [globalData, setglobalData] = useState([])

   useEffect(()=>{
    async function callApi() {
        let response = await fetch('https://corona.lmao.ninja/v2/countries?yesterday&sort')
        let data = await response.json();
        setglobalData(data)
        console.log(data)
    }
    callApi();
   },[])
   
    
    return (
        <div>

        </div>
    )
}