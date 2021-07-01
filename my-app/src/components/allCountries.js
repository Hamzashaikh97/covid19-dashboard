import React, { useEffect, useState } from 'react'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import TableHead from '@material-ui/core/TableHead';
import { makeStyles } from '@material-ui/core/styles';
import { TableContainer } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        margin: '0 auto',
        marginTop: '50px',
        maxWidth : 1000,
    },
    
}));

export default function AllCountries({ currentScreen }) {
    console.log(currentScreen)

    let [globalData, setglobalData] = useState([])

    useEffect(() => {
        async function callApi() {
            let response = await fetch('https://corona.lmao.ninja/v2/countries?yesterday&sort')
            let data = await response.json();
            console.log(data[0])
            setglobalData(data);
        }
        callApi();
    }, [])

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <TableContainer >
                <Table >
                    <TableHead>
                        <TableRow>
                            <TableCell>COUNTRIES</TableCell>

                            <TableCell>Today Cases</TableCell>
                            <TableCell>Today Deaths</TableCell>
                            <TableCell>Today Recoverd</TableCell>
                            <TableCell>Total Recovered</TableCell>
                            <TableCell>Total Active</TableCell>
                            <TableCell>Total Cases</TableCell>

                        </TableRow>
                    </TableHead>

                    <TableBody>
                        {globalData.map((value, index) => (

                            <TableRow key={index}>

                                <TableCell component="th" scope="row"> {value.country} </TableCell>
                                <TableCell> {value.todayCases} </TableCell>
                                <TableCell> {value.todayDeaths} </TableCell>
                                <TableCell> {value.todayRecovered} </TableCell>
                                <TableCell> {value.recovered} </TableCell>
                                <TableCell> {value.active} </TableCell>
                                <TableCell> {value.cases} </TableCell>

                            </TableRow>

                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

        </div>
    )
}