import { App as AntDApp, ConfigProvider, theme } from 'antd';
import ptBR from 'antd/es/locale/pt_BR';
import { BrowserRouter } from 'react-router-dom';

import Modules from './modules';

export default function App() {
  return (
    <ConfigProvider
      locale={ptBR}
      theme={{
        algorithm: theme.defaultAlgorithm,
        
        token: {
          
          colorPrimary: '#0D1F57',
          colorPrimaryText: '#ffffff',
          fontSize: 13,
          colorLink: '#1da57a',
        },
      }}
    >
      <AntDApp>
        <BrowserRouter>
          <Modules />
        </BrowserRouter>
      </AntDApp>
    </ConfigProvider>
  );
}