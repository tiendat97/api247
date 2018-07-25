import React from "react";
import axios from "axios";
import { connect } from "react-redux";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      persons: []
    };
  }

  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/users`).then(res => {
      const persons = res.data;
      this.setState({ persons });
    });
  }

  render() {
    return (
		<div></div>
	);
  }
}	

export default connect()(App);
