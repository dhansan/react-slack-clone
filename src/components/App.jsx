//Libraries
import React from 'react';
import { Grid } from 'semantic-ui-react';
// Styles
import './App.css';
// Link
import ColorPanel from './Organisms/ColorPanel/ColorPanel';
import Messages from './Organisms/Messages/Messages';
import MetaPanel from './Organisms/MetaPanel/MetaPanel';
import SidePanel from './Organisms/SidePanel/SidePanel';

const App = () => {
  return (
    <Grid columns="equal" className="app" style={{ background: '#eee' }}>
      <ColorPanel />
      <SidePanel />

      <Grid.Column style={{ marginLeft: 320 }}>
        <Messages />
      </Grid.Column>

      <Grid.Column width={4}>
        <MetaPanel />
      </Grid.Column>
    </Grid>
  );
};

export default App;
