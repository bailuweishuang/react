import React from "react";
import prestrain from "@/components/prestrain";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { increment, decrement, reset } from "@/redux/home/action";
@prestrain({
  style: require("./style.scss"),
  form: true,
  connect: {
    mapStateToProps: state => {
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
    this.state = { checkNick: false };
  }
  componentWillMount() {}
  componentDidMount() {}
  check = () => {
    this.props.form.validateFields(err => {
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
      console.log(res)
    })
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
    console.log(this.props);
    return (
      <div className="home">
        <div>
          <div>当前计数为{this.props.reducer.count}</div>
          <button onClick={() => this.add()}>自增</button>
          <button onClick={() => this.props.decrement()}>自减</button>
          <button onClick={() => this.props.reset()}>重置</button>
        </div>
        <Form.Item {...formItemLayout} label="data">
          {getFieldDecorator("username", {
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
            rules: [
              {
                required: true,
                message: "Please input your name"
              }
            ]
          })(<Input placeholder="Please input your name" />)}
        </Form.Item>
        <Form.Item {...formItemLayout} label="Nickname">
          {getFieldDecorator("nickname", {
            rules: [
              {
                required: this.state.checkNick,
                message: "Please input your nickname"
              }
            ]
          })(<Input placeholder="Please input your nickname" />)}
        </Form.Item>
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
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    reducer: state.reducer
  };
};

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
export default Home;
