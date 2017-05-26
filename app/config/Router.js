import { StackNavigator } from 'react-navigation'
import Home from '../views/home/Home'
import Camera from '../views/camera/Camera'


export const Stack = StackNavigator({
    Home:{
        screen:Home,
        navigationOptions:{
            title:'Home'
        }
    },
    Camera:{
        screen:Camera,
        navigationOptions:{
            title:'Camera'
        }
    }
})