import { StackNavigator } from 'react-navigation';
import SplashScreen from './screens/SplashScreen';
import CallToAction from './screens/CallToAction';
import Typeform from './screens/Typeform';

const App = StackNavigator({
    SplashScreen: { screen: SplashScreen },
    CallToAction: { screen: CallToAction },
    Typeform: { screen: Typeform }
});

export default App;
