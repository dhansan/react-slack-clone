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

const App = ({ currentUser }) => {
  return (
    <Grid columns="equal" className="app" style={{ background: '#eee' }}>
      <ColorPanel />
      <SidePanel currentUser={currentUser} />

      <Grid.Column style={{ marginLeft: 320 }}>
        <Messages />
      </Grid.Column>

      <Grid.Column width={4}>
        <MetaPanel />
      </Grid.Column>
    </Grid>
  );
};

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
});

export default connect(mapStateToProps)(App);
