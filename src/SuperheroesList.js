/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

import { connect } from 'react-redux'
import { fetchData } from './actions'

class SuperheroesList extends Component {

  componentWillMount(){
    console.log("Cargando component");
    this.props.fetchData()
  }

  getSuperHeroes() {
    const { dataTvMaze } = this.props
    return dataTvShow = dataTvMaze.data.map((tv, key) => {
      return <Text key={key}>{tv.show.name}</Text>
    })
  }

  render() {
    console.log(this.props);
    return (
      <View>
        {this.props.dataTvMaze.isFetching && <Text>Loading</Text>}
        {
          this.props.dataTvMaze.data.length ?
            this.getSuperHeroes()
            : null
        }
      </View>
    );
  }
}

const mapStateToProps = state => {
  return { dataTvMaze: state.dataReducer }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchData: () => dispatch(fetchData())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SuperheroesList)
