import React, { useState, useEffect, Component } from 'react';
import { TouchableOpacity, StatusBar } from 'react-native';
import { AppLoading } from 'expo';
import { Container,Header,Tab, Tabs, TabHeading, Icon, Text, Body, Right, Button, Title, ScrollableTab} from 'native-base';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';

import Chat from './tabs/Chat'
import Status from './tabs/Status'

import TabCamera from './tabs/TabCamera';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isReady: false,
    };
  }

  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      ...Ionicons.font,
    });
    this.setState({ isReady: true });
  }

  render() {
    if (!this.state.isReady) {
      return <AppLoading />;
    }
    return (
      <Container>
        <Header style={{ backgroundColor: "#075E54" }}>

          <Body>
            <Title style={{ fontSize: 20, fontWeight: "bold", marginLeft: 2 }}>WhatsApp</Title>
          </Body>
          <Right>
            <Button transparent>
              <Icon name='search' />
            </Button>
            <Button transparent>
              <Icon name='more' />
            </Button>
          </Right>
        </Header>



        <Tabs tabContainerStyle={{ elevation: 0 }}>
          <Tab heading={<TabHeading style={{ backgroundColor: "#075E54" }}><Text style={{ color: "white" }}>CHAT</Text></TabHeading>}>
            <Chat/>
          </Tab>
          <Tab heading={<TabHeading style={{ backgroundColor: "#075E54" }}><Text style={{ color: "white" }}>STATUS</Text></TabHeading>}>
            <Status/>
          </Tab>
          <Tab heading={<TabHeading style={{ backgroundColor: "#075E54" }}><Text style={{ color: "white" }}>CALL</Text></TabHeading>}>

          </Tab>
        </Tabs>
      </Container>
    );
  }
}