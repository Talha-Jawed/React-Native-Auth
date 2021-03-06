import { createStackNavigator, createAppContainer, createDrawerNavigator, createMaterialTopTabNavigator } from 'react-navigation';
import LogIn from '../src/Authentication/LogIn'
import SignUp from '../src/Authentication/SignUp'
import Home from '../src/Screen/Dashboard'
import AppHeader from '../src/Component/Header/Header'



const StackNavigator = createStackNavigator({
    LogIn: {
        screen: LogIn
    },
    SignUp: {
        screen: SignUp
    },
    Home:{
        screen: Home
    },
    // Header:{
    //     screen: AppHeader
    // }

})
const Navigation = createAppContainer(StackNavigator)
export default Navigation;