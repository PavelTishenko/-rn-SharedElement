import React from 'react';
import {View, Text, Image} from 'react-native';
import {SharedElement} from 'react-navigation-shared-element'; 
import {ims} from './ListScreen';

const Detail = ({route}) => {
    const {img} = route.params;
    return(
        <SharedElement id={`img.${img.id}`} style={{justifyContent:'center', alignItems: 'center'}}>
            <Image source={img.url}
              style={{width: 200, height: 200, borderRadius: 100}}
            />
         </SharedElement>
    );
};

Detail.sharedElements = (route, otherRoute, showing) => {
    // const {item} = route.params;
    return ims.map(img => `img.${img.id}`);
}
     

export default Detail;