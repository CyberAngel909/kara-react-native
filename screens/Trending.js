import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import TopNav from "../components/TopNav";
import apiYoutube from "../serviceApi/apiYoutube";
import { SafeAreaView } from "react-native-safe-area-context";
import TopMusicToday from "../components/TopMusicToday";
export default function Trending(props) {

  const [HotListItem, setHotListItem] = useState([]);
  useEffect(() => {
    async function fetchPostList() {
      try {
        const response = await apiYoutube.get("search", {
          params: {
            q: "karaoke thịnh hành nhất hiện nay",
          },
        });
        const formatResult = await response.data.items;
        setHotListItem(formatResult)
      } catch (error) {
        console.log(error);
      }
    }
    fetchPostList();
  }, []);
  function formatString(string) {
    if (string.length > 25) {
      return string.substring(0, 25) + "...";
    } else {
      return string
    }
  }
  function randomColor() {
    let color = Math.floor(Math.random() * 16777215).toString(16)
    return "#" + color
  }

  return (
    <SafeAreaView>
      <TopNav
        onPressLogin={() =>
          props.navigation.navigate("Login", {
            name: "Thịnh hành",
          })
        }
        onPressSearch={() =>
          props.navigation.navigate("Search", {
            name: "Thịnh hành",
          })
        }
      />
      <Text style={styles.custom_text_trending}>Thịnh hành</Text>
      <View style={styles.container} >
        <FlatList
          data={HotListItem}
          renderItem={({ item, index }) => <TopMusicToday HotListItem={item} index={index} onPress={() => props.navigation.navigate("ShowVideoMusic", {
            obj: item
          })} />}
          keyExtractor={(item) => `${item.id.videoId}`}
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
  custom_text_trending: {
    left: 2,
    fontSize: 24,
    fontWeight: "700",
    padding: 10,
    top: 5
  },
});
