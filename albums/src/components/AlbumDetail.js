import React, { Component } from 'react';
import { View, Text } from 'react-native';

const AlbumDetail = (album) => {
  return (
    <View>
      <Text>{props.album.title}</Text>
    </View>
  );
};

export default AlbumDetail