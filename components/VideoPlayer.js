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
  Image
} from 'react-native';
import axios from 'axios';
import { getHeaders } from '../common/Helper';
import { ENDPOINTS } from '../common/Endpoints';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faPlay, faPause } from '@fortawesome/free-solid-svg-icons'; // import the specific icons you need

library.add(faPlay, faPause);

import Video from 'react-native-video';



function VideoPlayer() {
    const videoRef = useRef(null);

    const [isPaused, setIsPaused] = useState(true);
    const url = 'http://192.168.0.109:5000/static/upload-4231668829.mp4'
    const thumbnailSource = "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcS8MQwxZr6QNj-nD5Rwryhja5mBy9RF99MQyG4-ZGhApsCPJ-1U"
  
    const togglePlayPause = () => {
      setIsPaused(!isPaused);
      if (videoRef.current) {
        if (isPaused) {
          videoRef.current?.refs?.player?.play();
        } else {
          videoRef.current?.refs?.player?.pause();
        }
      }
    };

    return (
        <View style={styles.container}>    
          <Video
            ref={videoRef}
            source={{ uri: url }}
            style={styles.video}
            resizeMode="contain"
            paused={isPaused}
          />
          <TouchableOpacity
            style={styles.playPauseButton}
            onPress={togglePlayPause}
          >
            {isPaused ? (
            <FontAwesomeIcon icon={isPaused ? faPlay : faPause} size={40} color="white" />

            ) : (
                <FontAwesomeIcon icon={isPaused ? faPlay : faPause} size={40} color="white" />
            )}
          </TouchableOpacity>
        </View>
      )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      borderWidth:2,
      borderRadius:15,
      borderColor:'white',
      width:150,
      margin:10
    },
    thumbnailContainer: {
      position: 'relative',
      width: "200px",
      height: "100px"
    },
    video: {
      flex: 1,
      width: '100%',
      height: '100%',
    },
    playPauseButton: {
      position: 'absolute',
      zIndex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      width: 100,
      height: 100,
      borderRadius: 25,
    },
    buttonText: {
      color: 'white',
      fontSize: 18,
    },
});

export default VideoPlayer;
