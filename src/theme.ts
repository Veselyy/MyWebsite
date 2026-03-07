import type { Theme } from '@mui/material/styles';
import { createTheme } from '@mui/material/styles';

export type AppTheme = Theme;

const black = '#000000';
const white = '#ffffff';

const containerStyles = {
    styleOverrides: {
        root: ({ theme }: { theme: Theme }) => ({
            display: 'flex',
            flexDirection: 'column' as const,
            gap: theme.spacing(2),
        }),
    },
};

export const lightTheme = createTheme({
    palette: {
        mode: 'light',
        primary: { main: black },
        secondary: { main: white },
        background: { default: white, paper: white },
        text: { primary: black },
    },
    typography: {
        fontFamily: '"Roboto", sans-serif',
    },
    components: {
        MuiContainer: containerStyles,
    },
});

export const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: { main: white },
        secondary: { main: black },
        background: { default: black, paper: black },
        text: { primary: white },
    },
    typography: {
        fontFamily: '"Roboto", sans-serif',
    },
    components: {
        MuiContainer: containerStyles,
    },
});
