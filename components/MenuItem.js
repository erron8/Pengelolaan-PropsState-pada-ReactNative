import React, { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

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
      <Pressable
        accessibilityRole="button"
        accessibilityLabel={`Tambah pesanan ${nama}`}
        onPress={handleTambah}
        style={({ pressed }) => [styles.tombol, pressed && styles.tombolDitekan]}
      >
        <Text style={styles.teksTombol}>+ Tambah Pesanan</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  kartu: { backgroundColor: '#FFFFFF', borderRadius: 18, padding: 20, marginBottom: 14, borderWidth: 1, borderColor: '#F0E2D5' },
  nama: { color: '#3A241B', fontSize: 18, fontWeight: 'bold' },
  harga: { color: '#A05E3B', fontSize: 16, fontWeight: 'bold', marginTop: 8 },
  jumlah: { color: '#765D50', fontSize: 14, marginTop: 14, marginBottom: 10 },
  tombol: { backgroundColor: '#7E4D38', borderRadius: 12, paddingVertical: 13, alignItems: 'center' },
  tombolDitekan: { opacity: 0.8 },
  teksTombol: { color: '#FFFFFF', fontSize: 15, fontWeight: 'bold' },
});
