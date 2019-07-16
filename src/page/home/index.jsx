import React from "react";
import prestrain from "@/components/prestrain";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { increment, decrement, reset } from "@/redux/home/action";
// const a = React.createClass({})
import Hook from "./hook";
@prestrain({
  style: require("./style.scss"),
  form: true,
  connect: {
    mapStateToProps: state => {
      console.log(state);
      return {
        reducer: state.reducer
      };
    },
    mapDispatchToProps: {
      increment,
      decrement,
      reset
    }
  }
})
class Home extends React.Component {
  static propTypes = {
    increment: PropTypes.func.isRequired,
    decrement: PropTypes.func.isRequired,
    reset: PropTypes.func.isRequired
  };
  constructor(props) {
    super(props);
    this.state = {
      checkNick: false,
      dataSource: []
    };
  }
  componentWillMount() {}
  componentDidMount() {
    console.log(this.b.color)
  }
  a = () => {
    this.color = ["a", "b", "C"];
    this.a.prototype.add = () => {
      return 4;
    };
  };
  b = () => {
    this.a.call(this);
  };
  check = () => {
    this.props.form.validateFields((err, value) => {
      console.log(value);
      if (!err) {
        console.info("success");
      }
    });
  };

  handleChange = e => {
    this.setState(
      {
        checkNick: e.target.checked
      },
      () => {
        this.props.form.validateFields(["nickname"], { force: true });
      }
    );
  };
  add = () => {
    let a = 6;
    Api.get("/user").then(res => {
      this.setState({
        dataSource: res.data
      });
    });
    this.props.increment(a);
  };
  render() {
    const { form } = this.props;
    const { getFieldDecorator } = form;
    const formItemLayout = {
      labelCol: { span: 4 },
      wrapperCol: { span: 8 }
    };
    const formTailLayout = {
      labelCol: { span: 4 },
      wrapperCol: { span: 8, offset: 4 }
    };
    const { dataSource } = this.state;
    const columns = [
      {
        title: "姓名",
        dataIndex: "personName",
        key: "personName"
      },
      {
        title: "日期",
        dataIndex: "Date",
        key: "Date"
      },
      {
        title: "地址",
        dataIndex: "adress",
        key: "adress"
      },
      {
        title: "備註",
        dataIndex: "reason",
        key: "reason"
      },
      {
        title: "原因",
        dataIndex: "viewName",
        key: "viewName"
      }
    ];
    return (
      <div className="home">
        <div>
          <div>当前计数为{this.props.reducer.count}</div>
          <button onClick={() => this.add()}>自增</button>
          <button onClick={() => this.props.decrement()}>自减</button>
          <button onClick={() => this.props.reset()}>重置</button>
        </div>
        <Hook name={"张珊"} />
        <Form.Item {...formItemLayout} label="data">
          {getFieldDecorator("username1", {
            initialValue: moment("2019-01-01"),
            rules: [
              {
                required: true,
                message: "Please input your name"
              }
            ]
          })(<DatePicker style={{ width: "100%" }} />)}
        </Form.Item>
        <Form.Item {...formItemLayout} label="Name">
          {getFieldDecorator("username", {
            initialValue: "000",
            rules: [
              {
                required: true,
                message: "Please input your name"
              }
            ]
          })(<Input placeholder="Please input your name" />)}
        </Form.Item>
        {/*<Form.Item {...formItemLayout} label="Nickname">
          {getFieldDecorator("nickname", {
            rules: [
              {
                required: this.state.checkNick,
                message: "Please input your nickname"
              }
            ]
          })(<Input placeholder="Please input your nickname" />)}
        </Form.Item>*/}
        <Form.Item {...formTailLayout}>
          <Checkbox checked={this.state.checkNick} onChange={this.handleChange}>
            Nickname is required
          </Checkbox>
        </Form.Item>
        <Form.Item {...formTailLayout}>
          <Button type="primary" onClick={this.check}>
            Check
          </Button>
        </Form.Item>
        <Table dataSource={dataSource} columns={columns} />
      </div>
    );
  }
}
// const mapStateToProps = state => {
//   return {
//     reducer: state.reducer
//   };
// };

// const mapDispatchToProps = dispatch => {
//   return {
//     increment: (value) => {
//       dispatch(increment(value));
//     },
//     decrement: () => {
//       dispatch(decrement());
//     },
//     reset: () => {
//       dispatch(reset());
//     }
//   };
// };
// const mapDispatchToProps1 = {
//   increment,
//   decrement,
//   reset
// };
// export default connect(mapStateToProps, mapDispatchToProps1)(Home);

// export default connect(
//   state => ({
//     reducer: state.reducer
//   }),
//   {
//     increment,
//     decrement,
//     reset
//   }
// )(Home);
export default withRouter(Home);
