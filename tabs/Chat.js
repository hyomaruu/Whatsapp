import React, { Component } from 'react';
import { Container, List, ListItem, View, Thumbnail, Fab, Icon, Text, Left, Body, Right } from 'native-base';
import { StyleSheet } from 'react-native';
import ChatBoxes from '../screens/components/ChatBoxes'
let msgs = require('../json/userjson.json')




class Profiles extends Component {
    constructor(props) {
        super(props)
        this.state = {
            messages: [],
            isLoaded: false
        }
    }

    componentDidMount() {
        this.setState({ messages: msgs, isLoaded: true })
    }
    render() {
        if (this.state.isLoaded) {
            return (
                <View>

                    <List>
                        {
                            this.state.messages.map((item) => {
                                return (
                                    <ChatBoxes image={item.image} name={item.name} isi={item.isi} jam={item.jam}/>
                                )
                            })
                        }
                    </List>
                </View>
            )
        } else {
            return (
                <View>
                    <Text>masih loading gan..</Text>
                </View>

            )
        }
    }
}

class Fabs extends Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <Fab style={{backgroundColor: '#51e302'}} position="bottomRight">
                    <Icon name="chatboxes" />
                </Fab>
            </View>
        )
    }
}


export default class chat extends Component {
    render() {
        return (
            <Container>
                {/* <List>
                    <Profiles image='https://i.pinimg.com/originals/23/79/62/237962a8d23a2e7162cf86ddae95acaa.jpg' name='Babang Tamvan' isi='Login Brooooooo, lagi pada ngumpul ini' jam='01.59' />
                    <Profiles image='https://cdn.awwni.me/1m6lx.png' name='Bebep' isi='piring udh di cuci???, kalo udah sekalian di pel' jam='12.12' />
                    <Profiles image='https://i.pinimg.com/originals/1c/72/3d/1c723d7fb43fdb2e10044215eba8140a.jpg' name='Dobleh' isi='Skuy lah nongkrong, lagi gabut gw cuk' jam='08.09' />
                    <Profiles image='https://i.redd.it/o8oig5236h341.jpg' name='Burhan' isi='Cuk liat pr dong gk ngerti gw, prnya apa aja ya????' jam='15.43' />
                    <Profiles image='https://i.pinimg.com/236x/fa/d7/99/fad79911841d02dad174b67b09081633.jpg' name='Tukang Cupang' isi='Kok lu gk beli cupang lagi???, stoknya lagi banyak nih' jam='18.12' />
                </List> */}
                <Profiles />
                <Fabs name='chatboxes' />
            </Container>
        )
    }
}