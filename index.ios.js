/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  AlertIOS
} from 'react-native';
import Promise from 'bluebird';
import CodePush from 'react-native-code-push';

class codepush extends Component {
  componentDidMount () {
    Promise.props({
      update:CodePush.checkForUpdate(),
      currentPackage:CodePush.getCurrentPackage()
    })
    .then(data => {
      console.log('data',data);
      if(!data.update) {
        AlertIOS.alert('Codepush',`The app is up to date with version: ${data.currentPackage}!`);
      } else {
        AlertIOS.alert('Codepush','An update is available! Should we download it?');
      }
    })
    .catch(error => {
      AlertIOS.alert('Codepush error',JSON.stringify(error));
    });
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9EBF6D',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('codepush', () => codepush);
