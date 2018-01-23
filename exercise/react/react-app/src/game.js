import React from 'react';
import ReactDOM from 'react-dom';
import './game.css';

class Square extends React.Component{
    constructor(){
        super();
        this.handleClick = this.handleClick.bind(this);
        this.state = {value:null}
    }
    handleClick(){
        this.setState({value:'X'});
    }
    render(){
        return (
            // 可以使用箭头函数来解决this的问题
            // <button className = "square" onClick={()=>this.handleClick()}>
            // {this.state.value}
            // </button>

            //子组件被触发onClick事件时，直接是调用父组件通过props传过来的onClick函数
            <button className="square" onClick={()=>this.props.onClick()}>
            {this.props.value}
            </button>
        )
    }
}
//Board中包括多个square
class Board extends React.Component{
    constructor(){
        super();
        this.state={
            Squares: Array(9).fill(null)
        }
    }
    handleClick(i){
        const squares = this.state.Squares.slice();
        squares[i] = 'X';
        this.setState({Squares: squares});
    }
    renderSquare(i){
        // 给Square传一个value属性，这里把父组件的state设置为子组件的属性
        // 增加一个onClick属性，对应的方法是当前父组件的方法
        return (
            <Square 
                value={this.state.Squares[i]} 
                onClick = {() => this.handleClick(i)}
            />
        );
    }
    render(){
        const status = "Nex player X";
        return (
            <div>
                <div className="status">{status}</div>
                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="board-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="board-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div> 
            </div>
        )
    }
}

class Game extends React.Component{
    render(){
        return (
            <div className = "game">
                <div className="game-board">
                    <Board />
                </div>
                <div className="game-info">
                    <div>{/*status*/}</div>
                    <ol>{/*TODO*/}</ol>
                </div>
            </div>
        )
    }
}
export default Game;