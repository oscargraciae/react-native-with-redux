/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

import { connect } from 'react-redux'

class SuperheroesList extends Component {

  getSuperHeroes() {
    const { superheroes } = this.props
    return superheroesDatas = superheroes.map((heroe, key) => {
      return <Text key={key}>{heroe.superhero}</Text>
    })
  }

  render() {
    console.log(this.props);
    return (
      <View>
        {this.getSuperHeroes()}
      </View>
    );
  }
}

const mapStateToProps = state => {
  return { superheroes: state.superheroes }
}

export default connect(mapStateToProps)(SuperheroesList)
