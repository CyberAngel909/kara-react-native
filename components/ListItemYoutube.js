import React, { useEffect, useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import YoutubePlayer from "react-native-youtube-iframe";
import moment from "moment";

export default function ListItemYoutube(props) {
  const { senListItem } = props;
  const url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${senListItem.id.videoId}&key=AIzaSyAT7LC6cG23T7jqAwBJDZeUeR6x-s6FLtA`;

  const [DetailListItem, setDetailListItem] = useState([]);
  useEffect(() => {
    async function fetchListItem() {
      try {
        const response = await fetch(url);
        const responseJSON = await response.json();
        const ListItems = await responseJSON.items;
        setDetailListItem(ListItems);
      } catch (error) {
        console.log(error);
      }
    }
    fetchListItem();
  }, []);
  // if (DetailListItem.length <= 0) return <View></View>;
  const formatView = (n) => {
    if (n < 1e3) return n;
    if (n >= 1e3 && n < 1e6) return +(n / 1e3).toFixed(1) + "K views";
    if (n >= 1e6 && n < 1e9) return +(n / 1e6).toFixed(1) + "M views";
    if (n >= 1e9 && n < 1e12) return +(n / 1e9).toFixed(1) + "B views";
    if (n >= 1e12) return +(n / 1e12).toFixed(1) + "T";
  };

  const formatDate = (n) => {
    const format = moment(new Date(n)).format("YYYY,MM,DD");
    const s = format.split(",");
    const formatMoment = [s[0], s[1] - 1, s[2]];
    return moment(formatMoment).fromNow();
  };

  return (
    <View style={styles.main_container}>
      {DetailListItem.map((item) => (
        <View key={item.id}>
          <YoutubePlayer
            height={300}
            play={false}
            videoId={senListItem.id.videoId}
          />
          <View style={styles.custom_view_video}>
            <Image
              style={styles.custom_image}
              source={{ uri: item.snippet.thumbnails.default.url }}
            />
            <View style={styles.custom_title_video}>
              <Text style={styles.custom_name_video}>{item.snippet.title}</Text>
              <View style={styles.custom_title_video_detail}>
                <Text style={styles.custom_info_name}>
                  {item.snippet.channelTitle}
                </Text>
                <Text style={styles.custom_info_name}>
                  {formatView(item.statistics.viewCount)}
                </Text>
                <Text style={styles.custom_info_name}>
                  {formatDate(item.snippet.publishedAt)}
                </Text>
              </View>
            </View>
          </View>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  main_container: {
    display: "flex",
    height: 290,
  },
  custom_view_video: {
    bottom: 80,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  custom_image: {
    position: "relative",
    left: 10,
    width: 50,
    height: 50,
    borderRadius: 150 / 2,
  },
  custom_name_video: {
    maxWidth: 280,
    fontSize: 14,
    bottom: 5,
  },
  custom_title_video_detail: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  custom_title_video: { position: "relative", left: 20 },
  custom_info_name: {
    color: "#767676ed",
    fontSize: 12,
  },
});
