import React, {Component } from 'react';
import { Container, List, ListItem, View, Thumbnail, Fab, Icon, Text, Left, Body, Right, } from 'native-base';


export default class chat extends Component {
    render() {
        return (
            <Container>
                <List>
                    <ListItem avatar>
                        <Left>
                            <Thumbnail source={{ uri: 'https://i.pinimg.com/originals/23/79/62/237962a8d23a2e7162cf86ddae95acaa.jpg' }} />
                        </Left>
                        <Body>
                            <Text>Babang Tamvan</Text>
                            <Text note>Login Brooooooo, lagi pada ngumpul ini</Text>
                        </Body>
                        <Right>
                            <Text note>1:59 pm</Text>
                        </Right>
                    </ListItem>
                    <ListItem avatar>
                        <Left>
                            <Thumbnail source={{ uri: 'https://cdn.awwni.me/1m6lx.png' }} />
                        </Left>
                        <Body>
                            <Text>Bebep</Text>
                            <Text note>piring udh di cuci???, kalo udah sekalian di pel</Text>
                        </Body>
                        <Right>
                            <Text note>12:12 am</Text>
                        </Right>
                    </ListItem>
                    <ListItem avatar>
                        <Left>
                            <Thumbnail source={{ uri: 'https://i.pinimg.com/originals/1c/72/3d/1c723d7fb43fdb2e10044215eba8140a.jpg' }} />
                        </Left>
                        <Body>
                            <Text>Dobleh</Text>
                            <Text note>Skuy lah nongkrong, lagi gabut gw cuk</Text>
                        </Body>
                        <Right>
                            <Text note>08:09 pm</Text>
                        </Right>
                    </ListItem>
                    <ListItem avatar>
                        <Left>
                            <Thumbnail source={{ uri: 'https://i.redd.it/o8oig5236h341.jpg' }} />
                        </Left>
                        <Body>
                            <Text>Burhan</Text>
                            <Text note>Cuk liat pr dong gk ngerti gw, prnya apa aja ya????</Text>
                        </Body>
                        <Right>
                            <Text note>03:43 pm</Text>
                        </Right>
                    </ListItem>
                    <ListItem avatar>
                        <Left>
                            <Thumbnail source={{ uri: 'https://i.pinimg.com/236x/fa/d7/99/fad79911841d02dad174b67b09081633.jpg' }} />
                        </Left>
                        <Body>
                            <Text>Tukang Cupang</Text>
                            <Text note>Kok lu gk beli cupang lagi???, stoknya lagi banyak nih</Text>
                        </Body>
                        <Right>
                            <Text note>06:12 pm</Text>
                        </Right>
                    </ListItem>
                </List>
                <View style={{ flex: 1 }}>
                    <Fab
                        style={{ backgroundColor: '#51e302' }}
                        position="bottomRight">
                        <Icon name="chatboxes" />
                    </Fab>
                </View>
            </Container>
        )
    }
}