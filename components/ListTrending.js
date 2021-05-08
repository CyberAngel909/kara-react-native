import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, SafeAreaView, Image, TouchableOpacity } from "react-native";
import moment from "moment";
export default function ListTrending(props) {
    const { TopListItem, onPress, index } = props;
    if (TopListItem.length <= 0) return <View></View>;
    function formatString(string) {
        if (string.length > 25) {
            return string.substring(0, 25) + "...";
        } else {
            return string
        }
    }
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
        <SafeAreaView style={styles.container}>
            <TouchableOpacity activeOpacity={0.5} onPress={onPress}>
                <View style={styles.custom_item}>
                    <Text>{formatString(TopListItem.snippet.title)}</Text>
                    <Image style={styles.custom_image} source={{ uri: TopListItem.snippet.thumbnails.default.url }} />
                    <Text>{formatString(TopListItem.snippet.channelTitle)}</Text>
                    <Text>{formatDate(TopListItem.snippet.publishTime)}</Text>
                    <Text style={styles.custom_stt_item}> {index + 1}</Text>
                </View>
            </TouchableOpacity>
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
    custom_stt_item: {
        position: "absolute",
        left: -15,
        bottom: 0,
        fontSize: 40,
        fontWeight: "500",
        fontFamily: "Cochin"
    }
});
