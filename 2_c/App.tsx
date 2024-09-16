import React from 'react';
import { Text, View, TextInput , TouchableOpacity} from 'react-native';

const YourApp = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        backgroundImage:
          'radial-gradient(145% 145% at 50% 50%, #3B3B98 26.56%, rgba(196, 196, 196, 0) 87.36%)',
        padding: 25,
      }}>
      <View
        style={{
          backgroundColor: '#23235B',
          width: '100%',
          height: '100%',
          borderRadius: 14,
        }}>
        <View
          style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text
            style={{
              color: 'white',
              fontWeight: 'bold',
              fontSize: 26,
              textAlign: 'center',
            }}>
            PASSWORD GENERATOR
          </Text>
          <View
            style={{
              width: 250,
              backgroundColor: '#151537',
              height: 55,
              marginTop: 40,
            }}
          />
        </View>
        <View style={{ flex: 1, justifyContent: 'space-around' , padding: 10}}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold' }}>
              Password length
            </Text>
            <TextInput
              style={{ height: 30, width: 120, backgroundColor: 'white' }}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold' }}>
              Include lower case letters
            </Text>
            <TouchableOpacity style={{height: 30, width: 30, backgroundColor:'white'}}>
            <Text></Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold' }}>
              Include upcase letters
            </Text>
           <TouchableOpacity style={{height: 30, width: 30, backgroundColor:'white'}}>
            <Text></Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold' }}>
             Include number
            </Text>
            <TouchableOpacity style={{height: 30, width: 30, backgroundColor:'white'}}>
            <Text></Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold' }}>
             Include special symbol
            </Text>
           <TouchableOpacity style={{height: 30, width: 30, backgroundColor:'white'}}>
            <Text></Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{flex:0.5, justifyContent:'center', alignItems:'center'}}>
        <TouchableOpacity style={{height: 50, width: 250,borderRadius:12, justifyContent:'center', alignItems:'center', backgroundColor:'#3B3B98'}}>
        <Text style={{color:'white', fontWeight:'bold', fontSize: 18}}>GENERATE PASSWORD </Text>
        </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default YourApp;
