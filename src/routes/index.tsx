import {NavigationContainer} from '@react-navigation/native';
// import DrawerRoutes from './drawer';
// import AuthRoutes from './auth';
import AppRoutes from './app';

export default function Routes() {
  return (
    <NavigationContainer>
      {/* <AuthRoutes /> */}
      <AppRoutes />
    </NavigationContainer>
  );
}
