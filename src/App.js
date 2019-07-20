import React,{ Component } from 'react'
// import { observer } from "mobx-react"

// import store from './store'
import FuncTipModule from './FuncTipModule'
import AdvancedEdition from './AdvancedEdition'
import CustomEdition from './CustomEdition'
import './App.css'

// @observer
class App extends Component {

	state={
		advancedChecked:true,
		isCloseBtn:false,
		// customChecked:false,
		advancedName:'高级版',
		advancedTip:'适合独立摄影师',
		customName:'定制版',
		customTip:'适合小型工作室',
		tipsTitle:'',
		tipsContent:''
    };

	componentWillMount() {

	}

	handleAdvancedCheck() {
		this.setState({
			advancedChecked:true,
		})
	}

	handleCustomCheck() {
		this.setState({
			advancedChecked:false,
		})
	}

	handleAdvancedTitle(title) {
		this.setState({
			advancedTipsTitle:title,
		})
	}

	handleTipsResult(result) {
		this.setState({
			isCloseBtn:result.isClose,
			tipsTitle:result.title,
			tipsContent:result.content
		})
	}

	render() {
		return (
				<div className="App">
					<div className="header">
						<div className="return-icon"></div>
						<div className="header-tip">VIP中心</div>
						<div className="mic-icon"></div>
					</div>
					<div className="type-container">
							<div className={this.state.advancedChecked ? "version-checked version advanced" : "version-unchecked version"} onClick={this.handleAdvancedCheck.bind(this)}>
								<div className={this.state.advancedChecked ? "version-name-checked" : "version-name-unchecked"}>{this.state.advancedName}</div>
								<div className={this.state.advancedChecked ? "version-tip-checked" : "version-tip-unchecked"}>{this.state.advancedTip}</div>
							</div>
							<div className={this.state.advancedChecked ? "version-unchecked version" : "version-checked version custom"} onClick={this.handleCustomCheck.bind(this)}>
								<div className={this.state.advancedChecked ? "version-name-unchecked" : "version-name-checked"}>{this.state.advancedChecked}{this.state.customName}</div>
								<div className={this.state.advancedChecked ? "version-tip-unchecked" : "version-tip-checked"}>{this.state.customTip}</div>
							</div>
					</div>
					{
						this.state.advancedChecked ? (
							<AdvancedEdition
							title={this.state.advancedName}
							handleTipsResult={this.handleTipsResult.bind(this)}
							/>
						) : (
							<CustomEdition
							title={this.state.customName}
							handleTipsResult={this.handleTipsResult.bind(this)}
							/>
						)
					}
					{
						this.state.isCloseBtn ? (
							<FuncTipModule
							title={this.state.tipsTitle}
							content={this.state.tipsContent}
							handleTipsResult={this.handleTipsResult.bind(this)}
							/>
						):(null)
					}
				</div>
		);
	}
}

export default App;