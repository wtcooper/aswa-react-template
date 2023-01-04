import {ReactComponent as AppLogo} from "assets/icons/sagesnips/sagesnips_icon_core.svg";
import SvgIcon from '@mui/material/SvgIcon';

export const themeMode = "light" // "dark" or "light" or "system" (system is based on OS pref)

export const appTitle = "Templater"

export const AppIcon = () => {
   return (
      <SvgIcon
         color="white"
         sx={{
            fontSize: "30px",
            display: {xs: 'flex', md: 'flex'},
            mr: 1
         }}
      >
         <AppLogo/>
      </SvgIcon>
   )
}
