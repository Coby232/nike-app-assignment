import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  SafeAreaView,
} from "react-native";
import HomePage from "./src/screens/HomePage";
import Favorites from "./src/screens/Favourites";
import Notifications from "./src/screens/Notifications";
import Profile from "./src/screens/Profile";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import FeatherIcon from "react-native-vector-icons/Feather";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";


const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const ScreenWidth = Dimensions.get("screen").width;
const ScreenHeight = Dimensions.get("screen").height;

export default function App() {

  return (
      <NavigationContainer
      // onStateChange={(state) => {
      //   console.log("New state is", state);
      // }}
      >
        <Tab.Navigator
          screenOptions={{
            tabBarShowLabel: false,
            tabBarStyle: {
              height: ScreenHeight * 0.1,
              borderTopLeftRadius: ScreenWidth * 0.05,
              borderTopRightRadius: ScreenWidth * 0.05,
              backgroundColor: "#FFFFFF",
              position: "absolute",
              borderWidth:0, //for testing
              borderTopWidth:0,
                shadowColor: '#000000',  
      elevation: 10,  
            },
          }}>
          <Tab.Screen
            name='Home'
            component={HomePage}
            options={{
              tabBarIcon: (tabInfo) => {
                return (
                  <FeatherIcon
                    name='home'
                    color={tabInfo.focused ? "#0D0D0D" : "#8e8e93"}
                    size={30}
                  />
                );
              },
              headerShown: false,
            }}
          />
          <Tab.Screen
            name='Favorites'
            component={Favorites}
            options={{
              tabBarIcon: (tabInfo) => {
                return (
                  <FeatherIcon
                    name='bookmark'
                    color={tabInfo.focused ? "#0D0D0D" : "#8e8e93"}
                    size={30}
                  />
                );
              },
              // headerShown:false,
            }}
          />
          <Tab.Screen
            name='Notification'
            component={Notifications}
            options={{
              tabBarIcon: (tabInfo) => {
                return (
                  <SimpleLineIcons
                    name='bell'
                    color={tabInfo.focused ? "#0D0D0D" : "#8e8e93"}
                    size={30}
                  />
                );
              },
              // headerShown:false,
            }}
          />
          <Tab.Screen
            name='Profile'
            component={Profile}
            options={{
              tabBarIcon: (tabInfo) => {
                return (
                  <FeatherIcon
                    name='user'
                    color={tabInfo.focused ? "#0D0D0D" : "#8e8e93"}
                    size={30}
                  />
                );
              },
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
  );
}
