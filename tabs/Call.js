import React, { Component } from 'react'
import { Container, List, ListItem, View, Thumbnail, Fab, Icon, Text, Left, Body, Right, Button} from 'native-base';

import { Ionicons } from '@expo/vector-icons';



export default class Call extends Component {
    render() {
        return (
            <Container>
                <List>
                    <ListItem thumbnail>
                        <Left>
                            <Thumbnail square source={{ uri: 'https://i.pinimg.com/originals/23/79/62/237962a8d23a2e7162cf86ddae95acaa.jpg' }} style={{ borderRadius: 50 }} />
                        </Left>
                        <Body>
                            <Text>babang Tamvan</Text>
                            <Text note numberOfLines={1}><Icon name='redo' style={{ color: 'green' }} />&nbsp;&nbsp;10 Januari 20.00</Text>
                        </Body>
                        <Right>
                            <Button transparent>
                                <Icon name='call' style={{ color: "#128C7E" }} />
                            </Button>
                        </Right>
                    </ListItem>
                </List>
                <List>
                    <ListItem thumbnail>
                        <Left>
                            <Thumbnail square source={{ uri: 'https://i.pinimg.com/originals/1c/72/3d/1c723d7fb43fdb2e10044215eba8140a.jpg' }} style={{ borderRadius: 50 }} />
                        </Left>
                        <Body>
                            <Text>Dobleh</Text>
                            <Text note numberOfLines={1}><Icon note name='undo' style={{ color: 'red' }} />&nbsp;&nbsp;&nbsp;Hari ini 15.20</Text>
                        </Body>
                        <Right>
                            <Button transparent>
                                <Icon name='videocam' style={{ color: "#128C7E" }} />
                            </Button>
                        </Right>
                    </ListItem>
                </List>
            </Container>
        )
    }
}