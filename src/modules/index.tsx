import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

import { useModules } from './hooks';
import { FrotalizeLayout } from '../components/Layout';

const NoMatch = lazy(() => import('./NoMatch'));

export default function Modules() {
  const {  routes, menuItems } = useModules();

  return (
      <Routes>

        <Route path="/" element={<FrotalizeLayout menu={menuItems}/>}>
          {routes}
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
  );
}