import React, { Component } from 'react'
import { View, Text, TouchableNativeFeedback } from 'react-native'
import { styles } from '../../assets/styles/Style'

export default class Home extends Component{


    redirect(route){
        const  { navigate } = this.props.navigation
        navigate(route)
    }

    render(){
        return(
            <View style={[styles.container]}>
                <TouchableNativeFeedback onPress={() => this.redirect('Camera')}>   
                    <View style={styles.button}>
                        <Text style={{color:'#fff'}}>Camera</Text>
                    </View>
                </TouchableNativeFeedback>
            </View>
        )
    }

}