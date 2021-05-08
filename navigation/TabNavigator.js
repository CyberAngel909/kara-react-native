import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import {
  HomeNavigator,
  TrendingNavigator,
  CategoryNavigator,
  UserNavigator,
} from "./StackNavigator";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          if (route.name === "Trang chủ") {
            return (
              <Ionicons
                name={"ios-home-outline"}
                size={focused ? 35 : 25}
                color={focused ? "red" : "black"}
              />
            );
          } else if (route.name === "Thịnh hành") {
            return (
              <Ionicons
                name={"ios-compass-outline"}
                size={focused ? 35 : 25}
                color={focused ? "red" : "black"}
              />
            );
          } else if (route.name === "Thể loại") {
            return (
              <Ionicons
                name={"add-circle-outline"}
                size={focused ? 35 : 25}
                color={focused ? "red" : "black"}
              />
            );
          } else if (route.name === "Người dùng") {
            return (
              <Ionicons
                name={"person-circle-outline"}
                size={focused ? 35 : 25}
                color={focused ? "red" : "black"}
              />
            );
          }
        },
      })}
      tabBarOptions={{
        activeTintColor: "black",
        labelStyle: {
          fontWeight: "400",
          fontSize: 15,
          color: "black",
        },
      }}
    >
      <Tab.Screen name="Trang chủ" component={HomeNavigator} />
      <Tab.Screen name="Thịnh hành" component={TrendingNavigator} />
      <Tab.Screen name="Thể loại" component={CategoryNavigator} />
      <Tab.Screen name="Người dùng" component={UserNavigator}/>
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
