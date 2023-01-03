import React from 'react';

import {ThemeProvider} from "@mui/material/styles";
import CssBaseline from '@mui/material/CssBaseline';

import useMediaQuery from '@mui/material/useMediaQuery';
import { createTheme } from '@mui/material';
import {themeConfig} from "themes/minTheme";
// import theme from "themes/minTheme";

import Routes from 'routes';
import ScrollTop from "components/ScrollTop";


import './App.css';

function App() {
   const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

   // const themeUpdate = {...themeConfig, palette: {...themeConfig.palette, mode: prefersDarkMode ? 'dark' : 'light'} }
   const themeUpdate = {...themeConfig, palette: {...themeConfig.palette, mode: 'light'} }

  // const theme = React.useMemo(() => createTheme(themeUpdate), [prefersDarkMode]);

  const theme = createTheme(themeUpdate);

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
