import React from "react";

class CounterApp extends React.Component {
  constructor(props) {
    super(props);

    // inisialisasi nilai count di dalam state
    this.state = {
      count: 0,
    };
  }

  render() {
    return (
      <div>
        <p>TODO</p>
      </div>
    );
  }
}

export default CounterApp;
