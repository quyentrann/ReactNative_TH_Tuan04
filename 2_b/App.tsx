import React from 'react';
import { Text, View, TouchableOpacity, Image, TextInput } from 'react-native';

const YourApp = () => {
  return (
    <View
      style={{
        display: 'flex',
        flex: 1,
        justifyContent: 'center',
      }}>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          marginLeft: 15,
          alignItems: 'center',
        }}>
        <Image source={require('./image/usb.png')} />

        <Text
          style={{
            fontWeight: 'bold',
            textAlign: 'center',
            alignItems: 'center',
          }}>
          USB Bluetooth Music Receiver HJX-001- Biến loa thường thành loa
          bluetooth
        </Text>
      </View>

      <View style={{ flex: 0.5, justifyContent: 'space-around' }}>
        <Text
          style={{
            fontWeight: 'bold',
            alignItems: 'center',
            textAlign: 'center',
          }}>
          Cực kỳ hài lòng
        </Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginHorizontal: 40,
            display: 'flex',
          }}>
          <Image source={require('./image/Star1.png')} />
          <Image source={require('./image/Star1.png')} />
          <Image source={require('./image/Star1.png')} />
          <Image source={require('./image/Star1.png')} />
          <Image source={require('./image/Star1.png')} />
        </View>
      </View>
      <View style={{ flex: 0.6, justifyContent:'center'}}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <TouchableOpacity
            style={{
              height: 60,
              width: 290,
              borderColor: '#1511EB',
              borderWidth: 1,
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 6,
            }}>
            <Text>Thêm hình ảnh</Text>
          </TouchableOpacity>
          <Image
            source={require('./image/camera.png')}
            style={{ position: 'absolute', marginRight: 150, display: 'flex' }}
          />
        </View>
      </View>
      <View style={{ flex: 1.8, alignItems: 'center' }}>
        <TextInput
          style={{
            height: 250,
            width: 290,
            borderWidth: 1,
            borderColor: '#bfbfbf',
            fontWeight: 'bold',
            color: '#bfbfbf',
            padding: 15,
            borderRadius: 6,
          }}
          placeholder="Hãy chi sẻ những điều mà bạn thích về sản phẩm"
          multiline={true}
        />
        <Text
          style={{
            position: 'absolute',
            fontWeight: 'bold',
            marginTop: 220,
            marginLeft: 70,
            fontSize: 10,
            alignItems: 'flex-end',
          }}>
          https://meet.google.com/nsj-ojwi-xpp
        </Text>
      </View>
      <View style={{ alignItems: 'center', flex: 1 }}>
        <TouchableOpacity
          style={{
            height: 50,
            width: 290,
            backgroundColor: '#0D5DB6',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 10,
          }}>
          <Text
            style={{
              fontSize: 18,
              fontWeight: 'bold',
              color: 'white',
              textAlign: 'center',
            }}>
            Gửi
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default YourApp;
