import React from 'react';
import { Text, View, TouchableOpacity, Image, TextInput } from 'react-native';

const YourApp = () => {
  return (
    <View
      style={{
        display: 'flex',
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#C4C4C4',
      }}>
      <View style={{ flex: 1, backgroundColor: 'white', padding: 15 }}>
        <View style={{ flexDirection: 'row' }}>
          <Image
            source={require('./image/book.png')}
            style={{ height: 160, width: 130 }}
          />
          <View style={{ marginLeft: 15, justifyContent: 'space-between' }}>
            <Text style={{ fontSize: 15, fontWeight: 'bold' }}>
              Nguyên hàm tích phân và ứng dụng
            </Text>
            <Text style={{ fontSize: 15, fontWeight: 'bold' }}>
              Cung cấp bởi Tiki Trading
            </Text>
            <Text
              style={{ fontSize: 15, color: '#EE0D0D', fontWeight: 'bold' }}>
              141.800 đ
            </Text>
            <Text
              style={{ textDecorationLine: 'line-through', color: '#808080' }}>
              141.000 đ
            </Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'baseline',
                justifyContent: 'space-between',
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  width: 80,
                  justifyContent: 'space-between',
                }}>
                <TouchableOpacity
                  style={{
                    height: 22,
                    width: 25,
                    backgroundColor: '#C4C4C4',
                    justifyContent: 'center',
                    // alignItems: 'center',
                  }}>
                  <Text
                    style={{
                      fontWeight: '500',
                      fontSize: 20,
                      textAlign: 'center',
                    }}>
                    -
                  </Text>
                </TouchableOpacity>
                <Text style={{ fontWeight: '500', fontSize: 20 }}>1</Text>
                <TouchableOpacity
                  style={{
                    height: 22,
                    width: 25,
                    backgroundColor: '#C4C4C4',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Text
                    style={{
                      fontWeight: '500',
                      fontSize: 20,
                      textAlign: 'center',
                    }}>
                    +
                  </Text>
                </TouchableOpacity>
              </View>
              <View>
                <TouchableOpacity>
                  <Text style={{ color: '#134FEC' }}>Mua sau</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
        <View
          style={{
            flex: 0.6,
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: 230,
            alignItems: 'center',
          }}>
          <Text style={{ fontWeight: 'bold' }}>Mã giảm giá đã lưu</Text>

          <TouchableOpacity>
            <Text style={{ fontWeight: 'bold', color: '#134FEC' }}>
              Xem tại đây
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: 'row',
            flex: 1,
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <TouchableOpacity
            style={{
              height: 50,
              width: 190,
              borderWidth: 1,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text style={{ fontWeight: 'bold', fontSize: 18 }}>
              Mã giảm giá
            </Text>
            <Image
              source={require('./image/yellow_block.svg')}
              style={{ position: 'absolute', marginRight: 144 }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              height: 50,
              width: 90,
              backgroundColor: '#0A5EB7',
            }}>
            <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'white' }}>
              Áp dụng
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{ flex: 1.1 }}>
        <View
          style={{
            flex: 0.3,
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center',
          }}>
          <View
            style={{
              flexDirection: 'row',
              height: 55,
              backgroundColor: 'white',
              alignItems: 'center',
              justifyContent: 'space-around',
              width: '100%',
            }}>
            <Text
              style={{
                fontWeight: 'bold',
                fontSize: 14,
                alignItems: 'center',
              }}>
              Bạn có phiếu quà tặng Tiki/Got it/ Urbox?
            </Text>
            <TouchableOpacity>
              <Text
                style={{ fontWeight: 'bold', color: '#134FEC', fontSize: 14 }}>
                Nhập tại đây?
              </Text>
            </TouchableOpacity>
          </View>
        </View>
         <View
          style={{
            flex: 0.2,
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center',
          }}>
          <View
            style={{
              flexDirection: 'row',
              height: 55,
              backgroundColor: 'white',
              alignItems: 'center',
              justifyContent: 'space-between', padding: 12,
              width: '100%',
            }}>
            <Text
              style={{
                fontWeight: 'bold',
                fontSize: 18,
                alignItems: 'center',
              }}>
              Tạm tính
            </Text>
            <TouchableOpacity>
              <Text
                style={{ fontWeight: 'bold', color: '#EE0D0D', fontSize: 18 }}>
                141.800 đ
              </Text>
            </TouchableOpacity>
          </View>
        </View>
    
      </View>
          <View style={{flex:0.3,
              backgroundColor: 'white',
               padding: 12,
              width: '100%',}}>
              <View style={{flexDirection:'row', justifyContent:'space-between'}}>
              <Text style={{fontSize: 18, fontWeight:'bold', color:'#808080'}}>Thành tiền</Text>
              <Text style={{fontWeight:'bold', fontSize: 20, color: "#EE0D0D"}}>141.800 đ</Text>
              </View>
              <View style={{alignItems:'center', justifyContent:'center', flex:1}}>
              <TouchableOpacity style={{height: 50, width: 290, backgroundColor: "#E53935", justifyContent:'center'}}>
              <Text style={{color:'white', fontSize: 18, fontWeight:'bold', textAlign:'center'}}>TIẾN HÀNH ĐẶT HÀNG</Text>
              </TouchableOpacity>
              </View>
              </View>
    </View>
  );
};

export default YourApp;
