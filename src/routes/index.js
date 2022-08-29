import React, {useState} from 'react';
import AppRoutes from './app.routes';
import AuthRoutes from './auth.routes';

export default function Routes() {
  const [signed, setSigned] = useState(true);
  return signed ? <AppRoutes /> : <AuthRoutes />;
}
