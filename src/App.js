import React from 'react'
import './App.css';
import HomePage from './pages/homePage/HomePage'
import {Switch, Route} from 'react-router-dom'
import ShopPage from './pages/shop/shop'
import Header from './components/header/header'
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up'
import {auth, createUserProfileDocument} from './firebase/firebase.utils'

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      currentUser : null
    }
  }
  
  unsubscribeFrinAuth = null
  componentDidMount() {
      this.unsubscribeFrinAuth = auth.onAuthStateChanged( async user => {
        createUserProfileDocument(user);
      // this.setState({currentUser: user})
      // console.log(user);
    })
  }

  componentWillUnmount() {
    this.unsubscribeFrinAuth()
  }


  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser}/>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route  path='/shop' component={ShopPage} / >
          <Route  path='/signin' component={SignInAndSignUp} / >
        </Switch>
  
      </div>
    );
  }
}

export default App;
