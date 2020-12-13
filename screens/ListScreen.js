import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {SharedElement} from 'react-navigation-shared-element';

export const ims = [
    {
        url: require('../assets/1.jpg'),
        id: 0
    },
    {
        url: require('../assets/logo.jpg'),
        id: 1
    },
];

const List = ({navigation, item}) => {
    return(
        <View>
        {
           ims.map(img => {
            return (
            <TouchableOpacity
                key={img.id}
                style={{padding: 10}}
                onPress={() => navigation.push('Detail', {img})}
            >
                <SharedElement id={`img.${img.id}`}>
                    <Image source={img.url}
                        style={{width: 200, height: 200}}
                    />
                </SharedElement>
            </TouchableOpacity>
            )
            })
        }    
        </View>
    );
};

export default List;