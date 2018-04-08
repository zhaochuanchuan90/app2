
import { StackNavigator } from 'react-navigation';

import FirstPage from './containers/FirstPage';
import SecondPage from './containers/SecondPage';

const AppNavigator = StackNavigator({
  FirstPageScreen: {
    screen: FirstPage,
    navigationOptions: ({navigation}) => ({
      header: null
    })
  },
  SecondPageScreen: {
    screen: SecondPage,
    navigationOptions: ({navigation}) => ({
      header: null
    })
  },
});
export default AppNavigator