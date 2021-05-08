import React, { useEffect, useState } from "react";
import { Button, Image, StyleSheet, Text, View } from "react-native";
import TopNav from "../components/TopNav";
import apiYoutube from "../serviceApi/apiYoutube";
import { SliderBox } from "react-native-image-slider-box";
import { SafeAreaView } from "react-native-safe-area-context";
import { FlatList, ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import ListTrending from "../components/ListTrending";
import TopMusicToday from "../components/TopMusicToday";
export default function HomeScreen(props) {
  const [images, setimages] = useState([
    "https://source.unsplash.com/1024x768/?nature",
    "https://source.unsplash.com/1024x768/?water",
    "https://source.unsplash.com/1024x768/?girl",
    "https://source.unsplash.com/1024x768/?tree",
  ]);
  const [HotListItem, setHotListItem] = useState([]);
  useEffect(() => {
    async function fetchPostList() {
      try {
        const response = await apiYoutube.get("search", {
          params: {
            q: "karaoke mới nhất hiện nay",
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

  const [TopListItem, setTopListItem] = useState([]);
  useEffect(() => {
    async function fetchPostList() {
      try {
        const response = await apiYoutube.get("search", {
          params: {
            q: "karaoke thịnh hành nhất hiện nay",
          },
        });
        const formatResult = await response.data.items;
        setTopListItem(formatResult)
      } catch (error) {
        console.log(error);
      }
    }
    fetchPostList();
  }, []);

  function randomColor() {
    let color = Math.floor(Math.random() * 16777215).toString(16)
    return "#" + color
  }
  let listdata = [
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
    }
  ]
  return (
    <SafeAreaView style={styles.custom_view_main}>
      <ScrollView style={styles.custom_scrollview}>
        <TopNav
          onPressSearch={() =>
            props.navigation.navigate("Search", {
              name: "Trang chủ",
            })
          }
        />
        <View style={styles.custom_slider}>
          <SliderBox images={images} sliderBoxHeight={200}
            dotColor="#FFEE58"
            inactiveDotColor="#90A4AE"
            paginationBoxVerticalPadding={20}
            autoplay
            circleLoop
            resizeMethod={'resize'}
            resizeMode={'cover'}
            paginationBoxStyle={{
              position: "absolute",
              bottom: 0,
              padding: 0,
              alignItems: "center",
              alignSelf: "center",
              justifyContent: "center",
              paddingVertical: 10
            }}
            dotStyle={{
              width: 10,
              height: 10,
              borderRadius: 5,
              marginHorizontal: 0,
              padding: 0,
              margin: 0,
              backgroundColor: "rgba(128, 128, 128, 0.92)"
            }}
            ImageComponentStyle={{ borderRadius: 15, width: '94%', marginTop: 30 }}
            imageLoadingColor="#2196F3"
          />
        </View>
        <View>
          <Text style={[styles.custom_text_trending]}>
            Đề xuất hôm nay
          </Text>
          <FlatList
            data={HotListItem}
            renderItem={({ item }) => <TopMusicToday HotListItem={item} onPress={() => props.navigation.navigate("ShowVideoMusic", {
              obj: item,
            })} />}
            keyExtractor={(item) => `${item.id.videoId}`}
          />
        </View>

        <View>
          <Text style={styles.custom_text_trending}>
            Top thịnh hành
          </Text>
          <FlatList
            data={TopListItem}
            horizontal
            showsHorizontalScrollIndicator={false}

            renderItem={({ item, index }) => <ListTrending index={index} TopListItem={item} onPress={() => props.navigation.navigate("ShowVideoMusic", {
              obj: item,
            })} />}
            keyExtractor={(item) => `${item.id.videoId}`}
          />
        </View>

        <View>
          <Text style={styles.custom_text_trending}>
            Thể loại
          </Text>
          <View style={styles.custom_category}>
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
                  <View style={[styles.custom_category_title, { backgroundColor: item.color }]}>
                    <Text style={styles.title_detail}>{item.category}</Text>
                  </View>
                </TouchableOpacity>}
              numColumns={2}
              keyExtractor={(item) => `${item.id}`}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView >
  );
}

const styles = StyleSheet.create({
  custom_view_main: { flex: 1 },
  custom_scrollview: {
    marginBottom: -35
  },
  custom_text_trending: {
    left: 2,
    fontSize: 24,
    fontWeight: "700",
    padding: 10,
    top: 5

  },
  custom_slider: {
    // top: 10
  },
  custom_category: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  custom_category_title: {
    height: 55,
    width: 171,
    margin: 8,
    display: "flex",
    justifyContent: "center",
    borderRadius: 10
  },
  title_detail: {
    alignSelf: "center",
    fontWeight: "600",
    fontSize: 17,
    color: "#ffffff",
    textTransform: "uppercase"
  }
});
