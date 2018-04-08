
import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableWithoutFeedback, Modal } from 'react-native';

export default class ModalBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
    }
  }
  render() {
    return (
      <Modal
        visible={this.state.visible}
        transparent={true}
        onRequestClose={() => this.hideModal()}
      >
        <TouchableWithoutFeedback onPress={() => this.hideModal()}>
          <View style={[styles.modalWrapper, styles.center]}>
            <View style={[styles.boxWrapper, styles.center]}>
              <Text style={styles.txt}>弹窗</Text>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    )
  }

  showModal = () => {
    this.setState({
      visible: true,
    })
  }

  hideModal = () => {
    this.setState({
      visible: false,
    })
  }
}
const styles = StyleSheet.create({
  modalWrapper: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
  },
  center: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  boxWrapper: {
    width: 300,
    height: 300,
    backgroundColor: '#f6c200',
  },
  txt: {
    fontSize: 20,
    color: 'white',
  }
})