import { createTheme } from '@mui/material/styles'

// Augment the theme & PalleteOptions interfaces to accept new variables
declare module '@mui/material/styles' {
    interface Palette {
        accent?: Palette['primary']
    }
    // allow configuration using `createTheme`
    interface PaletteOptions {
        accent?: PaletteOptions['primary']
    }
}

const theme = createTheme({
    palette: {
        mode: 'dark',
        background: {
            paper: '#242426',
        },
        primary: {
            main: '#6ECB5A',
        },
        secondary: {
            main: 'rgb(0, 200, 249)',
        },
        accent: {
            main: '#ff6d00',
            dark: '#b24c00',
            light: '#ff8a33',
        },
    },
    typography: {
        fontFamily: ['Play', 'Roboto'].join(','),
    },
})

export default theme
