import React, { useState, useEffect, Component } from 'react';
import { TouchableOpacity, StatusBar } from 'react-native';
import { AppLoading } from 'expo';
import { Container, Icon, Text, Body, Button,List,ListItem,Left,Thumbnail,View,Fab } from 'native-base';


export default class status extends Component {
    render() {
        return (
            <Container>
                <List>
                    <ListItem avatar>
                        <Left>
                            <Thumbnail source={{ uri: 'https://raw.githubusercontent.com/arm02/cpsapp/master/public/uploads/webcam_5c3f2dac37117.png' }} />
                        </Left>
                        <Body>
                            <Text>Status Saya</Text>
                            <Text note>Klik untuk melakukan pembaruan status saya . .</Text>
                        </Body>
                    </ListItem>
                </List>
                <List>
                    <ListItem itemDivider>
                        <Text note>Pembaruan Terkini</Text>
                    </ListItem>
                </List>
                <List>
                    <ListItem avatar>
                        <Left>
                            <Thumbnail source={{ uri: 'http://smkn10jakarta.sch.id/wp-content/uploads/2015/05/Bu_Aminah.jpg' }} style={{ borderRadius: 50, borderColor: '#075E54', borderWidth: 2 }} />
                        </Left>
                        <Body>
                            <Text>Aminah</Text>
                            <Text note>Kemarin 12.55</Text>
                        </Body>
                    </ListItem>
                </List>
                <List>
                </List>
                <List>
                    <ListItem avatar>
                        <Left>
                            <Thumbnail source={{ uri: 'http://smkn10jakarta.sch.id/wp-content/uploads/2018/10/DSC_0223.jpg' }} style={{ borderRadius: 50, borderColor: 'grey', borderWidth: 2 }} />
                        </Left>
                        <Body>
                            <Text>Ichsan</Text>
                            <Text note>Sekarang 09.00</Text>
                        </Body>
                    </ListItem>
                </List>
                <View style={{ flex: 1 }}>
                    <Fab
                        style={{ backgroundColor: '#51e302' }}
                        position="bottomRight">
                        <Icon name="camera" />
                        <Button disabled style={{ backgroundColor: 'white'}}>
                            <Icon name="create" style={{ color: '#075E54' }}/>
                        </Button>
                    </Fab>
                </View>
            </Container >
        )
    }
}