import React from 'react';
import { Text, View, Image, TouchableOpacity, TextInput } from 'react-native';
const YourApp = () => {
  return (
    <View
      style={{
        flex: 1,
        paddingHorizontal: 20,
      }}>
      <View style={{flex: 2}}>
        <View style={{ flexDirection: 'row', flex: 1, marginTop: 10 }}>
          <Image source={require('./image/usb.png')} />
          <Text style={{ fontWeight: 'bold', paddingLeft: 5 }}>
            USB Bluetooth Music Receiver HJX-001- Biến loa thường thành loa
            bluetooth
          </Text>
        </View>
        <View>
        </View>
      </View>
    </View>
  );
};

export default YourApp;
