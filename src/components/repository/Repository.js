import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome'
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles'

// import { Container } from './styles';

const { container, name, contentContainer, description } = styles;

const repository = (props) =>
    <View style={container}>
        <Text style={name}>{props.data.name}</Text>
        <Text numberOfLines={2} style={description}>{props.data.description}</Text>
        <View style={contentContainer}>
            <Icon style={{ marginRight: 5 }} name="star" size={16} color="#333" />
            <Text>{props.data.stars}</Text>
            <Icon style={{ marginLeft: 10, marginRight: 5 }} name="code-fork" size={16} color="#333" />
            <Text>{props.data.forks}</Text>
        </View>
    </View>

export default repository;
