import React, { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function MenuItem({ nama, harga, onTambahPesanan }) {
  const [qty, setQty] = useState(0);

  const handleTambah = () => {
    setQty((jumlah) => jumlah + 1);
    onTambahPesanan();
  };

  return (
    <View style={styles.kartu}>
      <Text style={styles.nama}>{nama}</Text>
      <Text style={styles.harga}>Rp {harga.toLocaleString('id-ID')}</Text>
      <Text style={styles.jumlah}>Jumlah dipesan: {qty}</Text>
      <Button title="Tambah Pesanan" onPress={handleTambah} />
    </View>
  );
}

const styles = StyleSheet.create({
  kartu: { backgroundColor: '#FFFFFF', borderRadius: 18, padding: 20, marginBottom: 14, borderWidth: 1, borderColor: '#F0E2D5' },
  nama: { color: '#3A241B', fontSize: 18, fontWeight: 'bold' },
  harga: { color: '#A05E3B', fontSize: 16, fontWeight: 'bold', marginTop: 8 },
  jumlah: { color: '#765D50', fontSize: 14, marginTop: 14, marginBottom: 10 },
});
