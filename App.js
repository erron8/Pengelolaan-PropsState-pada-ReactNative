import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import OrderSummary from './components/OrderSummary';

const DAFTAR_MENU = [
  { id: '1', nama: 'Kopi Susu Catnip', harga: 20000 },
  { id: '2', nama: 'Matcha Paw Latte', harga: 25000 },
  { id: '3', nama: 'Croissant Ikan Tuna', harga: 18000 },
];

export default function App() {
  const [totalPesanan, setTotalPesanan] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.judul}>Kafe Kucing</Text>
      <OrderSummary totalCount={totalPesanan} />
      {DAFTAR_MENU.map((menu) => (
        <Text key={menu.id}>{menu.nama} - Rp {menu.harga}</Text>
      ))}
      <StatusBar style="dark" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
  },
  judul: { fontSize: 28, fontWeight: 'bold', marginBottom: 16 },
});
