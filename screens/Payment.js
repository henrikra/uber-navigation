import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

const Payment = (props) => {
  return (
    <View>
      <TouchableOpacity style={{padding: 20}} onPress={() => {
        props.navigator.push({
          screen: 'uber.AddCard',
          title: 'Lisää maksutapa',
        });
      }}>
        <Text>Payment</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Payment;