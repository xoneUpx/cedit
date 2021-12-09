import React, { PropsWithChildren} from 'react'
import { createTheme, ThemeProvider} from '@material-ui/core/styles'
import { useAppSelector} from '../redux/store/hooks'
import { AppColors, darkModeColors} from './colors'

const CustomThemeProvider = (props: PropsWithChildren<{}>) => {
  const darkMode = useAppSelector((state)=> state.darkMode);
  const theme = createTheme(
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
//declare module '@mui/core/styles' {
declare module '@material-ui/core/styles/createTheme' {
  interface Theme {
    background: string;
    font: string;
    }

  // allow configuration using `createTheme`
  interface ThemeOptions {
    background: string;
    font: string;
  }}
