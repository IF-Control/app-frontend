import React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import ImageViewer from 'react-native-image-zoom-viewer';

export default function AppMap(){
  const images = [
    {
      url: 'https://i.imgur.com/pGTiODG.jpeg'
    }
  ];

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <ImageViewer
          imageUrls={images}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F5FCFF',
    flex: 1,
  }
});
