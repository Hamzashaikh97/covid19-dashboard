import React, { useState } from 'react';
import { makeStyles, Paper, Tabs, Tab } from '@material-ui/core';


const useStyles = makeStyles({
    root: {
      flexGrow: 1,
      maxWidth:1050,
      margin:"0 auto",
      marginTop:'20px',
    },
  });

export default function SelectionTab(props) {

    const classes = useStyles();
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue)
        props.screenConfig[1](newValue)
        console.log(newValue)


    };
    
    return (

        <Paper square className={classes.root}>
            <Tabs
                value={value}
                indicatorColor="primary"
                textColor="primary"
                onChange={handleChange}
                centered
            >
                <Tab label="GLOBAL STATISTIC" />
                <Tab label="COUNTRIES" />
                <Tab label="GRAPH" />
                <Tab label="MAP" />



            </Tabs>
        </Paper>


    )
}