import React, { PropsWithChildren} from 'react'
import { createMuiTheme , ThemeProvider} from '@material-ui/core'
import { useAppSelector} from '../redux/store/hooks'
import { AppColors, darkModeColors} from './colors'
import React from 'react'

const CustomThemeProvider = (props: PropsWithChildren) => {
  const darkMode = useAppSelector((state)=> state.darkMode);
  const theme = createMuiTheme(
    {
      palette: {
        type: darkMode ? 'dark': 'light',
        primary: {
          main: AppColors.primary,
        },

      },
      background: darkMode ? darkModeColors.background : AppColors.background,
      font: darkMode ? darkModeColors.font : AppColors.font
    })
    return (
      <ThemeProvider theme={theme}>{props.children}</ThemeProvider>
    )
}
export default CustomThemeProvider;
declare module '@mui/material/styles/createMuiTheme' {
  interface Theme {
    background: string;
    font: string;
    };
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    background: string;
    font: string;
  };}
