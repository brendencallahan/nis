import { Component } from 'react';
import axios from 'axios';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      apod: []
    };
  }

  componentDidMount() {
    axios.get('/api')
      .then((res) => res.data)
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
