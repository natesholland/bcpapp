/**
 * My
 */
//  import 'react-native-gesture-handler';

 import React from 'react';
 import {StyleSheet} from 'react-native';
 import {NavigationContainer} from '@react-navigation/native';
 import {createStackNavigator} from '@react-navigation/stack';

 import Home from './components/Home';
 import Compline from './components/daily_office/Compline';
 import Noonday from './components/daily_office/Noonday';
 import DailyDevotion from './components/daily_office/DailyDevotion';
 import EveningPrayerRite2 from './components/daily_office/EveningPrayerRite2';
 import OrderOfEveningWorship from './components/daily_office/OrderOfEveningWorship';
 import Psalm4 from './components/psalms/Psalm4';
 import Psalm31 from './components/psalms/Psalm31';
 import Psalm91 from './components/psalms/Psalm91';
 import Psalm134 from './components/psalms/Psalm134';
 import Psalm119 from './components/psalms/Psalm119';
 import Psalm121 from './components/psalms/Psalm121';
 import Psalm126 from './components/psalms/Psalm126';
 import MorningPrayerRite2 from './components/daily_office/MorningPrayerRite2';

 const Stack = createStackNavigator();

 const App = () => {
   return (
     <NavigationContainer>
       <Stack.Navigator>
         <Stack.Screen
           name="Home"
           component={Home}
           options={{title: 'Daily Office'}}
         />
         <Stack.Screen
           name="MorningPrayerRite2"
           component={MorningPrayerRite2}
           options={{title: 'Morning Prayer Rite II'}}
         />
         <Stack.Screen
           name="Noonday"
           component={Noonday}
           options={{title: 'Noonday'}}
         />
         <Stack.Screen
           name="EveningPrayerRite2"
           component={EveningPrayerRite2}
           options={{title: 'Evening Prayer Rite II'}}
         />
         <Stack.Screen
           name="OrderOfEveningWorship"
           component={OrderOfEveningWorship}
           options={{title: 'Order of Evening Worship'}}
         />
         <Stack.Screen name="Compline" component={Compline} />
         <Stack.Screen
           name="DailyDevotion"
           component={DailyDevotion}
           options={{title: 'Daily Devotions'}}
         />
         <Stack.Screen name="Psalm 4" component={Psalm4} />
         <Stack.Screen name="Psalm 31" component={Psalm31} />
         <Stack.Screen name="Psalm 91" component={Psalm91} />
         <Stack.Screen name="Psalm 119" component={Psalm119} />
         <Stack.Screen name="Psalm 121" component={Psalm121} />
         <Stack.Screen name="Psalm 126" component={Psalm126} />
         <Stack.Screen name="Psalm 134" component={Psalm134} />
       </Stack.Navigator>
     </NavigationContainer>
   );
 };

 const styles = StyleSheet.create({
   container: {
     flex: 1,
     paddingTop: 60,
   },
   text: {
     fontSize: 20,
   },
 });

 export default App;
