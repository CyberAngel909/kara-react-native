import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import { StyleSheet, TextInput, SafeAreaView, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import ListItemYoutube from "../components/ListItemYoutube";
import apiYoutube from "../serviceApi/apiYoutube";

export default function Search(props) {
  const [searchItem, setsearchItem] = useState();
  const [resultItem, setresultItem] = useState();
  async function handleKeyDown() {
    const response = await apiYoutube.get("search", {
      params: {
        q: searchItem,
      },
    });
    setresultItem(response.data.items);
  }
  return (
    <SafeAreaView>
      <View
        style={[
          styles.custom_container,
          resultItem
            ? { borderBottomColor: "#B0B0B000" }
            : { borderBottomColor: "#ccc" },
        ]}
      >
        <TextInput
          style={styles.input}
          onChangeText={(text) => setsearchItem(text)}
          value={searchItem}
          placeholder="Tìm kiếm trên youtube"
          returnKeyType="search"
          autoFocus={true}
          fontSize={22}
          onSubmitEditing={handleKeyDown}
        />
        <Ionicons
          style={styles.custom_iconsearch}
          name="ios-arrow-back"
          onPress={() => props.navigation.navigate(props.route.params.name)}
        />
        {searchItem ? (
          <Ionicons
            style={styles.custom_iconreset}
            name="ios-close-outline"
            onPress={() => setsearchItem("")}
          />
        ) : null}
      </View>
      <FlatList
        data={resultItem}
        renderItem={({ item }) => <ListItemYoutube senListItem={item} />}
        keyExtractor={(item) => `${item.etag}`}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  custom_container: {
    display: "flex",
    justifyContent: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    height: 40,
    marginBottom: 10,
  },
  input: {
    height: 60,
    margin: 12,
    left: 45,
    fontSize: 18,
  },
  custom_iconsearch: {
    position: "absolute",
    color: "gray",
    fontWeight: "bold",
    fontSize: 25,
    left: 12,
  },
  custom_iconreset: {
    position: "absolute",
    right: 12,
    color: "gray",
    fontWeight: "bold",
    fontSize: 25,
  },
});
