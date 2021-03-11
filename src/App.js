import React from 'react'
import './App.css';
import HomePage from './pages/homePage/HomePage'
import {Switch, Route, Redirect} from 'react-router-dom'
import ShopPage from './pages/shop/shop'
import Header from './components/header/header'
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up'
import {auth, createUserProfileDocument} from './firebase/firebase.utils'
import {connect} from 'react-redux'
import  {setCurrentUser} from './redux/user/user.actions'

class App extends React.Component {
  
  unsubscribeFrinAuth = null
  componentDidMount() {

    const { setCurrentUser } = this.props
      this.unsubscribeFrinAuth = auth.onAuthStateChanged( async userAuth => {
        if (userAuth){
          const userRef = await createUserProfileDocument(userAuth);

          userRef.onSnapshot(snapShot => {
            setCurrentUser({
              id:snapShot.id,
              ...snapShot.data()
            }, () => console.log(this.state))
          })
          console.log(this.state);
        };
        setCurrentUser(userAuth)
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
        <Header/>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route  path='/shop' component={ShopPage} / >
          <Route exact  path='/signin' render ={() => this.props.currentUser ? (<Redirect to='/'/>) : (<SignInAndSignUp />)} / >
        </Switch>
  
      </div>
    );
  }
}

const mapStateToProps = ({user}) => ({
  currentUser: user.currentUser
}) 

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps,mapDispatchToProps)(App);
