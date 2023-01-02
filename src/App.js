import React from 'react';

import {ThemeProvider} from "@mui/material/styles";
import CssBaseline from '@mui/material/CssBaseline';

import theme from "themes/minTheme";
import Routes from 'routes';
import ScrollTop from "components/ScrollTop";


import './App.css';

function App() {


    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <ScrollTop>
                <Routes/>
            </ScrollTop>
        </ThemeProvider>
    );
}

export default App;
