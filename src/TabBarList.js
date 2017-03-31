import React, { Component } from 'react';
import { View, Text, TabBarIOS } from 'react-native';
import SuperheroesList from './SuperheroesList'
import * as actions from './actions'
import { connect } from 'react-redux'

class TabBarList extends Component {
  render() {
    console.log(this.props);
    return (
      <TabBarIOS barTintColor="white" tintColor="black" unselectedTintColor="grey">
        <TabBarIOS.Item
          title="Tab 1"
          onPress={() => this.props.selected_tab('TAB_1')}
          selected={this.props.tabsId === 'TAB_1'}
          >
          <SuperheroesList />
        </TabBarIOS.Item>
        <TabBarIOS.Item
          title="Tab 2"
          onPress={() => this.props.selected_tab('TAB_2')}
          selected={this.props.tabsId === 'TAB_2'}
          >
          <View>
            <Text>
              Prueba
            </Text>
          </View>
        </TabBarIOS.Item>
        <TabBarIOS.Item
          title="Tab 3"
          onPress={() => this.props.selected_tab('TAB_3')}
          selected={this.props.tabsId === 'TAB_3'}
          ></TabBarIOS.Item>
      </TabBarIOS>
    );
  }
}

const mapStateToProps = state => {
  return { tabsId: state.tabId }
}

export default connect(mapStateToProps, actions)(TabBarList)
