import React, { useState, useEffect, Component } from 'react';
import { Container, List, ListItem, View, Thumbnail, Fab, Icon, Text, Left, Body, Right, } from 'native-base';
import { TouchableOpacity } from 'react-native'; 


export default class chat extends Component {
    render() {
        return (
            <Container>
                <List>
                    <ListItem avatar>
                        <Left>
                            <Thumbnail source={{ uri: 'http://smkn10jakarta.sch.id/wp-content/uploads/2018/10/DSC_0158-1.jpg' }} />
                        </Left>
                        <Body>
                            <Text>Eriati Anavia, S.Pd</Text>
                            <Text note>Tolong Mtk Di kumpulin ............... . .</Text>
                        </Body>
                        <Right>
                            <Text note>3:43 pm</Text>
                        </Right>
                    </ListItem>
                    <ListItem avatar>
                        <Left>
                            <Thumbnail source={{ uri: 'http://smkn10jakarta.sch.id/wp-content/uploads/2018/10/DSC_0217.jpg' }} />
                        </Left>
                        <Body>
                            <Text>Chandra Mafia, S.Pd</Text>
                            <Text note>Besok Ulangan Listening Harap Hadir . .</Text>
                        </Body>
                        <Right>
                            <Text note>10:43 am</Text>
                        </Right>
                    </ListItem>
                    <ListItem avatar>
                        <Left>
                            <Thumbnail source={{ uri: 'http://smkn10jakarta.sch.id/wp-content/uploads/2018/10/Pak-Sudewo-Pranowo.jpg' }} />
                        </Left>
                        <Body>
                            <Text>Sudewo Pranowo, M.Pd </Text>
                            <Text note>DHarap Tugas PKN besok di kumpulin !!!!!!</Text>
                        </Body>
                        <Right>
                            <Text note>08:43 pm</Text>
                        </Right>
                    </ListItem>
                    <ListItem avatar>
                        <Left>
                            <Thumbnail source={{ uri: 'http://smkn10jakarta.sch.id/wp-content/uploads/2018/10/RUSTAM.jpg' }} />
                        </Left>
                        <Body>
                            <Text>RUSTAM</Text>
                            <Text note>PROYEKTOR DI KEMBALIKAN JANGAN DI BAWA PULANG</Text>
                        </Body>
                        <Right>
                            <Text note>03:43 pm</Text>
                        </Right>
                    </ListItem>
                    <ListItem avatar>
                        <Left>
                            <Thumbnail source={{ uri: 'https://raw.githubusercontent.com/arm02/cpsapp/master/public/uploads/webcam_5c406c65d5f6d.png' }} />
                        </Left>
                        <Body>
                            <Text>BANG UNDER</Text>
                            <Text note>Lorem Ipsum dolor shit amte meta tmasdmac .cx.,c.a </Text>
                        </Body>
                        <Right>
                            <Text note>03:43 pm</Text>
                        </Right>
                    </ListItem>
                </List>
                <View style={{ flex: 1 }}>
                    <Fab
                        style={{ backgroundColor: '#51e302' }}
                        position="bottomRight">
                        <Icon name="text" />
                    </Fab>
                </View>
            </Container>
        )
    }
}