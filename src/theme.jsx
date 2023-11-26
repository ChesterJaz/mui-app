import { createTheme } from "@mui/material";


export const theme = createTheme({
    palette:{
        primary:{
            main: "blue"
        },
        secondary:{
            main: "skyblue"
        },
        error: {
            main: "red"
        },
        success: {
            main: "green"
        },
        warning: {
            main: "orange"
        }
    }
})