import {useRoutes} from 'react-router-dom';

// project import
import MainRoutes from 'routes/MainRoutes';


export default function ThemeRoutes() {
    return useRoutes([MainRoutes]);
}
