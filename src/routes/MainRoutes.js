import {lazy} from 'react';

// project import
import Loadable from 'components/Loadable';
import TopNav from 'layout/TopNav';
import BottomNav from 'layout/BottomNav';

import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import VisibilityIcon from '@mui/icons-material/Visibility';

import LooksOneIcon from '@mui/icons-material/LooksOne';
import LooksTwoIcon from '@mui/icons-material/LooksTwo';
import Looks3Icon from '@mui/icons-material/Looks3';

// render - dashboard
// const IngestDashboard = Loadable(lazy(() => import('pages/ingest/IngestDashboard')));
const Landing = Loadable(lazy(() => import('pages/Landing')));
const Register = Loadable(lazy(() => import('pages/Register')));

const AppCore = Loadable(lazy(() => import('pages/AppCore')));
const Visibility = Loadable(lazy(() => import('pages/AppCore/Visibility')));
const Settings = Loadable(lazy(() => import('pages/AppCore/Settings')));
const App1 = Loadable(lazy(() => import('pages/AppCore/App1')));
const App2 = Loadable(lazy(() => import('pages/AppCore/App2')));
const App3 = Loadable(lazy(() => import('pages/AppCore/App3')));

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
      path: 'app1',
      parentPath: 'app',
      name: 'App1',
      element: <App1/>,
      icon: <LooksOneIcon fontSize='large' sx={{color: "secondary.dark"}}/>,
   },
   {
      path: 'app2',
      parentPath: 'app',
      name: 'App2',
      element: <App2/>,
      icon: <LooksTwoIcon fontSize='large' sx={{color: "secondary.dark"}}/>,
   },
   {
      path: 'app3',
      parentPath: 'app',
      name: 'App3',
      element: <App3/>,
      icon: <Looks3Icon fontSize='large' sx={{color: "secondary.dark"}}/>,
   },

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
