import * as React from 'react';
import { Appbar, Title } from 'react-native-paper';
import { View, Text } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { white } from 'react-native-paper/lib/typescript/styles/themes/v2/colors';
const Header = (props) => {
    return (
        <Appbar.Header theme={{
          colors:{
            primary:"#00aaff"
          }
        }}
        style={{backgroundColor:"#00aaff",flexDirection:"row",justifyContent:"center"}}
        >

            <Title style={{ color: "white" }}>
                {props.name}
            </Title>
        </Appbar.Header>
    );
};

export default Header;