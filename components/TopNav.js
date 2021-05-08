import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Image, StyleSheet, View, TouchableOpacity } from "react-native";

export default function TopNav(props) {
  const { onPressSearch } = props;
  return (
    <View style={styles.header_nav}>
      <Image
        style={styles.custom_image}
        source={require("../assets/logo_youtobe.png")}
      />
      <Ionicons
        style={styles.icon_notification}
        size={24}
        name="ios-notifications-outline"
      />
      <TouchableOpacity>
        <Ionicons
          style={styles.icon_search}
          size={24}
          name="ios-search-outline"
          onPress={onPressSearch}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  header_nav: {
    position: "relative",
    display: "flex",
    maxWidth: "100%",
    maxHeight: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    alignContent: "center",
  },
  custom_image: {
    position: "relative",
    left: 5,
    width: 130,
    height: 60,
  },
  icon_user: {
    position: "relative",
    right: 15,
  },
  icon_notification: {
    position: "relative",
    left: 50,
  },
  icon_search: {
    position: "relative",
    left: 20,
  },
});
