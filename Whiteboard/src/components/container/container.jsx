import React, { Component } from 'react'
import Board from "../board/board"
import "./style.css"

export default class container extends Component {
    state={
        color:"#000000",
        linewidth:5
    }
    changeSize=(e)=>{
        this.setState({
            color:e.target.value
        })
    }
    
    render() {
        return (
            
                <div className="container">
                    <div className="color-picker">
                        <h2 style={{color:"thistle"}} >SKETCHERZZ</h2>
                    <div className="brushsize-container">
                        Select Brush Color : &nbsp; 
                        <select value={this.state.color} onChange={this.changeSize.bind(this)}>
                        <option> CHOOSE... </option>
                        <option> RED </option>
                            <option> GREEN </option>
                            <option> BLUE </option>
                            <option> BLACK </option>
                            <option> ORANGE </option>
                            <option> PURPLE </option>
                        </select>
                    </div>
                    </div>
                    <div className="board-container">
                        <Board color={this.state.color} ></Board>

                    </div>
                    
                </div>
                
            
        )
    }
}
