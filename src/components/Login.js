import React from "react";
import { Component } from "react";
import { TextField, Button, Container,  Card,  Link } from "@material-ui/core";
import pecos from '../images/pecos.jpeg'

const styles = {
  paperContainer: {
      width: '500px',
      height:'500px'
  },
  mainContainer: {
    display: 'flex',
    margin: '0px',
    background: '#F1EEE5'
  },
  loginForm: {
    margin: '10px'
  },
  button: {
    background: '#076727'
  }

}; 
class Login extends Component {
  state = {
    username: "",
    password: "",
  };

  handleTextChange = (e) => {
    const state = { ...this.state };
    state[e.target.name] = e.target.value;
    this.setState(state);
  };

  login = (e) => {
    e.preventDefault();
    document.cookie = "loggedIn=true;max-age=60*1000*5";

    console.log(document.cookie);
    const payload = { ...this.state };
    console.log("THE USER", payload);
    console.log(this.props);
    this.props.setUser(payload);
    console.log(this.props.user);
    window.location.replace("/dashboard");
  };

  render() {
    return (
      <div>
        
        <Container maxWidth="xl" style = {styles.mainContainer}>
        <Card style={styles.paperContainer}>
          <img src={pecos} alt="pecos"></img>
        </Card>
          <form className="login-form" style = {styles.loginForm}maxwidth="md"onSubmit={this.login}>
            <h3>Welcome to your state park system. If you're a new user please <Link>sign up.</Link>  Otherwise login below.</h3>
            <TextField
              required
              onChange={this.handleTextChange}
              value={this.state.username}
              name="username"
              label="Username"
              type="text"
            />
            <br></br>
            <TextField
              required
              onChange={this.handleTextChange}
              value={this.state.password}
              name="password"
              label="Password"
              type="password"
            />
            <br></br>
            <br></br>
            <Button
              type="submit"
              className="login-button"
              variant="contained"
              color="primary"
              style={styles.button}
            >
              Login
            </Button>
          </form>
        </Container>
        </div>
    );
  }
}

export default Login;
