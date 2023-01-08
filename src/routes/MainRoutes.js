import {lazy} from 'react';

// project import
import Loadable from 'components/Loadable';
import TopNav from 'layout/TopNav';
import BottomNav from 'layout/BottomNav';

import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import VisibilityIcon from '@mui/icons-material/Visibility';

import CreateIcon from '@mui/icons-material/Create';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import VideogameAssetIcon from '@mui/icons-material/VideogameAsset';

// render - dashboard
// const IngestDashboard = Loadable(lazy(() => import('pages/ingest/IngestDashboard')));
const Landing = Loadable(lazy(() => import('pages/Landing')));
const Register = Loadable(lazy(() => import('pages/Register')));

const AppCore = Loadable(lazy(() => import('pages/AppCore')));
const Visibility = Loadable(lazy(() => import('pages/AppCore/Visibility')));
const Settings = Loadable(lazy(() => import('pages/AppCore/Settings')));
const TextEntry = Loadable(lazy(() => import('pages/AppCore/TextEntry')));
const Sketch = Loadable(lazy(() => import('pages/AppCore/Sketch')));
const DBUser = Loadable(lazy(() => import('pages/AppCore/DBUser')));

// ==============================|| MAIN ROUTING ||============================== //


// Flow and Roles
// Landing - Open (no auth)
//  -> Content:
//      -> hero statement (carasel)
//      -> pricing view -> don't select plan, but have Button to Sign Up
//      -> about section
//  -> Clicking either SignUp button (on pricing) or Login Button (nav bar):
//  -> if not logged in:
//      -> normal SignIn / SignUp (AZ AD B2C)
//  -> if anonymous only role:
//      -> go to Register
//          -> choose plan
//  -> if registered role:
//      -> go to App


export const appSettingsList = [
   {
      path: 'settings',
      name: 'Settings',
      element: <Settings/>,
      icon: <ManageAccountsIcon/>,
   },
   {
      path: 'visibility',
      name: 'Visibility',
      element: <Visibility/>,
      icon: <VisibilityIcon/>,
   },

]

export const appNavList = [
   {
      path: 'entry',
      parentPath: 'app',
      name: 'Entry',
      element: <TextEntry/>,
      icon: <CreateIcon fontSize='large' sx={{color: "secondary.dark"}}/>,
   },
   {
      path: 'sketch',
      parentPath: 'app',
      name: 'Sketch',
      element: <Sketch/>,
      icon: <VideogameAssetIcon fontSize='large' sx={{color: "secondary.dark"}}/>,
   },
   {
      path: 'user',
      parentPath: 'app',
      name: 'User',
      element: <DBUser/>,
      icon: <SentimentSatisfiedAltIcon fontSize='large' sx={{color: "secondary.dark"}}/>,
   }

]


const MainRoutes = {
   path: '/',
   element: <TopNav/>,
   // element: <h1>Test in Routes</h1>,
   children: [
      {
         path: '/',
         element: <Landing/>
      },
      {
         path: 'register',
         element: <Register/>
      },
      {
         path: 'app',
         element: (
            <>
               <BottomNav/>
               <AppCore/>
            </>
         ),
         children: [].concat(appNavList).concat(appSettingsList)
      }
   ]
};

export default MainRoutes;
