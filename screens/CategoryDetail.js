import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import TopNav from "../components/TopNav";
import apiYoutube from "../serviceApi/apiYoutube";
import { SafeAreaView } from "react-native-safe-area-context";
import TopMusicToday from "../components/TopMusicToday";
export default function CategoryDetail(props) {
    const { obj } = props.route.params;
    const [Category, setCategory] = useState([])
    useEffect(() => {
        async function fetchPostList() {
            try {
                const response = await apiYoutube.get("search", {
                    params: {
                        q: obj.url
                    },
                });
                setCategory(response.data.items);
            } catch (error) {
                console.log(error);
            }
        }
        fetchPostList();
    }, []);

    return (
        <SafeAreaView >
            <TopNav
                onPressLogin={() =>
                    props.navigation.navigate("Login", {
                        name: "CategoryDetail",
                    })
                }
                onPressSearch={() =>
                    props.navigation.navigate("Search", {
                        name: "CategoryDetail",
                    })
                }
            />
            <View style={[styles.custom_view_title_detail, { backgroundColor: obj.color }]}>
                <Text style={styles.custom_text_trending}>{obj.category}</Text>
            </View>
            <View style={styles.container} >
                <FlatList
                    data={Category}
                    renderItem={({ item }) => <TopMusicToday HotListItem={item} onPress={() => props.navigation.navigate("ShowVideoMusic", {
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
        fontSize: 24,
        fontWeight: "700",
        textAlign: "center",
        color: "white"
    },
    custom_view_title_detail: {
        margin: 15,
        top: 10,
        height: 80,
        display: "flex",
        justifyContent: "center",
        borderColor: "#ff6b866e",
        borderWidth: 1,
        borderRadius: 10,
        shadowColor: "#ff6b866e",
        shadowOffset: {
            width: 6,
            height: 6,
        },
        shadowOpacity: 0.5,
    }
});
