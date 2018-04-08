
import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableWithoutFeedback } from 'react-native';

export default class SecondPage extends Component{
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render() {
    return (
      <View style={[styles.wrapper, styles.center]}>
        <Text style={{ fontSize: 13, color: '#f6c200', }}>第二个页面</Text>
        <TouchableWithoutFeedback onPress={() => this.goBack()}>
          <View style={[styles.btnWrapper, styles.center, { marginTop: 20, }]}>
            <Text style={styles.btnTxt}>返回上一页</Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
    )
  }

  goBack = () => {
    this.props.navigation.goBack();
  }
}
const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#fefefe'
  },
  center: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnWrapper: {
    width: 120,
    height: 50,
    backgroundColor: '#f6c200',
  },
  btnTxt: {
    fontSize: 20,
    color: 'white',
  }
})