import { response } from 'express';
import React, { useState, useEffect} from 'react';
import { View, Text, FlatList,Image } from 'react-native';
import { TextInput, Button, Card, Title } from 'react-native-paper';
import Header from './Header';
const Home = (props) => {
    const [info, setinfo] = useState({
        name: "Loading !!!",
        temp: "Loading !!!",
        humid: "Loading !!!",
        desc: "Loading !!!",
        icon: "Loading !!!"
    })
    useEffect(() => {
        getWeather()
    }, [])
    const getWeather = ()=>{
       let myCity;
       const {city} =props.route.params;
       myCity=city
        fetch(`http://api.weatherapi.com/v1/current.json?key=9043b347f92847bcabf180231231104&q=${myCity}&aqi=no`)
            .then(data => data.json())
            .then(results => {
              //  console.log(results)
                setinfo({
                    name:results.location.name,
                    temp:results.current.temp_c,
                    humid:results.current.humidity,
                    desc:results.current.condition.text,
                    icon : results.current.condition.icon
                })
            
            })
            .catch(error=>{alert(error)});
    }
    if(props.route.params!="Pune"){
        getWeather();
    }
    return (
        <View style={{ flex :1 ,backgroundColor:"white"}}>
            <Header name="Weather App"/>
           <View style={{alignItems:'center'}}>
            <Title style={{color:"black",margin:30,fontSize:30}}>
                {info.name}
            </Title>
            <Image 
                style={{
                    width:120,
                    height:120
                }}
                source={{uri:"https://"+info.icon}}
            />
           </View>
           <Card style={{margin:5,padding:12}}>
                <Title style={{color:"black"}}>Temperature - {info.temp} {'\u00b0'}C</Title>
           </Card>
           
           <Card style={{margin:5,padding:12}}>
                <Title style={{color:"black"}}>Humidity - {info.humid} %</Title>
           </Card>
           <Card style={{margin:5,padding:12}}>
                <Title style={{color:"black"}}>Description - {info.desc}</Title>
           </Card>
        </View>
    )
}
export default Home