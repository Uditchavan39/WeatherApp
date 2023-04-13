import { response } from 'express';
import React, { useState } from 'react';
import { View, Text,FlatList } from 'react-native';
import { TextInput,Button,Card } from 'react-native-paper';
import Header from './Header';
const Search = ({navigation}) => {
    const [city, setCity] = useState('')
    const [cities,setCities]=useState([])
    const fetchCities = (text)=>{
        setCity(text)
        fetch("http://api.weatherapi.com/v1/search.json?key=9043b347f92847bcabf180231231104&q="+text)
        .then(item=>item.json())
        .then(
            cityData=>{
            try{
                console.log(cityData.length)
            if(cityData.length!=0) 
            { setCities(cityData.map((postData)=>{
                console.log( postData);
                return postData;
            }))
        }
          console.log(cities)
    }catch(error){

    }
        })
        .catch(error=>console.error(error));
        };
        const btnClick=()=>{
            navigation.navigate("Home",{city:city})
           }
        const listCity=(cityName)=>{
            setCity(cityName)
            navigation.navigate("Home",{city:cityName})
        }
    return (

        <View style={{ flex: 1 ,backgroundColor:"white"}}>
            <Header name="Search Screen" />
            <TextInput label="City Name"
                theme={{
                    colors: {
                        primary: "teal"
                    }

                }}
                style={{backgroundColor:"white"}}
                value={city}
                onChangeText={(text)=>fetchCities(text)} 
            />
             <Button 
             icon="content-save"
             mode="contained"
             theme={{colors:{primary:"#00aaff"}}}
             style={{margin:20}}
             onPress={() => btnClick()}>
             Save Changes
            </Button>
            <FlatList
                 data={cities}
                renderItem={({item})=>{
                    return(
                        <Card
                            style={{margin:2,padding:20,backgroundColor:"gray"}}
                            onPress={()=>listCity(item.url)
                            }>
                            <Text> {item.url}</Text>
                        </Card>
                    )
                }}
                keyExtractor={item=>item.url}

            />
             
        </View>
    );
};

export default Search;