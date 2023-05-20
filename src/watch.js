import React from "react";

class Watch extends React.Component {
  constructor() {
    super();
    this.state = {
      time: new Date().toLocaleTimeString(),
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        time: new Date().toLocaleTimeString(),
      });
    }, 1000);
  }

  render() {
    return (
      <div>
        <h1>Watch</h1>
        <h2>{this.state.time}</h2>
      </div>
    );
  }
}
export default Watch;
