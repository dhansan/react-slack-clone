//Libraries
import React from 'react';
import { connect } from 'react-redux';
// Styles
import './App.css';
import { Grid } from 'semantic-ui-react';
// Link
import ColorPanel from './Organisms/ColorPanel/ColorPanel';
import Messages from './Organisms/Messages/Messages';
import MetaPanel from './Organisms/MetaPanel/MetaPanel';
import SidePanel from './Organisms/SidePanel/SidePanel';

const App = ({ currentUser, currentChannel, isPrivateChannel }) => (
  <Grid columns="equal" className="app" style={{ background: '#eee' }}>
    <ColorPanel />
    <SidePanel key={currentUser && currentUser.uid} currentUser={currentUser} />

    <Grid.Column style={{ marginLeft: 320 }}>
      <Messages
        key={currentChannel && currentChannel.id}
        currentChannel={currentChannel}
        currentUser={currentUser}
        isPrivateChannel={isPrivateChannel}
      />
    </Grid.Column>

    <Grid.Column width={4}>
      <MetaPanel
        key={currentChannel && currentChannel.id}
        currentChannel={currentChannel}
        isPrivateChannel={isPrivateChannel}
      />
    </Grid.Column>
  </Grid>
);

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
  currentChannel: state.channel.currentChannel,
  isPrivateChannel: state.channel.isPrivateChannel,
});

export default connect(mapStateToProps)(App);
