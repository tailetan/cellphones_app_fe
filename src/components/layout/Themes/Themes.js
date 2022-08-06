import { ThemeProvider, createTheme } from "@mui/material/styles";

import PropTypes from "prop-types";
import Quicksand300IE68 from "../../../assets/font/quicksand/quicksand-v28-vietnamese_latin-ext_latin-300.eot?#iefix";
import Quicksand300IE9 from "../../../assets/font/quicksand/quicksand-v28-vietnamese_latin-ext_latin-300.eot";
import Quicksand300IOS from "../../../assets/font/quicksand/quicksand-v28-vietnamese_latin-ext_latin-300.svg#Quicksand";
import Quicksand300MB from "../../../assets/font/quicksand/quicksand-v28-vietnamese_latin-ext_latin-300.woff";
import Quicksand300OS from "../../../assets/font/quicksand/quicksand-v28-vietnamese_latin-ext_latin-300.ttf";
import Quicksand300SMB from "../../../assets/font/quicksand/quicksand-v28-vietnamese_latin-ext_latin-300.woff2";
import Quicksand400IE68 from "../../../assets/font/quicksand/quicksand-v28-vietnamese_latin-ext_latin-regular.eot?#iefix";
import Quicksand400IE9 from "../../../assets/font/quicksand/quicksand-v28-vietnamese_latin-ext_latin-regular.eot";
import Quicksand400IOS from "../../../assets/font/quicksand/quicksand-v28-vietnamese_latin-ext_latin-regular.svg#Quicksand";
import Quicksand400MB from "../../../assets/font/quicksand/quicksand-v28-vietnamese_latin-ext_latin-regular.woff";
import Quicksand400OS from "../../../assets/font/quicksand/quicksand-v28-vietnamese_latin-ext_latin-regular.ttf";
import Quicksand400SMB from "../../../assets/font/quicksand/quicksand-v28-vietnamese_latin-ext_latin-regular.woff2";
import React from "react";

const theme = createTheme({
  palette: {
    white: {
      main: "#ffffff",
    },
    red: {
      main: "#d70018",
    },
    grey: {
      light: "#f9fbfc",
      form: "#f5f4f7",
    },
    green: {
      main: "#28a745",
    },
    blue: {
      main: "#343a40",
      light: "#97bbe8",
    },
    dark: {
      main: "#232b33",
    },
    orange: {
      main: "#f6b52c",
    },
  },
  typography: {
    fontFamily: ["Quicksand", "sans-serif"].join(","),
  },
  menuPaper: {
    maxHeight: 100,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
      @font-face {
        font-family: 'Quicksand';
        font-style: normal;
        font-weight: 300;
        src: url(${Quicksand300IE9});
        src: local(''),
             url(${Quicksand300IE68}) format('embedded-opentype'),
             url(${Quicksand300SMB}) format('woff2'),
             url(${Quicksand300MB}) format('woff'),
             url(${Quicksand300OS}) format('truetype'),
             url(${Quicksand300IOS}) format('svg');
      }

      @font-face {
        font-family: 'Quicksand';
        font-style: normal;
        font-weight: 400;
        src: url(${Quicksand400IE9});
        src: local(''),
             url(${Quicksand400IE68}) format('embedded-opentype'),
             url(${Quicksand400SMB}) format('woff2'),
             url(${Quicksand400MB}) format('woff'),
             url(${Quicksand400OS}) format('truetype'),
             url(${Quicksand400IOS}) format('svg');
      }
      `,
    },
  },
});

export default function Theme({ children }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}

Theme.propTypes = {
  children: PropTypes.object,
};
