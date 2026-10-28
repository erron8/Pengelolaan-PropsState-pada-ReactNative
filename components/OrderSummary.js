import React from 'react';
import { Text, View } from 'react-native';

export default function OrderSummary({ totalCount }) {
  return (
    <View>
      <Text>Total Item Dipesan: {totalCount}</Text>
    </View>
  );
}
