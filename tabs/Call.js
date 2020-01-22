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
                            <Thumbnail square source={{ uri: 'https://it-club.smkn10jakarta.sch.id/images/foto/2017022209440658acfaf665d10.jpg' }} style={{ borderRadius: 50 }} />
                        </Left>
                        <Body>
                            <Text>Arief Setya</Text>
                            <Text note numberOfLines={1}><Icon name='redo' style={{ color: 'green' }} />&nbsp;&nbsp;Sekarang 20.00</Text>
                        </Body>
                        <Right>
                            <Button transparent>
                                <Icon name='call' style={{ color: "#075354" }} />
                            </Button>
                        </Right>
                    </ListItem>
                </List>
                <List>
                    <ListItem thumbnail>
                        <Left>
                            <Thumbnail square source={{ uri: 'http://smkn10jakarta.sch.id/wp-content/uploads/2018/10/MUH.-NURROHMAN.jpg' }} style={{ borderRadius: 50 }} />
                        </Left>
                        <Body>
                            <Text>Aroh Claten</Text>
                            <Text note numberOfLines={1}><Icon note name='undo' style={{ color: 'red' }} />&nbsp;&nbsp;&nbsp;Kemarin 15.20</Text>
                        </Body>
                        <Right>
                            <Button transparent>
                                <Icon name='videocam' style={{ color: "#075354" }} />
                            </Button>
                        </Right>
                    </ListItem>
                </List>
            </Container>
        )
    }
}