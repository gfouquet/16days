import React from 'react';
// import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      txt: "lolz"
    }
  }

  render() {
    let update = this.update.bind(this);
    return (
      <div>
        <input type="text" className="type" onChange={update} / >
        <div>
        {this.state.txt} {this.props.cat }
        </div>
      </div>);
  }

  update(event) {
    this.setState({txt: event.target.value})
  }
}

App.propTypes = {
  cat: React.PropTypes.number.isRequired
}

App.defaultProps = {
  cat: 100
}
//
// ReactDOM.render(
//   <App txt="lulz" />, document.getElementById('app')
// );

export default App;
