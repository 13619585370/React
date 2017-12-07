1.安装路由插件
  命令：npm install react-router
2.引入：
  代码：import {Router,Route,hashHistory,Link} from "react-touter";
3.配置
  <Router history={hashHistory}>
    <Route path="/" component={Index}></Route>
  </Router>
  history: 历史记录
  path:指定路径，如果是“/”表示根路径
  component:指定加载组件
4.指定Link
  <Link to={'/java/'}>
    <button>前往java页面</button>
  </Link>
  to:指定去哪里

5.页面跳转携带参数
  1.在path中加入参数：path="/java/:id"
  2.在to里面加入值：to={'/java/${100}'}
  3.在对应的页面接收参数：{this.props.params.id}
