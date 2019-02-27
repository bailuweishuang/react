import React from "react";
import './style.scss';
import { DatePicker } from 'antd';
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentWillMount() {}
  componentDidMount() {}
  render() {
    return <div className="home">132
      <DatePicker></DatePicker>
      <p className="home-title">ss为什么会有两个样式</p>
    </div>;
  }
}
export default Home
