import React, {Component } from 'react';
import {
  StyleSheet,
  View,
  Image,
  Dimensions,
  ScrollView
} from 'react-native';

export default class ProfilePage extends Component {
  render() {
    return (

      <ScrollView>
        <View style={styles.photoGrid}>

          <View style={styles.photoWrap}>
            <Image style={styles.photo} source={require('../img/img1.jpg')} />
          </View>

          <View style={styles.photoWrap}>
            <Image style={styles.photo} source={require('../img/img2.jpg')} />
          </View>

          <View style={styles.photoWrap}>
            <Image style={styles.photo} source={require('../img/img3.jpg')} />
          </View>

          <View style={styles.photoWrap}>
            <Image style={styles.photo} source={require('../img/img4.jpg')} />
          </View>

          <View style={styles.photoWrap}>
            <Image style={styles.photo} source={require('../img/img5.jpg')} />
          </View>

          <View style={styles.photoWrap}>
            <Image style={styles.photo} source={require('../img/img6.jpg')} />
          </View>

          <View style={styles.photoWrap}>
            <Image style={styles.photo} source={require('../img/img7.jpg')} />
          </View>

          <View style={styles.photoWrap}>
            <Image style={styles.photo} source={require('../img/img8.jpg')} />
          </View>

          <View style={styles.photoWrap}>
            <Image style={styles.photo} source={require('../img/img9.jpg')} />
          </View>

          <View style={styles.photoWrap}>
            <Image style={styles.photo} source={require('../img/img10.jpg')} />
          </View>


        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  photoGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  photoWrap: {
    margin: 2,
    height: 120,
    width: (Dimensions.get('window').width /2) -4,
  },
  photo: {
    flex: 1,
    width: null,
    alignSelf: 'stretch'
  }
});
