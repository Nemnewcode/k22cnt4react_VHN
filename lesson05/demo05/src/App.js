import React, { Component } from 'react';

class App extends Component {
  vhnSubmit =(param)=>{
    console.log("App:",param);
  }
  render() {
    return (
      <div>
        <h1>controlled component react form</h1>
        <vhnForm1 />
        <vhnForm2 />
        <hr/>
        <vhnForm3 onSubmit={this.vhnSubmit} />
      </div>
    );
  }
}

export default App;