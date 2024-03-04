import React, {useEffect, useRef, useState} from 'react';
import {
    View,
    Text,
    SafeAreaView,
    StyleSheet,
    Image,
    DimensionValue,
    Dimensions,
    PermissionsAndroid,
    TouchableHighlight,
    ToastAndroid
} from 'react-native';
import {Card, Title, Paragraph, ActivityIndicator} from 'react-native-paper';
import {useRoute} from '@react-navigation/native';
import ViewShot, {captureRef} from 'react-native-view-shot';

function FullImageView() {

    const route = useRoute();
    const path = route.params?.path;
    const fileName = route.params.fileName;
    const ref = useRef();
    const [loading, setLoading] = useState(false);
  

    const new_view = () => {
        return (
          <SafeAreaView style={Styles.paren_view}>
            <ViewShot ref={ref}>
              <Card style={Styles.container}>
                <Card.Cover style={Styles.card_cover} source={{uri: path}} />
              </Card>
            </ViewShot>
            <View style={Styles.menu_view}>
              <TouchableHighlight onPress={() => shareImage()}>
                <Image
                  style={Styles.icons}
                  source={require('../assets/icons/share.png')}
                />
              </TouchableHighlight>
    
              <TouchableHighlight onPress={() => onLike(path)}>
                <Image
                  style={Styles.icons}
                  source={require('../assets/icons/like.png')}
                />
              </TouchableHighlight>
    
              <TouchableHighlight onPress={() => downloadFile(path)}>
                <Image
                  style={Styles.icons}
                  source={require('../assets/icons/arrow.png')}
                />
              </TouchableHighlight>
              {loading ? <ActivityIndicator size="small" color="#0000ff" /> : null}
            </View>
          </SafeAreaView>
        );
      };
    
      return new_view();
}

const Styles = StyleSheet.create({
    paren_view: {
      width: '100%',
      height: '100%',
      backgroundColor: '#0d0c22',
    },
    container: {
      alignContent: 'center',
      marginTop: 15,
      backgroundColor: 'white',
      opacity: 1,
      shadowColor: '#171717',
      shadowOffset: {width: -2, height: 4},
      shadowOpacity: 0.9,
      shadowRadius: 3,
      width: '80%',
      height: '85%',
      alignSelf: 'center',
    },
    card_txt: {
      fontSize: 15,
      color: 'black',
    },
    card_cover: {
      width: '100%',
      height: '100%',
    },
    menu_view: {
      justifyContent: 'center',
      alignSelf: 'center',
      borderColor: 'black',
      borderRadius: 10,
      borderWidth: 1,
      width: '70%',
      flexDirection: 'row',
      backgroundColor: '#D3D3D3',
      marginTop: -30,
    },
    icons: {
      width: 33,
      height: 33,
      marginStart: 20,
      marginLeft: 20,
      marginEnd: 20,
      marginRight: 20,
      marginTop: 8,
      marginBottom: 8,
      borderColor: 'white',
    },
    app_title: {
      fontSize: 15,
      textAlign: 'right',
      color: '#f87217',
      fontWeight: 'bold',
      fontFamily: 'serif',
      marginEnd: 25,
    },
  });
  

export default FullImageView;