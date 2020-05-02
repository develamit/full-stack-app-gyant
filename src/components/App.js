import React from 'react';
import Header from './Header';
import CasePreview from './CasePreview';
//import data from '../testData';

// for statefull components
// Note: cases will be loaded from the API
class App extends React.Component {
  state = {
    pageHeader: 'Doctor Case Review',
    cases: this.props.initialContests
  };

  // lifecycle methods
  componentDidMount() {
    // set the timers, listeners
    // make Ajax calls to fetch the data from remote API
    // use axios, which is promise based
  }
  componentWillUnmount() {
    // clean timers, listeners
    //console.log('will unmount');
  }

  render() {
    //debugger;
    return (
      <div className="App">
        <Header message={this.state.pageHeader}/>
        <div>
          {this.state.cases.map(contest =>
            <CasePreview key={contest.id} {...contest} />
          )}
        </div>

      </div>
    );
  }
}

export default App;
