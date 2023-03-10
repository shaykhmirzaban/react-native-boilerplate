import {NavigationContainer} from '@react-navigation/native';

// component
// import StackNavigation from './navigation/StackNavigation';
import TabNavigation from './navigation/TabNavigation';
// import DrawerNavigation from './navigation/DrawerNavigation';

function MyApp() {
  return (
    <NavigationContainer>
      <TabNavigation />
    </NavigationContainer>
  );
}

export default MyApp;
