import React from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Login from '../screens/Login';
import Home from '../screens/Home';
import { useSelector } from 'react-redux';
import Favourite from '../screens/Favourite';
import HomeIcon from '../assets/home.svg'; // Import the SVG icon for Home
import StarIcon from '../assets/star.svg'; // Import the SVG icon for Star

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Favourite" component={Favourite} />
    </Stack.Navigator>
  );
};

const AppStack = () => {
  const { user } = useSelector((state) => state);

  return (
    <>
      {user.userName !== '' ? (
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconComponent;

              if (route.name === 'Home') {
                iconComponent = focused ? <HomeIcon fill={color} width={size} height={size} /> : <HomeIcon fill="none" width={size} height={size} />;
              } else if (route.name === 'Favourite') {
                iconComponent = focused ? <StarIcon fill={color} width={size} height={size} /> : <StarIcon fill="none" width={size} height={size} />;
              }

              // Return the icon component
              return iconComponent;
            },
          })}
        >
          <Tab.Screen name="Home" component={HomeStack} />
          <Tab.Screen name="Favourite" component={Favourite} />
        </Tab.Navigator>
      ) : (
        <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Login">
          <Stack.Screen name="Login" component={Login} />
        </Stack.Navigator>
      )}
    </>
  );
};

export default AppStack;
