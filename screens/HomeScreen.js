import React, { useState, useEffect } from 'react';
import { View, Image, FlatList, StyleSheet, Dimensions } from 'react-native';
import { getStorage, ref, listAll, getDownloadURL } from 'firebase/storage';
import { storage } from '../config/firebaseConfig';
import YoutubePlayer from 'react-native-youtube-iframe';

const HomeScreen = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const imagesRef = ref(storage, 'images'); // Reference to the "images" folder
        const result = await listAll(imagesRef);
        const urls = await Promise.all(result.items.map((imageRef) => getDownloadURL(imageRef)));
        setData(urls);
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    };

    fetchData();
  }, []);

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Image source={{ uri: item }} style={styles.image} />
    </View>
  );

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(item, index) => index.toString()}
      contentContainerStyle={styles.container}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingTop: 20,
  },
  item: {
    marginBottom: 20,
  },
  image: {
    width: Dimensions.get('window').width - 40,
    height: 200,
    borderRadius: 10,
  },
});

export default HomeScreen;
