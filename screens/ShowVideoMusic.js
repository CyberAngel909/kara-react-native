import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, SafeAreaView, Image, TouchableOpacity } from "react-native";
import YoutubePlayer from "react-native-youtube-iframe";
import moment from "moment";
export default function ShowVideoMusic(props) {
    const { obj } = props.route.params;
    const formatDate = (n) => {
        const format = moment(new Date(n)).format("YYYY,MM,DD");
        const s = format.split(",");
        const formatMoment = [s[0], s[1] - 1, s[2]];
        return moment(formatMoment).fromNow();
    };
    return (
        <SafeAreaView style={styles.container}>
            <YoutubePlayer
                height={300}
                play={true}
                videoId={obj.id.videoId}
            />
            <View style={styles.custom_view_video}>
                <Image
                    style={styles.custom_image}
                    source={{ uri: obj.snippet.thumbnails.default.url }}
                />
                <View style={styles.custom_title_video}>
                    <Text style={styles.custom_name_video}>{obj.snippet.title}</Text>
                    <View style={styles.custom_title_video_detail}>
                        <Text style={styles.custom_info_name}>
                            {obj.snippet.channelTitle}
                        </Text>
                        <Text style={styles.custom_info_name}>
                            {obj.snippet.channelTitle}
                        </Text>
                        <Text style={styles.custom_info_name}>
                            {formatDate(obj.snippet.publishTime)}
                        </Text>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    custom_item: {
        backgroundColor: "#e1ecf4",
        width: 140,
        height: 180,
        margin: 10,
        borderRadius: 10,
        shadowColor: "#7d7b7b8a",
        shadowOffset: {
            width: 4,
            height: 4,
        },
        shadowOpacity: 0.5,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        alignItems: "center"
    },
    custom_image: {
        width: 100,
        height: 100
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
        flexWrap: "wrap"
    },
    custom_title_video: {
        position: "relative", left: 20
    },
    custom_info_name: {
        color: "#767676ed",
        fontSize: 12,
        width: 100
    }
});
