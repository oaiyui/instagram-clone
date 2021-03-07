import React, { useEffect } from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Login from './components/Account/Login'
import Register from './components/Account/Register'
import { RootState } from './redux/store'
import { connect } from 'react-redux'
import { initAuth } from './redux/user-reducer'
import Feed from './components/Feed/Feed'
import Users from './components/Users/Users'


const App: React.FC<Props> = ({initAuth, isInitialized}) => {

  useEffect(() => {
    if (!isInitialized) {
      initAuth()
    }
  }, [initAuth, isInitialized])


  if (!isInitialized) return <img className="preloader" src="http://localhost:8000/media/static/preloading.png" alt=""/>


  return (
    <Router>
      <div className="app">
        <Switch>
          <Route exact path="/" component={Feed} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/users" component={Users} />
        </Switch>
      </div>
    </Router>
  )
}

const mapStateToProps = (state: RootState): MapStateProps => ({
  isInitialized: state.user.isInitialized,
})

// const {} = {...actions}
const mapDispatchToProps: MapDispatchProps = {
  initAuth
}


export default connect
  <MapStateProps, MapDispatchProps, {}, RootState>
  (mapStateToProps, mapDispatchToProps)(App)




// types

type MapStateProps = {
  isInitialized: boolean
}
type MapDispatchProps = {
  initAuth: () => void
}
type Props = MapStateProps & MapDispatchProps