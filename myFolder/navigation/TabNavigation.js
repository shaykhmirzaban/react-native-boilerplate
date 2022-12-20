import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';

// components
import Home from '../screens/Home';
import Login from '../screens/Login';

const Tab = createBottomTabNavigator();
function TabNavigation() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#000',
        tabBarActiveBackgroundColor: '#fff',
        tabBarInactiveTintColor: '#333',
        tabBarInactiveBackgroundColor: '#fff',
      }}>
      <Tab.Screen
        name="Login"
        component={Login}
        options={{
          tabBarIcon: color => {
            return <Icon name="menu" size={25} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: color => {
            return <Icon name="home" size={25} color={color} />;
          },
        }}
      />
    </Tab.Navigator>
  );
}

export default TabNavigation;
