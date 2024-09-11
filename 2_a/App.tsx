import React from 'react';
import { Text, View, Image, TouchableOpacity, TextInput } from 'react-native';
const YourApp = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundImage: 'linear-gradient(to bottom,#FBCB00, #BF9A00',
        paddingHorizontal: 20,
      }}>
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <Text style={{ fontWeight: 'bold', fontSize: 30 }}>LOGIN</Text>
      </View>
      <View style={{ flex: 2, alignItems: 'center' }}>
        <View style={{ flexDirection: 'row' }}>
          <Image
            style={{ position: 'absolute', marginTop: 10, marginLeft: 12 }}
            source={require('./image/avatar_user.png')}
          />
          <TextInput
            style={{
              height: 54,
              width: 320,
              backgroundColor: '#dbc25e',
              borderWidth: 1,
              borderColor: 'white',
              marginBottom: 20,
              fontSize: 20,
              paddingLeft: 50,
            }}
            placeholder="Name"
          />
        </View>
       
        <View>
         <Image
            style={{ position: 'absolute', marginTop: 10, marginLeft: 12 }}
            source={require('./image/lock.png')}
          />
           <TextInput
          style={{
            height: 54,
            width: 320,
            backgroundColor: '#dbc25e',
            borderWidth: 1,
            borderColor: 'white',
            marginBottom: 20,
            fontSize: 20,
            paddingLeft: 50,
          }}
          placeholder="Password"
        />
         <Image
            style={{ position: 'absolute', marginTop: 10, marginLeft: 270 }}
            source={require('./image/eye 1.png')}
          />
          </View>

        <TouchableOpacity
          style={{
            marginTop: 40,
            backgroundColor: 'black',
            height: 48,
            width: 320,
            justifyContent: 'center',
          }}>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 20,
              color: 'white',
              textAlign: 'center',
            }}>
            LOGIN
          </Text>
        </TouchableOpacity>
        <Text
          style={{
            marginTop: 40,
            fontWeight: 'bold',
            fontSize: 20,
          }}>
          Forgot password?
        </Text>
      </View>
    </View>
  );
};

export default YourApp;
