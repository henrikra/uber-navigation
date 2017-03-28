import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

class Payment extends Component {
  static navigatorButtons = {
    leftButtons: [
      {
        title: 'Sulje',
        id: 'close',
      },
    ]
  };

  constructor(props) {
    super(props);
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
  }

  onNavigatorEvent(event) {
    if (event.type == 'NavBarButtonPress') {
      if (event.id == 'close') {
        this.props.navigator.dismissModal();
      }
    }
  }

  render() {
    return (
      <View>
        <TouchableOpacity style={{padding: 20}} onPress={() => {
          this.props.navigator.push({
            screen: 'uber.AddCard',
            title: 'Lisää maksutapa',
          });
        }}>
          <Text>Payment</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Payment;