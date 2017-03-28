import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const links = [
  {label: 'Maksutavat'},
  {label: 'Matkat'},
  {label: 'Ilmaiset kyydit'},
  {label: 'Ohjeet'},
  {label: 'Asetukset'},
];

class Menu extends Component {
  openAsModal = link => {
    this.props.navigator.toggleDrawer();
    this.props.navigator.showModal({
      screen: "uber.Payment",
      title: link.label,
    });
  }

  render() {
    return (
      <View>
        <View style={styles.header}>
          <View style={styles.avatar} />
          <Text style={styles.name}>Henrik Raitasola</Text>
        </View>
        <View style={styles.links}>
          {links.map((link, index) => {
            return (
              <TouchableOpacity key={index} style={styles.link} onPress={() => this.openAsModal(link)}>
                <Text style={styles.linkLabel}>{link.label}</Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#000000',
    height: 100,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatar: {
    backgroundColor: '#F9F9F9',
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 20,
  },
  name: {
    color: '#ffffff',
    fontSize: 16,
  },
  links: {
    paddingVertical: 25,
  },
  link: {
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  linkLabel: {
    fontSize: 18,
    fontWeight: '300',
  },
});

export default Menu;