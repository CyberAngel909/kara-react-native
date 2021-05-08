import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Trending from "../screens/Trending";
import Home from "../screens/HomeScreen";
import Category from "../screens/Category";
import Search from "../screens/Search";
import ShowVideoMusic from "../screens/ShowVideoMusic";
import CategoryDetail from "../screens/CategoryDetail";
import Dashboard from "../screens/dashboard";
const Stack = createStackNavigator();

const screenOptionStyle = {
  headerStyle: {
    backgroundColor: "#9AC4F8",
  },
  headerTintColor: "white",
  headerBackTitle: "Back",
};
const HomeNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen
        options={{ headerShown: false }}
        name="Trang chủ"
        component={Home}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="Search"
        component={Search}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="ShowVideoMusic"
        component={ShowVideoMusic}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="CategoryDetail"
        component={CategoryDetail}
      />
    </Stack.Navigator>
  );
};

const TrendingNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen
        options={{ headerShown: false }}
        name="Thịnh hành"
        component={Trending}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="Search"
        component={Search}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="ShowVideoMusic"
        component={ShowVideoMusic}
      />
    </Stack.Navigator>
  );
};

const CategoryNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen
        options={{ headerShown: false }}
        name="Thể loại"
        component={Category}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="Search"
        component={Search}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="ShowVideoMusic"
        component={ShowVideoMusic}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="CategoryDetail"
        component={CategoryDetail}
      />
    </Stack.Navigator>
  );
};

const UserNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen
        options={{ headerShown: false }}
        name="Người dùng"
        component={Dashboard}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="Search"
        component={Search}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="ShowVideoMusic"
        component={ShowVideoMusic}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="CategoryDetail"
        component={CategoryDetail}
      />
    </Stack.Navigator>
  );
};
export { HomeNavigator, TrendingNavigator, CategoryNavigator, UserNavigator };
