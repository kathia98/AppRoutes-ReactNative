import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import MapScreen from '../pages/MapScreen';
import { PermissionsScreen } from '../pages/PermissionsScreen';
import { useContext } from 'react';
import { PermissionsContext } from '../context/PermissionsContex';
import { LoadingScreen } from '../pages/LoadingScreen';

const Stack = createStackNavigator();

export const Navigator =() => {


    const {permissions} = useContext(PermissionsContext);

    if (permissions.locationStatus === 'unavailable'){
        return <LoadingScreen/>
    }




  return (

    <Stack.Navigator
        initialRouteName="PermissionsScreen"
        screenOptions={{
            headerShown: false,
            cardStyle:{
                backgroundColor:'white'
            }
        
        }}

    >

    {
        (permissions.locationStatus === 'granted')
        ?<Stack.Screen name="MapScreen" component={MapScreen} />
        :<Stack.Screen name="PermissionsScreen" component={PermissionsScreen} />
    }
      
    </Stack.Navigator>
     
  );
}