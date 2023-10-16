import { Navigation } from 'react-native-navigation';
import { WebView } from 'react-native-webview';

import React, { Text } from 'react-native';

import {
  View,
  AsyncStorage,
  Button,
  StyleSheet,
} from 'react-native';
import { useState } from 'react';

import Wv from './Wv.tsx';

function App(props: any): JSX.Element {
  return (
    <View style={ styles.outer }>
      <View style={ styles.inner }>
        <Text style={ styles.button } onPress={() => Navigation.push(props.componentId, { component: { name: Wv.name, passProps: { uri: 'https://finwo.nl'         }, options: { topBar: { title: { text: 'Blog'    }} }}})}>Blog</Text>
        <Text style={ styles.button } onPress={() => Navigation.push(props.componentId, { component: { name: Wv.name, passProps: { uri: 'https://finwo.nl/socials' }, options: { topBar: { title: { text: 'Socials' }} }}})}>Socials</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  outer: {
    height: '100%',
    backgroundColor: '#a32',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  inner: {
    flex: 0.7,
    justifyContent: 'center',
    background: '#0F0',
  },
  button: {
    padding: 16,
    backgroundColor: '#25A',
    fontSize: 32,
  },
  wv: {
    flex: 1,
  }
});

export default App;
