
import React, {Component} from 'react';
import { StyleSheet, Text, View, Button, Image} from 'react-native';

export default class DetailScreen extends Component {

  static navigationOptions = ({navigation}) => ({
    tabBarLabel: 'Detail',
    tabBarIcon: ({tintColor}) => (
      <Image source={require('../imgs/profile.png')} 
        style={[styles.icon, {tintColor: tintColor}]}
      />
    )
  })

  render() {

    // const { params } = this.props.navigation.state
    // const { goBack } = this.props.navigation

    return (
      <View style={styles.container}>
        {/* <Text>{params.username}</Text>
        <Button title='Back'
          onPress={() => {
            goBack()
          }}
        /> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#15F097',
  }
});