import React, { Component } from 'react';
import logo from './background.jpg';
import './App.css';
import Login from './js/components/Login';
import { Box, Heading, List, Button } from 'grommet';
import BackgroundImage from 'react-background-image';
import { findByTestId } from '@testing-library/react';
import Home from './js/components/Home';
import { connect } from 'react-redux';
import ListTmp from './js/components/ListTmp';
import { addSupplier, toggleIsLoggedIn, updateCurrentUser } from './js/actions';

const mapStateToProps = state => {
  return {
    suppliers: state.suppliers,
    isLoggedIn: state.isLoggedIn,
    currentUser: state.currentUser
  };
};

function mapDispatchToProps(dispatch) {
  return {
    addSupplier: supplier => dispatch(addSupplier(supplier)),
    toggleIsLoggedIn: () => dispatch(toggleIsLoggedIn()),
    updateCurrentUser: (user) => dispatch(updateCurrentUser(user))
  };
}
var sectionStyle = {
  width: "inherit",
  height: "inherit",
  backgroundImage: `url(${logo})`
};
export class App extends Component {
  constructor(props) {
    super(props);
  }
  handlerIsLoggedIn = () => {
    { this.props.toggleIsLoggedIn() };
  }
  handleCurrentUser = (user) => {
    { this.props.updateCurrentUser(user) };
  }
  render() {
    const { isLoggedIn, addSupplier, toggleIsLoggedIn, currentUser } = this.props;
    return (
      <React.Fragment>
      {/* <div>{isLoggedIn?"true":"false"} test</div> */}
        {isLoggedIn
          ?  <section style={sectionStyle} overflow="auto"><Home/> </section>:
          <section style={sectionStyle} overflow="auto">
            <Box align="center" overflow="auto" justify="center" background="black" color="white" direction="row" fill="horizontal" margin={{ "top": "small", "bottom": "xsmall" }}>
              <Heading level="3"> Welcome to sample project
                {/*   {isLoggedIn ? "true" : "false"} 2 {currentUser} 3 {this.props.isLoggedIn} 4              <Button onClick={this.handleChk}>Check</Button> */}
              </Heading></Box>
            <Box align="center"> <Login handlerIsLoggedIn={this.handlerIsLoggedIn.bind(this)}
             handleCurrentUser={this.handleCurrentUser.bind(this)}/> </Box>

          </section>}
      </React.Fragment>
    );
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
