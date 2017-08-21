import { StackNavigator } from 'react-navigation';
import HomeScreen from './Containers/HomeScreen';
import SecondScreen from './Containers/SecondScreen';

export default RouterComponent = StackNavigator({
    Home: { screen: HomeScreen },
    Second: { screen: SecondScreen },
});

  