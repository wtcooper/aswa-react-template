import {ReactComponent as AppLogo} from "assets/icons/sagesnips/sagesnips_icon_core.svg";
import SvgIcon from '@mui/material/SvgIcon';


export const appTitle = "Templater"

export const AppIcon = () => {
   return (
      <SvgIcon
         color="blackAndWhite"
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
