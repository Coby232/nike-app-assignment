import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  Image,
  Button,
  StyleSheet,
} from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useNavigation } from "@react-navigation/native";
import NikeLogo from "./icons/NikeLogo.jsx";
import Bars from "./icons/Bars.jsx";
import NikeShoe1 from "./images/NikeShoe1.jsx";
import ShopLogo from "./icons/ShopLogo.jsx";
import NikeShoe2 from "./images/NikeShoe2.jsx";
import NikeShoe3 from "./images/NikeShoe3.jsx";
import NikeShoe4 from "./images/NikeShoe4.jsx";
import NikeShoe5 from "./images/NikeShoe5.jsx";
import FowardArrow from './icons/ForwardArrow.jsx';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const ScreenWidth = Dimensions.get("screen").width;
const ScreenHeight = Dimensions.get("screen").height;

export default function HomePage() {
  return (
    <NavigationContainer independent={true}>
      <DrawerNavigator />
    </NavigationContainer>
  );
}

const Home = () => {
  return (
    <ScrollView
      className='bg-white py-32'
      contentContainerStyle={{
        flexDirection: "column",
        alignItems: "center",
        width: ScreenWidth,
        height: ScreenHeight,
      }}
      horizontal={false}
      scrollEnabled={true}>
      <View
        className='bg-slate-200 h-1/4 rounded-3xl flex flex-row items-center justify-center'
        style={{ width: ScreenWidth * 0.82 }}>
        <View className='flex flex-col items-center gap-3 p-5'>
          <View>
            <Text className='text-2xl font-bold'>20% Discount</Text>
            <Text>on your first purchase</Text>
          </View>
          <TouchableOpacity
            className='bg-black h-7 w-24 justify-center items-center rounded-2xl'
            activeOpacity={0.8}>
            <Text className='text-white text-xs '>Shop now</Text>
          </TouchableOpacity>
        </View>
        <NikeShoe1 />
      </View>
      <View className='flex flex-row justify-center -my-2'>
        <Text className='text-5xl font-bold'>
          .<Text className='text-slate-300'>...</Text>
        </Text>
      </View>
      <View>
        <View style={styles.categoriesContainer}>
          <ScrollView
            horizontal={true}
            scrollEnabled={true}
            contentContainerStyle={styles.scrollable}>
            <TouchableOpacity
              className='bg-black w-20 h-9 rounded-3xl'
              style={styles.categories}
              activeOpacity={0.8}>
              <Text className='text-white'>All</Text>
            </TouchableOpacity>
            <TouchableOpacity
              className=' w-20 p-2 rounded-3xl h-9'
              style={styles.categories}
              activeOpacity={0.8}>
              <Text className=''>Running</Text>
            </TouchableOpacity>
            <TouchableOpacity
              className=' w-20 p-2 rounded-3xl h-9'
              style={styles.categories}
              activeOpacity={0.8}>
              <Text className=''>Sneakers</Text>
            </TouchableOpacity>
            <TouchableOpacity
              className=' w-20 p-2 rounded-3xl h-9'
              style={styles.categories}
              activeOpacity={0.8}>
              <Text className=''>Formal</Text>
            </TouchableOpacity>
            <TouchableOpacity
              className=' w-20 p-2 rounded-3xl h-9'
              style={styles.categories}
              activeOpacity={0.8}>
              <Text className=''>Casual</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
        <ScrollView
          className='h-full'
          contentContainerStyle={{
            flexDirection: "column",
            gap: ScreenHeight * 0.005,
            justifyContent: "center",
          }}>
          <View className=' flex flex-row justify-center items-center pt-7 px-14 gap-5'>
            <View className=' h-52 w-1/2 rounded-3xl bg-slate-100 '>
              <NikeShoe2 />
              <View className="flex flex-row gap-7 items-end p-5">
                <View>
                  <Text className="font-bold">Air Max 97</Text>
                  <Text>$20.99</Text>
                </View>
                <View className='w-6 h-5 bg-white flex flex-row px-0.5 rounded-md border border-gray-200'><FowardArrow/></View>
              </View>
            </View>
            <View className=' h-52 w-1/2 bg-slate-100 rounded-3xl'>
              <NikeShoe3 />
              <View className="flex flex-row gap-4 items-end p-5">
                <View>
                  <Text className="font-bold">React Presto</Text>
                  <Text>$25.99</Text>
                </View>
                <View className='w-6 h-5 bg-white flex flex-row px-0.5 rounded-md border border-gray-200'><FowardArrow/></View>
              </View>
            </View>
          </View>
          <View className='flex flex-row justify-center pt-7 px-14 gap-5'>
            <View className=' h-52 w-1/2 bg-slate-100 rounded-3xl '>
              <NikeShoe4 />
            </View>
            <View className=' h-52 w-1/2 bg-slate-100 rounded-3xl '>
              <NikeShoe5 />
            </View>
          </View>
        </ScrollView>
      </View>
    </ScrollView>
  );
};

const DrawerButton = ({}) => {
  const navigation = useNavigation();
  return (
    <View>
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => {
          navigation.openDrawer();
        }}
        style={{ height: 10, marginLeft: ScreenWidth * 0.02 }}>
        <View className='bg-white h-9 w-10 rounded-md border p-1.5 px-2'>
          <Bars width={50} height={50} />
        </View>
      </TouchableOpacity>
    </View>
  );
};

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      // drawerContent={(props) => <DrawerMenu {...props} />}
      screenOptions={{
        drawerStyle: { width: ScreenWidth * 0.85 },
      }}>
      <Drawer.Screen
        name='Nikeeee'
        component={Home}
        options={{
          headerShown: true,
          headerTransparent: true,
          headerTitle: " ",
          headerLeft: (props) => {
            return (
              <View className='m-7'>
                <View className='flex flex-row '>
                  <DrawerButton />
                  <View className='ml-8 -top-3'>
                    <NikeLogo height={60} width={60} />
                  </View>
                </View>
              </View>
            );
          },
          headerRight: (props) => {
            return (
              <View className='m-7 mr-10'>
                <View className='rounded-md bg-white h-9 w-10 border p-1.5 px-2'>
                  <ShopLogo />
                </View>
              </View>
            );
          },
        }}
      />
    </Drawer.Navigator>
  );
};

const styles = StyleSheet.create({
  categories: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  },
  categoriesContainer: {
    flexDirection: "row",
    // flex: 1,
    width: ScreenWidth,
    height: "5%",
  },
  scrollable: {
    paddingLeft: 40,
  },
});
