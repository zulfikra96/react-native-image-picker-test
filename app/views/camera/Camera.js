import React, { Component } from 'react'
import { View, Text, TouchableNativeFeedback, Image } from 'react-native'
import { styles } from '../../assets/styles/Style'
import ImagePicker from 'react-native-image-picker'

export default class Home extends Component{


    constructor(props){
        super(props)
        this.state = {
            photo:require('../../assets/images/badge.jpg')
        }
    }

    picker(){
        const options = {
            storageOptions: {
                skipBackup: true,
                path: '../../assets/images/'
            }
        }
        ImagePicker.showImagePicker(options,(response) => {
            console.log(response)
            let source = {
                uri : response.uri
            }
            this.setState({photo:source})
        })
    }
    

    render(){
        return(
            <View style={[styles.container]}>
                <View style={{alignItems:'center'}}>
                    <TouchableNativeFeedback onPress={() => this.picker()} >
                        <View>
                            <Image source={this.state.photo} style={{width:80,height:80, borderRadius:3, marginTop:20}}/>
                        </View>
                    </TouchableNativeFeedback>
                </View>
                <View style={{alignItems:'center'}}>
                    <Text style={{color:'#fff'}}>Test Image Picker</Text>
                </View>
            </View>
        )
    }

}