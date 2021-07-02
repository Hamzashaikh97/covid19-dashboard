import React from 'react';
import {Bar} from 'react-chartjs-2';


function BarChart(props){
    
    console.log(props.SetCountry)
    var fetch_data=props.SetCountry;
    var data={}

    if(fetch_data !==undefined){

        data = {

            labels: ['Total Cases', 'Total Active', 'Total Recovered'],
            datasets: [
              {
                label: fetch_data.country,
                backgroundColor: 'rgba(255,99,132,0.2)',
                borderColor: 'rgba(255,99,132,1)',

                borderWidth: 1,
                hoverBackgroundColor: 'rgba(255,99,132,0.4)',
                hoverBorderColor: 'rgba(255,99,132,1)',
                data: [fetch_data.cases, fetch_data.active,fetch_data.recovered]
              }
            ]
       };
       if(fetch_data.cases===0 && fetch_data.active===0 && fetch_data.recovered===0 ){
           data = {
            labels: ['Total Cases', 'Total Active', 'Total Recovered'],
                datasets: [
                    {
                    label: fetch_data.country,
                    backgroundColor: 'rgba(255,99,132,0.2)',
                    borderColor: 'rgba(255,99,132,1)',
                    borderWidth: 1,
                    hoverBackgroundColor: 'rgba(255,99,132,0.4)',
                    hoverBorderColor: 'rgba(255,99,132,1)',
                    
                    }
                ]
           };
       }
   }
   
 
    return (
      <div >
       
        <Bar
          data={data}
          width={50}
          height={20}
          
        />
      </div>
    );
  }
export default BarChart;