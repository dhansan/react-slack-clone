import React, { Component } from 'react';
import firebase from '../../Config/Firebase/firebase';
import { Segment, Comment } from 'semantic-ui-react';

import MessageForm from './MessageForm';
import MessagesHeader from './MessagesHeader';

class Messages extends Component {
  state = {
    messagesRef: firebase.database().ref('messages'),
    channel: this.props.currentChannel,
    user: this.props.currentUser,
  };
  render() {
    const { messagesRef, channel, user } = this.state;
    return (
      <React.Fragment>
        <MessagesHeader />

        <Segment>
          <Comment.Group className="messages">{/* Messages */}</Comment.Group>
        </Segment>

        <MessageForm
          messagesRef={messagesRef}
          currentChannel={channel}
          currentUser={user}
        />
      </React.Fragment>
    );
  }
}

export default Messages;
