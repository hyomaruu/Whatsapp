import React, { Component } from 'react';
import { Container, List, ListItem, View, Thumbnail, Fab, Icon, Text, Left, Body, Right } from 'native-base';
import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    icon: {
        backgroundColor: '#51e302'
    },
    text: {
        color: 'gray'
    }
})


export default class ChatBoxes extends Component {
    render() {
        const { image, name, isi, jam } = this.props
        return (
            <ListItem avatar>
                <Left>
                    <Thumbnail source={{ uri: image }} />
                </Left>
                <Body>
                    <Text>{name}</Text>
                    <Text note style={styles.text}>{isi}</Text>
                </Body>
                <Right>
                    <Text note>{jam}</Text>
                </Right>
            </ListItem>
        )
    }
}