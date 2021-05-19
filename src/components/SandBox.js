import React, {
  Component
} from 'react'
import styles from './SandBox.module.css';

class Excel extends React.Component{
  render(){
    return (
      <div>
        <table border="1">
          <thead>
          <tr>
            {
              this.props.headers.map((head,index)=>
                <th key={index}>{head}</th> )
            }
          </tr>
          </thead>
          <tbody>
          {this.props.data.map((item, index) =>
            <tr key={index}>
              <td>{item.username}</td>
              <td>{item.email}</td>
              <td>{item.account}</td>
            </tr>
          )}
          </tbody>
        </table>
      </div>
    );
  }
}

export default class header extends Component {
  constructor(props) {
    super(props); //获取组件的参数可以使用this.props就可以
    this.state = { //状态定义
      username: 'username',
      email: 'email',
      account: 'account',
      infoList: [],
      tdList: [],
      thList: ['username','email','account']
    }
  }
  handelSubmit = () => { //官方绑定事件的四种方法个人比较喜欢第四种是目前的实验性的方法
    //事件处理
    const addItem = {
      username: this.state.username,
      email: this.state.email,
      account: this.state.account,
    }
    this.setState({
      infoList: [...this.state.infoList, addItem],
      username: "",
      email: "",
      account:"",
    })
  }
  handeInfoVal=(e)=>{
    let  inputValue = e.target.value,
      inputName = e.target.name
    this.setState({
      [inputName]:inputValue
    })
    console.log(this.state)
  }
  render() {
    return (
      <div>
        <form id="form_id">
          <form-item>
            <label htmlFor="username">用户名：</label>
            <input name="username" type="text" onChange={this.handeInfoVal} value={this.state.username}/>
          </form-item>
          <form-item>
            <label htmlFor="email">邮箱：</label>
            <input name="email" type="text" onChange={this.handeInfoVal} value={this.state.email}/>
          </form-item>
          <form-item>
            <label htmlFor="account">卡信息：</label>
            <input name="account" type="text" onChange={this.handeInfoVal} value={this.state.account}/>
          </form-item>
        </form>
        <button className={styles.btn} onClick = {this.handelSubmit}> 提交 </button>
        <Excel headers={this.state.thList} data={this.state.infoList}/>
      </div>
    );
  }
}
