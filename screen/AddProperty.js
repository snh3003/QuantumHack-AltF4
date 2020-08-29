import React from 'react';
import { View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';
import { createStackNavigator } from '@react-navigation/stack';

const AddProperty = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text>Add Property</Text>
            <Input
            placeholder='Location'
            />

            <Input
            placeholder='Price per sqft'
            leftIcon={{ type: 'font-awesome', name: 'chevron-left' }}
            />

            <Input
            placeholder='Person Name'
            leftIcon={
                <Icon
                name='user'
                size={24}
                color='black'
                />
            }
            />
            <Input
            placeholder="Area"
            leftIcon={{ type: 'font-awesome', name: 'comment' }}
            style={styles}
            onChangeText={value => this.setState({ comment: value })}
            />
            <Input
            placeholder='INPUT WITH ERROR MESSAGE'
            errorStyle={{ color: 'red' }}
            errorMessage='ENTER A VALID ERROR HERE'
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})

export default AddProperty;