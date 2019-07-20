import React,{Component} from 'react'

import './index.less'

class CustomEdition extends Component {

    state = {
        result1:{
            isClose:true,
            title:'高级版-标题1',
            content:'高级版正文1高级版正文1高级版正文1高级版正文1',
        },
        result2:{
            isClose:true,
            title:'高级版-标题2',
            content:'高级版正文2高级版正文2高级版正文2高级版正文2',
        },
        result3:{
            isClose:true,
            title:'高级版-标题3',
            content:'高级版正文3高级版正文3高级版正文3高级版正文3',
        },
        result4:{
            isClose:true,
            title:'高级版-标题4',
            content:'高级版正文4高级版正文4高级版正文4高级版正文4',
        },
        result5:{
            isClose:true,
            title:'高级版-标题5',
            content:'高级版正文5高级版正文5高级版正文5高级版正文5',
        },
        result6:{
            isClose:true,
            title:'高级版-标题6',
            content:'高级版正文6高级版正文6高级版正文6高级版正文6',
        },
        result7:{
            isClose:true,
            title:'高级版-标题7',
            content:'高级版正文7高级版正文7高级版正文7高级版正文7',
        },
        result8:{
            isClose:true,
            title:'高级版-标题8',
            content:'高级版正文8高级版正文8高级版正文8高级版正文8',
        },
        result9:{
            isClose:true,
            title:'高级版-标题9',
            content:'高级版正文9高级版正文9高级版正文9高级版正文9',
        },
        result10:{
            isClose:true,
            title:'高级版-标题10',
            content:'高级版正文10高级版正文10高级版正文10高级版正文10',
        },
    }

    render() {
        return (
            <div className="custom-func-container">
                <div className="title-container">
						<div className="custom-name-unchecked">{this.props.title}</div>
						<div className="title-content">
						（ 适合<div className="title-type">小型工作室</div><div>&nbsp;</div>）
						</div>
				</div>
                <div className="func-container">
						<div onClick={this.props.handleTipsResult.bind(this,this.state.result1)}>
							<div className="custom-icon">A</div>
							<div className="custom-title">标题1</div>
						</div>
						<div onClick={this.props.handleTipsResult.bind(this,this.state.result2)}>
							<div className="custom-icon">B</div>
							<div className= "custom-title">标题2</div>
						</div>
						<div onClick={this.props.handleTipsResult.bind(this,this.state.result3)}>
							<div className="custom-icon">C</div>
							<div className="custom-title">标题3</div>
						</div>
						<div onClick={this.props.handleTipsResult.bind(this,this.state.result4)}>
							<div className="custom-icon">D</div>
							<div className="custom-title">标题4</div>
						</div>
						<div onClick={this.props.handleTipsResult.bind(this,this.state.result5)}>
							<div className="custom-icon">E</div>
							<div className="custom-title">标题5</div>
						</div>
					</div>
					<div className="func-container">
						<div onClick={this.props.handleTipsResult.bind(this,this.state.result6)}>
							<div className="custom-icon">F</div>
							<div className="custom-title">标题6</div>
						</div>
						<div onClick={this.props.handleTipsResult.bind(this,this.state.result7)}>
							<div className="custom-icon">G</div>
							<div className="custom-title">标题7</div>
						</div>
						<div onClick={this.props.handleTipsResult.bind(this,this.state.result8)}>
							<div className="custom-icon">H</div>
							<div className="custom-title">标题8</div>
						</div>
						<div onClick={this.props.handleTipsResult.bind(this,this.state.result9)}>
							<div className="custom-icon">I</div>
							<div className="custom-title">标题9</div>
						</div>
						<div onClick={this.props.handleTipsResult.bind(this,this.state.result10)}>
							<div className="custom-icon">J</div>
							<div className="custom-title">标题10</div>
						</div>
					</div>
            </div>
        )
    }
}

export default CustomEdition;