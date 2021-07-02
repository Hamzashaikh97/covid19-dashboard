import React, { useState, useEffect } from 'react'
import BarChart from './bar'
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles({
    root: {
        marginTop: "20px",
    },


    Selector: {


        width: '200px',

    },
    manage_selector: {
        display: "flex",
        justifyContent: "space-around",
    },
    Graphs: {

        width: '200px',

    },
});


export default function Graph() {

    let [globalData, setglobalData] = useState([])

    useEffect(() => {
        async function callApi() {
            let response = await fetch('https://corona.lmao.ninja/v2/countries?yesterday&sort')
            let data = await response.json();
            setglobalData(data)
            console.log(data)
        }
        callApi();
    }, [])

    const classes = useStyles();
    const [age, setAge] = useState('0');

    const handleChange = (event) => {

        setAge(event.target.value);
    }

    const [graphs, setgraphs] = useState('1');

    const handleGraph = (event) => {

        setgraphs(event.target.value);
    }

    return (
        <div className={classes.root}>

        <div className={classes.manage_selector}>

            <FormControl className={classes.Selector} >
                <InputLabel id="demo-simple-select-helper-label" >Countries</InputLabel>
                <Select

                    value={age}
                    onChange={handleChange}

                >
                    {globalData.map((value, index) => {

                        return (
                            <MenuItem value={index} key={index} >{value.country}</MenuItem>
                        );
                    })}


                </Select>
            </FormControl>

        </div>


 <BarChart SetCountry={globalData[age]} /> 


    </div>
    )
}