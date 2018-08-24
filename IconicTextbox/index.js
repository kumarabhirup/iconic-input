/**
 * Open sourced React Native component of iconic-input library
 * @name IconicTextbox
 * @type Component
 * @author Kumar Abhirup
 * @description An iconic TextInput component.
 * @uses ReactNative by Facebook
 */

import React, {Component} from 'react'
import { AppRegistry, View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import { Icon } from 'native-base'
import { renderRadius, renderPosition } from './render'

/**
 * List of usable props
 * @prop placeholder (string)
 * @prop value (string)
 * @prop onChangeText (callback)
 * @prop onKeyPress (callback)
 * @prop onSubmitEditing (callback)
 * @prop onFocus (callback)
 * @prop maxLength (integer, default: 30)
 * @prop secureTextEntry (boolean, default: false)
 * @prop autoCorrrect (boolean, default: false)
 * @prop icon (string : Ionicons icons)
 * @prop iconColor (string: hex code)
 * @prop colorTheme (string: hex code)
 * @prop rounded (boolean, default: false)
 * @prop iconPosition (string: left/right, default: right)
 */
class IconicTextbox extends Component {
    constructor(props){
        super(props)
        this.state = {

        }
    }

    render() {
        return (
            <View style = {[styles.container, { borderColor: this.props.colorTheme }, renderRadius('container', this.props), renderPosition('container', this.props)]}>
                <TextInput
                    style = {styles.input}
                    maxLength = {this.props.maxLength}
                    autoCorrect = {this.props.autoCorrect}

                    placeholder = {this.props.placeholder}
                    value = {this.props.value}
                    onChangeText = {this.props.onChangeText}
                    secureTextEntry = {this.props.secureTextEntry}
                    onKeyPress = {this.props.onKeyPress}
                    onFocus = {this.props.onFocus}
                    onSubmitEditing = {this.props.onSubmitEditing}
                />
                <View style = {[styles.iconPlaceholder, { backgroundColor: this.props.colorTheme }, renderRadius('iconPlaceholder', this.props), renderPosition('iconPlaceholder', this.props)]}>
                    <TouchableOpacity>
                        <Icon
                            name = { this.props.icon }
                            style={ {fontSize: 30, color: this.props.iconColor} }
                        />
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

IconicTextbox.defaultProps = {
    placeholder: 'Custom Text Input',
    colorTheme: '#87ceeb', // Simalar colors: #7ec0ee skyblue
    icon: 'globe',
    rounded: false,
    iconPosition: 'right',
    autoCorrect: false,
    maxLength: 30
}

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
        borderWidth: 2
    },
    input: {
        flex: 6,
        padding: 20,
        fontSize: 18
    },
    iconPlaceholder: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export {IconicTextbox}
AppRegistry.registerComponent('IconicTextbox', () => IconicTextbox) // Register this Component