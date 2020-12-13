import { StatusBar } from 'expo-status-bar';
import React from 'react';
import 'react-native-gesture-handler';
import { StyleSheet, Text, View } from 'react-native';
// SharedEl preparation and navigation
import {NavigationContainer} from '@react-navigation/native';
import {createSharedElementStackNavigator} from 'react-navigation-shared-element';
import List from './screens/ListScreen';
import Detail from './screens/Detail';

const Stack = createSharedElementStackNavigator();

const App = () =>  {
  return (
   <NavigationContainer>
     <Stack.Navigator initialRouteName='List'>
       <Stack.Screen name='List' component={List}/>
       <Stack.Screen 
          name='Detail'
          component={Detail}
          options={() => ({
            gestureEnabled: false,
            transitionSpec: {
              open: {animation: 'timing', config: {duration: 1000}},
              close: {animation: 'timing', config: {duration: 1000}},
            },
            cardStyleInterpolator: ({current: {progress}}) => {
              return {
                cardStyle: {
                  opacity: progress,
                }
              }
            }
          })}
          />
     </Stack.Navigator>
   </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
