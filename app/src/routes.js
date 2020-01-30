import React, { Fragment } from 'react'
import { Route, Switch } from 'react-router-dom'
import { createGlobalStyle } from 'styled-components'
import { connect } from 'react-redux'

import UseStatePage from './screens/hooks/UseState'
import UseEffectPage from './screens/hooks/UseEffect'
import UseCallbackPage from './screens/hooks/UseCallback'
import MemoPage from './screens/hooks/Memo'

import Navbar from './components/navbar/Navbar'
import NavMenu from './components/navmenu/NavMenu'

import NotFoundPage from './screens/errors/NotFound'

import WelcomePage from './screens/welcome/Welcome'
import Tasks from './screens/tasks/Tasks'
import CheckedTasks from './screens/tasks/CheckedTasks'

const GlobalStyle = createGlobalStyle`
	body {
		background-color: ${props => (props.theme && props.theme.backgroundColor)} !important;
		font-family: 'Neris', 'Neris SemiBold', sans-serif !important;
	}

	h1, h2, h3, h4, h5, h6{
		color: ${props => (props.theme && props.theme.textPrimaryColor)} !important;
		font-weight: bold !important
	}

	td, thead th {
		color: ${props => (props.theme && props.theme.textPrimaryColor)} !important;
	}

	ul li {
		background-color: ${props => (props.theme && props.theme.primaryColor)} !important;
		color: ${props => (props.theme && props.theme.textPrimaryColor)} !important;
	}

	svg[class*="MuiSvgIcon-root"] {
		color: ${props => (props.theme && props.theme.iconPrimaryColor)} !important;
	}
	
	table td {
		font-weight: ${props => (props.theme && props.theme.tableFontWeight)} !important;
	}
`

const Main = props => {

	return (
		<Fragment>
			<GlobalStyle theme={props.theme} />
			{/* ////////////////////////////////////////////////////////// */}
			<Navbar />
			<NavMenu />
			<div className="container h-90">
				<Switch>
					<Route exact path='/' component={WelcomePage} />
					<Route path='/tasks' component={Tasks} />
					<Route path='/checkedtasks' component={CheckedTasks} />
					<Route path='/usestate' component={UseStatePage} />
					<Route path='/useeffect' component={UseEffectPage} />
					<Route path='/usecallback' component={UseCallbackPage} />
					<Route path='/memo' component={MemoPage} />
					<Route path='*' component={NotFoundPage} />
				</Switch>
			</div>
		</Fragment>
	);

}

const mapStateToProps = (state, ownProps) => {
	return {
		theme: state.ThemeReducer.theme,
	};
}

export default connect(mapStateToProps)(Main);