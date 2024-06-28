import { IconDefinition, faHome, faCar, faUser, faGasPump, faTools, faDollarSign, faClipboard, faUniversity } from "@fortawesome/free-solid-svg-icons";
import { ReactNode } from "react";
import Home from "../modules/Home";
import Vehicles from "../modules/Vehicles";
import Drivers from "../modules/Drivers";
import Fueling from "../modules/Fueling";
import Maintenance from "../modules/Maintenance";
import Debts from "../modules/Debts";
import Registration from "../modules/Registration";
import Users from "../modules/Users";

export type RouteModuleKeysType = 'home' | 'vehicles' | 'drivers' | 'fueling' | 'maintenance' | 'debts' | 'registration' | 'users';

interface RouteModuleType {
  key: RouteModuleKeysType;
  path: `/${string}`;
  element: ReactNode;
  name: string;
  icon: IconDefinition;
  order: number;
}

export const routesModule: RouteModuleType[] = [
  {
    key: 'home',
    path: '/',
    name: 'Home',
    icon: faHome,
    element: <Home />,
    order: 1,
  },
  {
    key: 'vehicles',
    path: '/vehicles',
    name: 'Veículos',
    icon: faCar,
    element: <Vehicles />,
    order: 2,
  },
  {
    key: 'drivers',
    path: '/drivers',
    name: 'Motoristas',
    icon: faUser,
    element: <Drivers />,
    order: 3,
  },
  {
    key: 'fueling',
    path: '/fueling',
    name: 'Abastecidas',
    icon: faGasPump,
    element: <Fueling />,
    order: 4,
  },
  {
    key: 'maintenance',
    path: '/maintenance',
    name: 'Manutenção',
    icon: faTools,
    element: <Maintenance />,
    order: 5,
  },
  {
    key: 'debts',
    path: '/debts',
    name: 'Débitos',
    icon: faDollarSign,
    element: <Debts />,
    order: 6,
  },
  {
    key: 'registration',
    path: '/registration',
    name: 'Cadastro',
    icon: faClipboard,
    element: <Registration />,
    order: 7,
  },
  {
    key: 'users',
    path: '/users',
    name: 'Usuários',
    icon: faUniversity,
    element: <Users />,
    order: 8,
  },
];
