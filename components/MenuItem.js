import React, { useState } from 'react';
import { Button, Text, View } from 'react-native';

export default function MenuItem({ nama, harga, onTambahPesanan }) {
  const [qty, setQty] = useState(0);

  const handleTambah = () => {
    setQty((jumlah) => jumlah + 1);
    onTambahPesanan();
  };

  return (
    <View>
      <Text>{nama}</Text>
      <Text>Rp {harga.toLocaleString('id-ID')}</Text>
      <Text>Jumlah: {qty}</Text>
      <Button title="Tambah Pesanan" onPress={handleTambah} />
    </View>
  );
}
