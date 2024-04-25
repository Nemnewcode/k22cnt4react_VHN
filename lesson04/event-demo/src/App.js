import React, { Component } from 'react';
import VHN_enventform1 from './components/VHN_enventform1';
import VHN_eventform2 from './components/VHN_eventform2';
import VHN_eventform3 from './components/VHN_eventform3';
import VHN_eventform4 from './components/VHN_eventform4';

class App extends Component {
  render() {
    return (
      <div className='container'>
        <h1>Event Form demo</h1>
        <VHN_enventform1 />
        <VHN_eventform2 />
        <VHN_eventform3 />
        <VHN_eventform4 name="Vu Hoai Nam" />
      </div>
    );
  }
}

export default App;