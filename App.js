import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import OrderSummary from './components/OrderSummary';
import MenuItem from './components/MenuItem';

const DAFTAR_MENU = [
  { id: '1', nama: 'Kopi Susu Catnip', harga: 20000 },
  { id: '2', nama: 'Matcha Paw Latte', harga: 25000 },
  { id: '3', nama: 'Croissant Ikan Tuna', harga: 18000 },
];

export default function App() {
  const [totalPesanan, setTotalPesanan] = useState(0);

  const tambahPesanan = () => {
    setTotalPesanan((total) => total + 1);
  };

  return (
    <View style={styles.layar}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.sapaan}>SELAMAT DATANG DI</Text>
        <Text style={styles.judul}>Kafe Kucing 🐾</Text>
        <Text style={styles.deskripsi}>Pilih teman ngemilmu hari ini.</Text>
        <OrderSummary totalCount={totalPesanan} />
        <Text style={styles.subjudul}>Menu kafe</Text>
        {DAFTAR_MENU.map((menu) => (
          <MenuItem
            key={menu.id}
            nama={menu.nama}
            harga={menu.harga}
            onTambahPesanan={tambahPesanan}
          />
        ))}
      </ScrollView>
      <StatusBar style="dark" />
    </View>
  );
}

const styles = StyleSheet.create({
  layar: { flex: 1, backgroundColor: '#FFF8F0' },
  container: { paddingHorizontal: 24, paddingTop: 72, paddingBottom: 40, width: '100%', maxWidth: 520, alignSelf: 'center' },
  sapaan: { color: '#9D664B', fontSize: 12, fontWeight: 'bold', letterSpacing: 2 },
  judul: { color: '#3A241B', fontSize: 32, fontWeight: 'bold', marginTop: 8 },
  deskripsi: { color: '#765D50', fontSize: 16, marginTop: 8, marginBottom: 28 },
  subjudul: { color: '#3A241B', fontSize: 22, fontWeight: 'bold', marginTop: 32, marginBottom: 14 },
});
