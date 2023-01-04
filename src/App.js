import React from 'react';

import {ThemeProvider} from "@mui/material/styles";
import CssBaseline from '@mui/material/CssBaseline';

import useMediaQuery from '@mui/material/useMediaQuery';
import { createTheme } from '@mui/material';
import {darkTheme} from "themes/darkTheme";
import {lightTheme} from "themes/lightTheme";
import {themeMode} from "app/appBrand";

import Routes from 'routes';
import ScrollTop from "components/ScrollTop";


import './App.css';

function App() {

   // choose dark mode or light mode based on system or manual setting
   const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
   const darkMode = themeMode === "system" ? prefersDarkMode : themeMode === "dark";
   const theme = createTheme(darkMode ? darkTheme : lightTheme);


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
