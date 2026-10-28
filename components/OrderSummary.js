import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function OrderSummary({ totalCount }) {
  return (
    <View style={styles.kartu}>
      <Text style={styles.label}>RINGKASAN PESANAN</Text>
      <Text style={styles.total}>Total Item Dipesan: {totalCount}</Text>
      {totalCount >= 5 && (
        <Text style={styles.promo}>🎉 Selamat! Anda Mendapatkan Diskon 10%</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  kartu: { backgroundColor: '#F1DECB', borderRadius: 18, padding: 20 },
  label: { color: '#8C5F49', fontSize: 11, fontWeight: 'bold', letterSpacing: 1.5 },
  total: { color: '#3A241B', fontSize: 20, fontWeight: 'bold', marginTop: 10 },
  promo: { color: '#246C4E', fontSize: 14, fontWeight: 'bold', marginTop: 14, lineHeight: 20 },
});
