// screens/HomeScreen.js
import React, { useState, useEffect } from 'react';
import { View, Text, Image, FlatList, StyleSheet, Dimensions } from 'react-native';
import { firebase } from '../config/firebaseConfig'; // Updated import path
import YoutubePlayer from 'react-native-youtube-iframe';

const HomeScreen = () => {
  const [feedData, setFeedData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch images from Firebase Storage
        const storageRef = firebase.storage().ref('images');
        const imageList = await storageRef.listAll();
        const imageUrls = await Promise.all(
          imageList.items.map(item => item.getDownloadURL())
        );

        // Fetch YouTube video IDs from Firebase Realtime Database
        const videoRef = firebase.database().ref('videos');
        const snapshot = await videoRef.once('value');
        const videoIds = snapshot.val();

        // Combine images and videos into a single feed
        const combinedFeed = [
          ...imageUrls.map(url => ({ type: 'image', url })),
          ...Object.keys(videoIds).map(id => ({ type: 'video', id: videoIds[id] })),
        ];

        setFeedData(combinedFeed);
      } catch (error) {
        console.error('Error fetching data: ', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const renderItem = ({ item }) => {
    if (item.type === 'image') {
      return <Image source={{ uri: item.url }} style={styles.image} />;
    } else if (item.type === 'video') {
      return (
        <View style={styles.videoContainer}>
          <YoutubePlayer
            height={200}
            play={false}
            videoId={item.id}
          />
        </View>
      );
    }
    return null;
  };

  if (loading) {
    return <Text>Loading...</Text>;
  }

  return (
    <FlatList
      data={feedData}
      renderItem={renderItem}
      keyExtractor={(item, index) => index.toString()}
    />
  );
};

const styles = StyleSheet.create({
  image: {
    width: Dimensions.get('window').width,
    height: 200,
    resizeMode: 'cover',
    marginBottom: 10,
  },
  videoContainer: {
    marginBottom: 10,
  },
});

export default HomeScreen;
