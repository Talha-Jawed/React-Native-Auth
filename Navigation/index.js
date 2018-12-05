import { createStackNavigator, createAppContainer, createDrawerNavigator, createMaterialTopTabNavigator } from 'react-navigation';
import LogIn from '../src/Authentication/LogIn'
import SignUp from '../src/Authentication/SignUp'
import Home from '../src/Screen/Dashboard'

const StackNavigator = createStackNavigator({
    LogIn: {
        screen: LogIn
    },
    SignUp: {
        screen: SignUp
    },
    Home:{
        screen: Home
    }

})
const Navigation = createAppContainer(StackNavigator)
export default Navigation;