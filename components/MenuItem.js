import React, { useState } from 'react';
import { Button, Text, View } from 'react-native';

export default function MenuItem({ nama, harga }) {
  const [qty, setQty] = useState(0);

  return (
    <View>
      <Text>{nama}</Text>
      <Text>Rp {harga}</Text>
      <Text>Jumlah: {qty}</Text>
      <Button title="Tambah Pesanan" onPress={() => setQty((jumlah) => jumlah + 1)} />
    </View>
  );
}
