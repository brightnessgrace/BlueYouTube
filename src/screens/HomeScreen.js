import { createStackNavigator } from  'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import LoadingScreen from './LoadingScreen';
import Profile from '../components/Profile';


const screens = {
  

    Home: {
       screen: LoadingScreen,
       navigationOptions: {
        header: null,
       },
    },

    Profile:{

        screen: Profile,
        navigationOptions: {
            //  headerShow: false, future use
              header: null,
          },
    }
}

const HomeScreen = createStackNavigator(screens);

export default createAppContainer(HomeScreen);