import React, { useState, useEffect, Component } from 'react';
import { TouchableOpacity, StatusBar } from 'react-native';
import { AppLoading } from 'expo';
import { Container, Icon, Text, Body, Button,List,ListItem,Left,Thumbnail,View,Fab, Badge } from 'native-base';


export default class status extends Component {
    render() {
        return (
            <Container>
                <List>
                    <ListItem avatar  style={{marginBottom:5}}>
                        <Left>
                            <Thumbnail source={{ uri: 'https://i.pinimg.com/originals/ac/c0/3c/acc03cb0f87affecd09ccc89d1ddd713.jpg' }} >
                                
                            </Thumbnail>
                            <Badge style={{position:'absolute', right:0,bottom:0, backgroundColor:"#25D366",width:20,height:20}}><Icon name="add" style={{position:'absolute', color:'white',height:25,width:25, position:'absolute',top: -4,left:1.2}}></Icon></Badge>
                        </Left>
                        <Body>
                            <Text>Status Saya</Text>
                            <Text note style={{fontSize:14.5}}>Ketuk untuk menambahkan pembaru...</Text>
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
                            <Thumbnail source={{ uri: 'https://i.pinimg.com/originals/1c/72/3d/1c723d7fb43fdb2e10044215eba8140a.jpg' }} style={{ borderRadius: 50, borderColor: '#075E54', borderWidth: 2 }} />
                        </Left>
                        <Body>
                            <Text>Dobleh</Text>
                            <Text note>Kemarin 22.55</Text>
                        </Body>
                    </ListItem>
                </List>
                <List>
                </List>
                <List>
                    <ListItem avatar>
                        <Left>
                            <Thumbnail source={{ uri: 'https://i.pinimg.com/236x/fa/d7/99/fad79911841d02dad174b67b09081633.jpg' }} style={{ borderRadius: 50, borderColor: 'grey', borderWidth: 2 }} />
                        </Left>
                        <Body>
                            <Text>Tukang Cupang</Text>
                            <Text note>Sekarang 19.00</Text>
                        </Body>
                    </ListItem>
                </List>
                <View style={{ flex: 1 }}>
                    <Fab
                        style={{ backgroundColor: '#51e302' }}
                        position="bottomRight">
                        <Icon name="camera" />
                        <Button style={{ backgroundColor: 'white',width:41,height:41, marginBottom:20}}>
                            <Icon name="create" style={{ color: '#075E54' }}/>
                        </Button>
                    </Fab>
                </View>
            </Container >
        )
    }
}