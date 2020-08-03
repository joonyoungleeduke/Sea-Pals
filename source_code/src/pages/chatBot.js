import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';
import { Dialogflow_V2 } from 'react-native-dialogflow';
import { dialogflowConfig } from '../components/env'; // component's content was removed for publish 

// THIS COMPONENT WILL NOT WORK WITHOUT YOUR OWN INPUTTED 'dialogflowConfig' above ... this was removed for privacy purposes for public sharing 

// set bot 
const BOT_PAL = {
  _id: 2, 
  name: "Jacky", 
  avatar: 'https://i.imgur.com/U2APruv.png'
};

// create chat bot with bot above 
class chatBot extends Component {
  state = {
    messages: [
      {
        _id: 1,
        text: `Hey! Thanks for bringing me here :)`,
        createdAt: new Date(),
        user: BOT_PAL
      }
    ]
  };

  // set necessary permissions for requests
  componentDidMount() {
    Dialogflow_V2.setConfiguration(
      dialogflowConfig.client_email,
      dialogflowConfig.private_key,
      Dialogflow_V2.LANG_ENGLISH_US,
      dialogflowConfig.project_id
    );
  }

  // return Dialogflow API response 
  handleGoogleResponse(result) {
    let text = result.queryResult.fulfillmentMessages[0].text.text[0];
    this.sendBotResponse(text);
  }

  // user sends a msg, handle it with a response 
  onSend(messages = []) {
    this.setState(previousState => ({
      messages: GiftedChat.append(previousState.messages, messages)
    }));

    let message = messages[0].text;
    Dialogflow_V2.requestQuery(
      message,
      result => this.handleGoogleResponse(result),
      error => console.log(error)
    );
  }

  // related to 'return Dialogflow API response' 
  sendBotResponse(text) {
    let msg = {
      _id: this.state.messages.length + 1,
      text,
      createdAt: new Date(),
      user: BOT_PAL
    };

    this.setState(previousState => ({
      messages: GiftedChat.append(previousState.messages, [msg])
    }));
  }

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#fff' }}>
        <GiftedChat
          messages={this.state.messages}
          onSend={messages => this.onSend(messages)}
          user={{
            _id: 1
          }}
        />
      </View>
    );
  }
}

export default chatBot;