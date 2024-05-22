import React from 'react';
import { TextInput as RNTextInput, View, StyleSheet  } from 'react-native';
import { Entypo as Icon } from '@expo/vector-icons';

export default function TextInput({ icon, ...otherProps}) {
    const validationcolor = '#223e4b';
    return (
        <View
            style={{
                flexDirection: 'row',
                alignItems: 'center',
                height: 48,
                borderRadius: 8,
                borderColor: validationcolor,
                borderWidth: 2,
                padding: 8,
                margin: 10
            }}
            >
            <View style={{ padding: 8 }}>
                <Icon name={icon} color={validationcolor} size={16} />
            </View>
            <View style={{ flex: 1}}>
                <RNTextInput
                    underlineColorAndroid="transparent"
                    placeholderTextColor="rgba(34, 62, 75, 0.7)"
                    {...otherProps}
                />
            </View>
            </View>
    )
}
