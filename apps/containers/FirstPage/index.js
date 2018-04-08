
import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableWithoutFeedback } from 'react-native';
import ModalBox from '../../components/ModalBox';

export default class FirstPage extends Component{
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render() {
    return (
      <View style={[styles.wrapper, styles.center]}>
        <TouchableWithoutFeedback onPress={() => this.navToSecondPage()}>
          <View style={[styles.txtWrapper, styles.center]}>
            <Text style={styles.txt}>去第二个页面</Text>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={() => this.clickButton()}>
          <View style={[styles.txtWrapper, styles.center, { marginTop: 20, }]}>
            <Text style={styles.txt}>显示弹窗</Text>
          </View>
        </TouchableWithoutFeedback>

        <ModalBox ref="modalRef" />
      </View>
    )
  }

  navToSecondPage = () => {
    console.log('11111',this.props.navigation.state.key);
    this.props.navigation.navigate('SecondPageScreen')
  };

  clickButton = () => {
    this.refs.modalRef.showModal()
  }

}
const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#fefefe',
  },
  center: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  txtWrapper: {
    width: 130,
    height: 50,
    backgroundColor: '#f6c200',
  },
  txt: {
    fontSize: 20,
    color: 'white',
  }
})