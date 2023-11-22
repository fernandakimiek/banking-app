import {NavigationContainer} from '@react-navigation/native';
// import DrawerRoutes from './drawer';
import AuthRoutes from './auth';

export default function Routes() {
  return (
    <NavigationContainer>
      <AuthRoutes />
    </NavigationContainer>
  );
}
