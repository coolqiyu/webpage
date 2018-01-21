import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

//一个时钟组件，定时输出当前时间
class Clock extends React.Component{
  constructor(props){
    super(props);
    this.state = {date: new Date()};
  }
  componentDidMount(){
    this.timerID = setInterval(
      ()=>this.tick(),
      1000
    );
  }
  componentWillUnmount(){
    clearInterval(this.timerID);
  }
  tick(){
    this.setState({
      date: new Date()
    });
  }
  render(){
    return (
      <div>
        <h2>It is {this.state.date.toLocaleString()}</h2>
      </div>
    );
  }
}
class MyComponent extends Component{
  //mounting
  constructor(){
    super();
    console.log('constructor');
  }
  componentWillMount(){
    console.log('component will mount');
  }
  render(){
    return (
      <div>this is render function</div>
    )
  }
  componentDidMount(){
    console.log('component did mount')
  }
  //updating
  componentWillReceiveProps(){
    console.log('component will receive props');
  }
  shouldComponentUpdate(){
    console.log('should component update');
  }
  componentWillUpdate(){
    console.log('component will update')
  }
  //render
  componentDidUpdate(){
    console.log('component did update');
  }
  //unmouting
  conponentWillUnmount(){
    console.log('component will unmount')
  }
}
class Toggle extends Component{
  constructor(props){
    super(props);
    this.state = {isToggleOn: true};
    //这个需要bind，否则handleClick中的this会是undefined
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(){
    this.setState(prevState=>({
      isToggleOn: !prevState.isToggleOn
    }))
  }
  render(){
    return (
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? 'ON' : 'OFF'}
      </button>
    )
  }

}
class RefComponent extends Component{
  constructor(){
    super();
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(){
    //this.refs里面
    this.refs.myInput.focus();
  }
  render(){
    return (
      <div>
        {/* ref属性，这样就可以在组件的this.refs中访问到 */}
        <input type="text" ref="myInput" />
        <input type="button" value="点击使输入框获取焦点" onClick={this.handleClick} />
      </div>
    )
  }
}
class App extends Component {
  // constructor(){
  //   super();
  //   this.state={date: new Date()}
  // }
  //为什么这里面的this就是undefined，通过onClick调用
  // handleTime(){
  //   this.setState({date: new Date()})
  // }
  render() {
    var i;
    // 用camelCase语法来设置内联样式
    var myStyle = {
      fontSize: 20,//会自己加一个px
      color: '#000'
    }
    var arr = [
      <h3>数组第1个元素</h3>,
      <h3>数组第2个元素</h3>
    ]
    //用一个函数来定义一个组件，name是标签的一个属性中定义
    function HelloMessage(props) {
      return <h1>Hello, {props.name}</h1>;
    }
    //添加组合组件
    function WebSite(props){
      return <div>
            <Name name={props.name} />
            <Link site={props.site} />
            </div>
    }
    function Name(props){
      return <h1>{props.name}</h1>
    }
    function Link(props){
      return <a href={props.site}>{props.site}</a>
    }
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">欢迎你来到这里</h1>
        </header>
        <p className="App-intro" data-myattribute="somevalue">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div>
          <header>JSX的内容</header>
          <ul>
            <li>大括号里面写一个表达式{1+3}</li>
            <li>三元表达式{i === 1 ? 'True' : 'False'}</li>
            <li style={myStyle}>加一个内联样式</li>
            {/* 注释也要写在大括号里面 */}
            <li>插入一个数组变量，会自动展开{arr}</li>
            <li><HelloMessage name="world" />html标签和React组件: 为了区分的话，那React组件的标签就以大写开头命名。加一个name属性，会传到props.name中</li>
            <li>用一个组合组件<WebSite name="website名字" site="http://website.com" /></li>
            <li><Clock /></li>
            <li>Props的验证器</li>
            <li>
              <p>设置状态，不是直接修改this.state：setState；替换状态，有新的state替换原来所有的state，没有写的话就是删除了：replaceState；<br/>
                  设置属性：setProps；替换属性：replaceProps  同上<br/>
                  强制更新，手动要求组件调用自身的render()方法重新渲染组件，组件的子组件也会调用自己的render()：forceUpdate<br/>
                  获取DOM节点，组件已经挂载到DOM中，该方法返回对应的本地浏览器 DOM 元素：findDOMNode<br/>
                  判断组件挂载状态：isMounted
              </p>
            </li>
            <li>
              <p>
                组件生命周期分为三个阶段：mounting(已插入真实DOM), updating(正在被重新渲染), unmouting(已移出真实DOM)<br/>
                mounting组件将被创建且要插入真实DOM: constructor, componentWillMount, render, componentDidMount<br/>
                updating修改props或state时触发: componentWillReceiveProps, shouldComponentUpdate, componentWillUpdate, render, componentDidUpdate<br/>
                unmounting组件移出真实DOM: componentWillUnmount
              </p>
              <MyComponent />
            </li>
            <li>
              <p>
              React 组件的数据可以通过 componentDidMount 方法中的 Ajax 来获取，<br/>
              当从服务端获取数据库可以将数据存储在 state 中，再用 this.setState 方法重新渲染 UI。<br/>
              当使用异步加载数据时，在组件卸载前使用 componentWillUnmount 来取消未完成的请求。
              </p>
            </li>
            <li>
              Toggle点击改变状态<Toggle />
            </li>
            <li>
              <RefComponent />
            </li>
          </ul>
        </div>
      </div>  
    );
  }
}

export default App;
