import React from "react";
import {Menu,Icon,Row,Button,Col,Modal,Form,Input,Tabs,message} from 'antd';
import {Router,Route,browserHistory,Link} from "react-router";
import NewsLogo from "../../../image/logo.png";
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
const FormItem = Form.Item;
const TabPane = Tabs.TabPane;

var regName="";

class Header extends React.Component{
  constructor(){
    super();
    this.state={
      current:"top",
      hasLogin:false,
      userNickName:"未知",
      visible:false,
      modalVisible:false,
      password:"",
      action:"login"
    }
  }

  //周期函数，保存用户名
  componentWillMount(){
    if(localStorage.getItem("userNickName")!=null){
      this.setState({
        hasLogin:true,
        userNickName:localStorage.getItem("userNickName")
      })
    }
  }
  //menu点击事件
  handlerClickMenu(event){
    if(event.key=="register"){
      this.setState({
        current:"register"
      });
      this.setModalVisible(true)
    }else{
      this.setState({
        current:event.key
      });
    }
  }

  //控制登录与注册框的显示与隐藏
  setModalVisible(value){
    this.setState({
      modalVisible:value
    })
  }
 //控制个人中心框的显示与隐藏
  setVisible(value){
    this.setState({
      visible:value
    })
  }

  //获取表单提交的数据
  handlerSubmit(event){
    event.preventDefault();
    var formData = this.props.form.getFieldsValue();
    //判断你点击的是登录还是注册
    // console.log(this.state.action);
    if(this.state.action=="login"){
      //登录
      if(formData.userName=="马百科" && formData.password=="123"){
        this.setState({
          hasLogin:true,
          userNickName:formData.userName,
          modalVisible:false
        })
        localStorage.setItem("userNickName",formData.userName)
        message.success("登录成功");
      }else{
        message.error("用户名或密码错误，请重新登录");
      }

      {/*
        有测试接口用下列方法
        var myFetchOption={
          method:"GET"
        }
        fetch("url",myFetchOption)
        .then(response=>response.json())
        .then(json=>{
          this.setState({
            hasLogin:true,
            userNickName:"马百科",
            password:"123456",
            modalVisible:false
          })
        })
        */}
    }else if(this.state.action=="register"){
      //注册
      this.setState({
         regName:formData.r_userName,
      })
      message.success("注册成功");
      this.setModalVisible(false);
    }
  }
  //退出事件
  handlerLogout(){
    this.setState({
      hasLogin:false
    })
    message.info("退出成功");
  }
  //显示个人中心的框
  handlerPer(){
    this.setState({
      visible:true
    })
  }

  //判断当前模态框是登录还是注册
  callback(key){
    if(key=="1"){
      this.setState({
        action:"login"
      })
    }else if(key == "2"){
      this.setState({
        action:"register"
      })
    }
  }
  render(){
    //接收页面参数
    var {getFieldDecorator}=this.props.form;
    //判断用户是否登录来确定加载那个视图
    var userShow = this.state.hasLogin
    ?
    <Menu.Item key="logout" className="header-login">
      <Button type="primary">{this.state.userNickName}</Button>
      <Button type="dashed" onClick={this.handlerPer.bind(this)}>个人中心</Button>
      <Button type="ghost" onClick={this.handlerLogout.bind(this)}>退出</Button>
    </Menu.Item>
    :
    <Menu.Item key="register" className="header-login" >
      登录/注册
    </Menu.Item>
    return(
      <div>
        <Row>
          <Col span={2}></Col>
          <Col span={20}>
            <Row>
              <Col span={1}>
                <div className="header-logo">
                  <img src={NewsLogo} />
                </div>
              </Col>
              <Col span={22}>
                <Menu onClick={this.handlerClickMenu.bind(this)} selectedKeys={[this.state.current]} mode="horizontal" >
                  <Menu.Item key="top">
                    <Link to={`nav/${"top"}`}>
                      <Icon type="to-top" />
                        头条
                    </Link>
                  </Menu.Item>
                  <Menu.Item key="yule">
                    <Link to={`nav/${"yule"}`}>
                      <Icon type="home" />
                        国内
                    </Link>
                  </Menu.Item>
                  <Menu.Item key="guonei">
                    <Link to={`nav/${"yule"}`}>
                      <Icon type="home" />
                        国内
                    </Link>
                  </Menu.Item>
                  <Menu.Item key="guoji">
                    <Link to={`nav/${"yule"}`}>
                      <Icon type="global" />
                        国际
                    </Link>
                  </Menu.Item>
                  <Menu.Item key="tiyu">
                    <Link to={`nav/${"tiyu"}`}>
                      <Icon type="skin" />
                        体育
                    </Link>
                  </Menu.Item>
                  <Menu.Item key="shehui">
                    <Link to={`nav/${"shehui"}`}>
                      <Icon type="usergroup-add" />
                        社会
                    </Link>
                  </Menu.Item>
                  <Menu.Item key="shishang">
                    <Link to={`nav/${"shishang"}`}>
                      <Icon type="bar-chart" />
                        时尚
                    </Link>
                  </Menu.Item>
                  <Menu.Item key="keji">
                    <Link to={`nav/${"keji"}`}>
                      <Icon type="camera" />
                        科技
                    </Link>
                  </Menu.Item>
                  {userShow}
                </Menu>
                <Modal title="用户中心"  visible={this.state.modalVisible} onCancel={()=>this.setModalVisible(false)} onOk={()=>this.setModalVisible(false)} cancelText="取消"  okText="关闭">
                  <Tabs type="card" onChange={this.callback.bind(this)}>
                    <TabPane tab="登录" key="1">
                      <Form horizontal >
                        <FormItem label="用户名">
                          {
                            getFieldDecorator("userName")
                            (<Input placeholder="请输入用户名"/>)
                          }
                        </FormItem>
                        <FormItem label="密码">
                          {
                            getFieldDecorator("password")
                            (<Input type="password" placeholder="请输入密码"/>)
                          }
                        </FormItem>
                        <FormItem>
                          <Button onClick={this.handlerSubmit.bind(this)} type="primary" htmlType="submit">登录</Button>
                        </FormItem>
                      </Form>
                    </TabPane>
                    <TabPane tab="注册" key="2">
                      <Form horizontal>
                        <FormItem label="用户名">
                          {
                            getFieldDecorator("r_userName")
                            (<Input placeholder="请输入用户名" />)
                          }
                        </FormItem>
                        <FormItem label="密码">
                          {
                            getFieldDecorator("r_password")
                            (<Input type="password" placeholder="请输入密码"/>)
                          }
                        </FormItem>
                        <FormItem label="确认密码">
                          {
                            getFieldDecorator("r_confirmpassword")
                            (<Input type="password" placeholder="请再次输入密码"/>)
                          }
                        </FormItem>
                        <FormItem >
                          <Button type="primary" onClick={this.handlerSubmit.bind(this)} htmlType="submit">注册</Button>
                        </FormItem>
                      </Form>
                    </TabPane>
                  </Tabs>
                </Modal>
                <Modal title="个人中心" visible={this.state.visible} onCancel={()=>this.setVisible(false)} onOk={()=>this.setVisible(false)} okText="确认" cancelText="取消" >
                  <p>姓名：马百科</p>
                  <p>性别：男</p>
                  <p>民族：回族</p>
                  <p>在职公司：无锡隆正信息有限公司</p>
                </Modal>
              </Col>
              <Col span={1}></Col>
            </Row>
          </Col>
          <Col span={2}></Col>
        </Row>
      </div>
    );
  }
}

export default  Header = Form.create({})(Header);
