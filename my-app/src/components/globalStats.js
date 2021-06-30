import React, { useState, useEffect } from 'react';
// import { useStyles, Paper, Grid, makeStyles } from '@material-ui/core'

export default function GlobalStats(){
  
    useEffect(()=>{

        async function callApi(){
            let response = await fetch ('https://corona.lmao.ninja/v2/all?yesterday')
            let data = await response.json()

            console.log(data)
        }

callApi();
    },[])
  
    return(
        <div>
            

        </div>
    )
}