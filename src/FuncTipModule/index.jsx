import React,{ Component } from 'react'
// import store from '../store' 

import './index.less'

class FuncTipModule extends Component {

	componentWillMount() {

    }

	render() {
		return (
			<div className="module-container">
                <div className="module-tip">
                    <div className="tip-container">
                        <div className="tip-title">{this.props.title}</div>
                        <div className="tip-content">{this.props.content}</div>
                    </div>
                    <div className="btn-icon" onClick={this.props.handleTipsResult.bind(this,false)}></div>
                </div>
			</div>
		);
	}
}

export default FuncTipModule;