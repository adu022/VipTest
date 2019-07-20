import React,{Component} from 'react'

import './index.less'

class AdvancedEdition extends Component {

    state = {
        result1:{
            isClose:true,
            title:'高级版-标题1',
            content:'高级版正文1高级版正文1高级版正文1高级版正文1',
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
        result8:{
            isClose:true,
            title:'高级版-标题8',
            content:'高级版正文8高级版正文8高级版正文8高级版正文8',
        },
        result10:{
            isClose:true,
            title:'高级版-标题10',
            content:'高级版正文10高级版正文10高级版正文10高级版正文10',
        },

    }

    render() {
        return (
            <div className="version-func-container">
                <div className="title-container">
						<div className="version-name-unchecked">{this.props.title}</div>
						<div className="title-content">
						（ 适合<div className="title-type">独立摄影师</div><div>&nbsp;</div>）
						</div>
				</div>
                <div className="func-container">
						<div onClick={this.props.handleTipsResult.bind(this,this.state.result1)}>
							<div className="title-icon  advanced-icon">A</div>
							<div className="title advanced-title">标题1</div>
						</div>
						<div>
							<div className="title-icon">B</div>
							<div className= "title">标题2</div>
						</div>
						<div onClick={this.props.handleTipsResult.bind(this,this.state.result3)}>
							<div className="title-icon advanced-icon">C</div>
							<div className="title advanced-title">标题3</div>
						</div>
						<div onClick={this.props.handleTipsResult.bind(this,this.state.result4)}>
							<div className="title-icon advanced-icon">D</div>
							<div className="title advanced-title">标题4</div>
						</div>
						<div>
							<div className="title-icon">E</div>
							<div className="title">标题5</div>
						</div>
					</div>
					<div className="func-container">
						<div>
							<div className="title-icon">F</div>
							<div className="title">标题6</div>
						</div>
						<div>
							<div className="title-icon">G</div>
							<div className="title">标题7</div>
						</div>
						<div onClick={this.props.handleTipsResult.bind(this,this.state.result8)}>
							<div className="title-icon advanced-icon">H</div>
							<div className="title advanced-title">标题8</div>
						</div>
						<div>
							<div className="title-icon">I</div>
							<div className="title">标题9</div>
						</div>
						<div onClick={this.props.handleTipsResult.bind(this,this.state.result10)}>
							<div className="title-icon advanced-icon">J</div>
							<div className="title advanced-title">标题10</div>
						</div>
					</div>
            </div>
        )
    }
}

export default AdvancedEdition;