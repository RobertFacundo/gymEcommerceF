import {Navigate, Outlet} from 'react-router-dom';
import { useAppSelector } from '../redux/hooks';

export const ProtectedRoute = ()=>{
    const {isAuthenticated} = useAppSelector(state=>state.auth);

    if(!isAuthenticated){
        return <Navigate to='/auth'/>
    }

    return <Outlet/>
}