import React from 'react';
import { Text, View } from 'react-native';

export default function MenuItem({ nama, harga }) {
  return (
    <View>
      <Text>{nama}</Text>
      <Text>Rp {harga}</Text>
    </View>
  );
}
