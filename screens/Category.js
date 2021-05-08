import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import TopNav from "../components/TopNav";
import { SafeAreaView } from "react-native-safe-area-context";
export default function HomeScreen(props) {

  function randomColor() {
    let color = Math.floor(Math.random() * 16777215).toString(16)
    return "#" + color
  }
  const listdata = [
    {
      id: "1",
      category: "NHẠC TRỮ TÌNH",
      color: randomColor(),
      url: "karaoke nhạc trữ tình"
    },
    {
      id: "2",
      category: "NHẠC TRẺ",
      color: randomColor(),
      url: "karaoke nhạc trẻ"
    },
    {
      id: "3",
      category: "NHẠC DÂN CA",
      color: randomColor(),
      url: "karaoke nhạc dân ca"
    },
    {
      id: "4",
      category: "NHẠC CÁCH MẠNG",
      color: randomColor(),
      url: "karaoke nhạc cách mạng"
    },
    {
      id: "5",
      category: "RAP VIỆT",
      color: randomColor(),
      url: "karaoke rap việt"
    },
    {
      id: "6",
      category: "DANCE VIỆT",
      color: randomColor(),
      url: "karaoke dance việt"
    },
    {
      id: "7",
      category: "WDM & ROCK",
      color: randomColor(),
      url: "karaoke wdm & rock"
    },
    {
      id: "8",
      category: "NHẠC CẢI LƯƠNG",
      color: randomColor(),
      url: "karaoke nhạc cải lương"
    },
    {
      id: "9",
      category: "NHẠC THIẾU NHI",
      color: randomColor(),
      url: "karaoke nhạc thiếu nhi"
    },
    {
      id: "10",
      category: "KHÁC",
      color: randomColor(),
      url: "karaoke khác"
    }
  ]

  return (
    <SafeAreaView>
      <TopNav
        onPressLogin={() =>
          props.navigation.navigate("Login", {
            name: "Thể loại",
          })
        }
        onPressSearch={() =>
          props.navigation.navigate("Search", {
            name: "Thể loại",
          })
        }
      />
      <Text style={styles.custom_text_trending}>Thể loại</Text>
      <View style={styles.container}>

        <FlatList
          data={listdata}
          renderItem={({ item }) =>
            <TouchableOpacity
              activeOpacity={0.5}
              onPress={() => {
                props.navigation.navigate("CategoryDetail", {
                  obj: item
                })
              }} >
              <View style={[styles.custom_category_detail, { backgroundColor: item.color }]}>
                <Text style={styles.title_detail}>{item.category}</Text>
              </View>
            </TouchableOpacity>}
          numColumns={2}
          keyExtractor={(item) => `${item.id}`}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    height: "100%"
  },
  custom_category: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  custom_category_detail: {
    height: 90,
    width: 171,
    margin: 8,
    display: "flex",
    justifyContent: "center",
    borderRadius: 10,
    shadowColor: "#7d7b7b8a",
    shadowOffset: {
      width: 4,
      height: 4,
    },
    shadowOpacity: 0.5,
  },
  title_detail: {
    alignSelf: "center",
    fontWeight: "600",
    fontSize: 17,
    color: "#ffffff",
    textTransform: "uppercase"
  },
  custom_text_trending: {
    left: 2,
    fontSize: 24,
    fontWeight: "700",
    padding: 10,
    top: 5
  },
});
