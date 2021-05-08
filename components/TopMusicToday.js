import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity, Button } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import moment from "moment";
export default function TopMusicToday(props) {
    const { HotListItem, onPress, index } = props;
    if (HotListItem.length <= 0) return <View></View>;
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
            <View style={styles.custom_item}>
                <Image style={styles.custom_image} source={{ uri: HotListItem.snippet.thumbnails.default.url }} />
                <View style={styles.custom_detail_content}>
                    <Text>{formatString(HotListItem.snippet.title)}</Text>
                    <Text>{formatDate(HotListItem.snippet.publishTime)}</Text>
                    <Text>{formatString(HotListItem.snippet.channelTitle)}</Text>
                </View>
                <TouchableOpacity activeOpacity={0.5} onPress={onPress}  >
                    <View style={styles.custom_button_hat}>
                        <Text style={styles.custom_click_hat} title="Hát" >Hát</Text>
                    </View>
                </TouchableOpacity>
            </View>
            {index ? (<Text style={styles.custom_stt_trending}>{index}</Text>) : null}
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        maxHeight: 90,
        bottom: 40
    },
    custom_item: {
        backgroundColor: "#ffc4b517",
        width: "95%",
        height: 85,
        margin: 10,
        borderRadius: 10,
        shadowColor: "#ff6b866e",
        shadowOffset: {
            width: 4,
            height: 4,
        },
        shadowOpacity: 0.5,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    custom_image: {
        width: 50,
        height: 50,
        left: 10
    },
    custom_detail_content: {
        display: "flex",
        flexDirection: "column",
        width: "60%",
        alignContent: "space-around"
    },
    custom_button_hat: {
        right: 30,
        width: "150%",
        backgroundColor: "#ff9800ba",
        borderRadius: 10,
        display: "flex",
        alignItems: "center"
    },
    custom_click_hat: {
        fontSize: 20,
        padding: 10,
        fontWeight: "600",
        color: "#fff"

    },
    custom_stt_trending: {
        position: "absolute",
        fontSize: 35,
        fontWeight: "700",
        fontFamily: "Cochin",
        left: 15,
        top: -35,
        color: "#ff5522",
        borderColor: "black",
        borderWidth: 1,
        borderRadius: 18,
        width: 36,
        height: 36,
        textAlign: "center"
    }
});
