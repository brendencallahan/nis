import { Component } from 'react';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      apod: []
    };
  }

  componentDidMount() {
    fetch('/api/home')
      .then((res) => res.json())
      .then((apod) => {
        this.setState({ apod: apod });
      });
  }

  render() {
    return (
      <ul>
        <h1>{this.state.apod.title}</h1>
        <img src={this.state.apod.url} alt=""></img>
      </ul>
    );
  }
}

export default Home;
