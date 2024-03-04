import React, { useState, useEffect, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ScrollView,
  SafeAreaView,
  Button,
  Dimensions,
  TouchableOpacity,
  RefreshControl
} from 'react-native';
import { Card, Title, Paragraph, ActivityIndicator } from 'react-native-paper';
import axios from 'axios';
import { getHeaders } from '../common/Helper';
import { ENDPOINTS } from '../common/Endpoints';
import VideoPlayer from './VideoPlayer';

import Video from 'react-native-video';


function VideoScreen({ navigation }) {
  const videoRef = useRef(null);
  const [refreshing, setRefreshing] = useState(false);
  const [isPaused, setIsPaused] = useState(true);
  const url = 'http://192.168.0.109:5000/static/upload-4231668829.mp4'
  const thumbnailSource = "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcS8MQwxZr6QNj-nD5Rwryhja5mBy9RF99MQyG4-ZGhApsCPJ-1U"


  const videos = [
    { id: 1, thumbnail: 'http://192.168.0.109:5000/static/wallpaper/wallpaper-163721182.png', videoSource: 'http://192.168.0.109:5000/static/upload-4231668829.mp4' },
    { id: 2, thumbnail: 'http://192.168.0.109:5000/static/wallpaper/wallpaper-163721182.png', videoSource: 'http://192.168.0.109:5000/static/upload-4231668829.mp4' },
    // Add more video objects as needed
  ];


  const onRefresh = () => {
    console.log("OnRefresh Get Called from video screen...");
    setRefreshing(true);
    fetchVideos()
  };


  useEffect(() => {
    fetchVideos()
  }, [])

  const fetchVideos = () => {
    console.log("Fetching all videos");
    axios.get(ENDPOINTS.GET_ALL_VIDEOS + "ACTIVE", { headers: getHeaders })
      .then(response => {
        console.log("RESPONSE : ", response.data);
      })
      .catch(error => {
        console.log("Error : ", error);
      })

    setRefreshing(false)
  }

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <VideoPlayer thumbnailSource={item.thumbnail} videoSource={item.videoSource} />
    </View>
  );

  return (
    <SafeAreaView style={styles.parent_view}>
      <ScrollView refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={onRefresh}
          colors={['#f87217']}
          progressBackgroundColor="#ffffff"
        />
      }
      >
        <FlatList
          data={videos}
          renderItem={renderItem}
          keyExtractor={item => item.id.toString()}
          numColumns={numColumns}
          contentContainerStyle={styles.grid}
        />
      </ScrollView>
    </SafeAreaView>
  )
}

const numColumns = 2;
const screenWidth = Dimensions.get('window').width;


const styles = StyleSheet.create({
  parent_view: {
    width: '100%',
    height: '100%',
    backgroundColor: '#0d0c22',
  },
  grid: {
    paddingHorizontal: 8,
    paddingTop: 8,
  },
  item: {
    flex: 1,
    margin: 4,
    width: (screenWidth - 16) / numColumns,
    height: 220
    // aspectRatio: 16 / 9, // You can adjust this aspect ratio as needed
  },
});

export default VideoScreen;
