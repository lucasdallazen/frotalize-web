import {
  useEffect
} from 'react';
import { Link, Route, useNavigate } from 'react-router-dom';
import { routesModule } from '../utils/routes';
import { MenuDataItem } from '@ant-design/pro-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export function useModules() {
  const navigate = useNavigate();

  useEffect(() => {

    //Verificar token

  }, [navigate]);


  const routes = routesModule.map((route) => <Route path={route.path} element={route.element} />)

  const menuItems = routesModule.map((route): MenuDataItem => {
    return {
      name: route.name,
      path: route.path,
      icon: <Link to={route.path}>
        <FontAwesomeIcon icon={route.icon} color='#0D1F57' /></Link>
    }
  })

  return {
    routes,
    menuItems
  };
}
