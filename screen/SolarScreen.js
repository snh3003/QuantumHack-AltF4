import React, {useState} from 'react';
import { View, Text, StyleSheet, Image, Button, ImageBackground } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const SolarScreen = ({navigation}) => {

  const [content, setContent] = useState([
    { name: 'Delhi, India', Price: '1200 per sqft', Area: '100 sqft', src: require('../assets/solarpanel.jpg')},
    { name: 'Delhi, India', Price: '1200 per sqft', Area: '100 sqft', src: require('../assets/solarpanel7.jpg')},
    { name: 'Raipur, India', Price: '200 per sqft', Area: '100 sqft', src: require('../assets/solarpanel2.jpg')},
    { name: 'Bangalore, India', Price: '1600 per sqft', Area: '100 sqft', src: require('../assets/solarpanel3.jpg')},
    { name: 'Mumbai, India', Price: '1200 per sqft', Area: '100 sqft', src: require('../assets/solarpanel4.jpg')},
    { name: 'Jaipur, India', Price: '800 per sqft', Area: '100 sqft', src: require('../assets/solarpanel5.jpg')},
    { name: 'Kolkata, India', Price: '1400 per sqft', Area: '100 sqft', src: require('../assets/solarpanel6.jpg')},
    { name: 'Lucknow, India', Price: '800 per sqft', Area: '100 sqft', src: require('../assets/solarpanel7.jpg')},
    { name: 'Delhi, India', Price: '1200 per sqft', Area: '100 sqft', src: require('../assets/solarpanel2.jpg')},
    { name: 'Delhi, India', Price: '1200 per sqft', Area: '100 sqft', src: require('../assets/solarpanel4.jpg')},
  ])

    return (
        <View style={styles.container}>
            
            <ScrollView style={styles.footer}>
              {
                content.map( (i, index) => (
                  <View key={index} style={styles.card}>
                    <Image resize="contain" style={styles.image} source={i.src}/>
                    <View style={styles.cardDetails}>
                      <Text style={styles.textstyle}>
                        <MaterialIcons name="location-on" color="#9370db" size={20}/>
                        {i.name}
                      </Text>
                      <Text style={styles.textstyle}>
                      <MaterialCommunityIcons name="camera-metering-matrix" color="#9370db" size={20} />
                        {i.Area}
                      </Text>
                      <Text style={styles.textstyle}>
                        <MaterialCommunityIcons name="currency-inr" color="#9370db" size={20} />
                        {i.Price}
                      </Text>
                      <Button title="View" onPress={() => navigation.navigate("Detail")} color="blue" />
                    </View>
                  </View>
                ))
              }
            </ScrollView>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f5f5f5',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingTop: 40,      
    },
    img:{
      borderRadius: 10,
    },
    header: {
      flex: 1,
      justifyContent: 'flex-end',
      borderRadius: 10,
    },
    footer: {
        flex: 1,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    textstyle:{
      marginTop: '3%',      
      marginLeft: 10,      
    },
    card: {      
      borderWidth: 2,
      borderColor: '#9370db',
      borderRadius: 10,
      borderTopWidth: 20,
      borderTopLeftRadius: 50,
      borderBottomWidth: 20,
      borderBottomRightRadius: 50,
      marginBottom: 10,
      flexDirection: 'row',
      borderRadius: 10,
      backgroundColor: '#f8f8ff',
      paddingHorizontal: 20,
    },
    cardDetails:{
      padding: 15
    },
    image: {
      marginTop: '10%',
      height: 100,
      width: 100,
      borderRadius: 10
    },
  });
export default SolarScreen;