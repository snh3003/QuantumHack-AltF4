import React from 'react';
import { View, Text, Button, StyleSheet, Image} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const DetailScreen = ({ navigation }) => {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Image style={styles.img} source={require('../assets/delhi5.jpg') } />
        <View style={styles.footer}>
          <Text style={styles.textstyle}>
            <MaterialIcons name="location-on" color="#009387" size={20}/>
            Delhi, India    
          </Text>
          <Text style={styles.textstyle}>
            <MaterialCommunityIcons name="camera-metering-matrix" color="#009387" size={20} />
            100 sqft
          </Text>
          <Text style={styles.textstyle}>
            <MaterialCommunityIcons name="currency-inr" color="#009387" size={20} />
            1200 per sqft
          </Text>
          <Button title="Rent" style={styles.btn}/>
      </View>
      
    </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    img:{
      flex:1,
      height: 300,
      width: 300,
      borderRadius: 10,
      margin: 10
    },
    footer: {
      flex: 1,
      backgroundColor: '#fff',
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      paddingHorizontal: 20,
      paddingVertical: 30,
      width: 300,
      height: 150
    },
    textstyle:{
      marginTop: '3%',      
      marginLeft: 10,
      color: 'black'
    },
    btn:{
      flex:1,
      borderRadius:50,
      width: 150,
      height: 40,
    }
  });

export default DetailScreen;  