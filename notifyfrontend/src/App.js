import React, { Component } from 'react';
import { Grid, Navbar, Jumbotron, Button } from 'react-bootstrap';
import messageicon from './mail.png';
import NotificationBadge from 'react-notification-badge';
import {Effect} from 'react-notification-badge';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = JSON.parse(localStorage.getItem('ticker')) || {count: 0, color: "red"};
  }
  
  timer() {
          fetch('http://localhost/notifybackend/getDummyMessage.php')
          .then(function(response) {
              return response.json();
          })
          .then(msg => {
              let count = this.state.count + 1;
              if (localStorage.getItem('resetFlag') === 'true') this.setState({ count: 0, color: 'red'});
              else this.setState({ count: count, color: 'red'});
              localStorage.setItem('ticker', JSON.stringify(this.state));
          })
          .catch(function(error) {
              console.log('Fetch Failed: ', error);
          });     
  }
  componentDidMount() {
      setInterval(this.timer.bind(this), 3000);
  }
  reset() {
        this.setState({ count: 0, color: 'red'}); 
        localStorage.setItem('ticker', JSON.stringify(this.state));
        localStorage.setItem('resetFlag', true);
        setTimeout(function(){ 
                localStorage.setItem('resetFlag', false);
        }, 3500);
  }
  error_message() {
    if(this.state.count >= 10)
        alert('Too many messages!');
    else 
        return;
  }
  render() {
    return (
      <div>      
        <Navbar inverse fixedTop>
          <Grid>
            <Navbar.Header>
              <Navbar.Brand>
                <a href="/">Tour Book Notification System</a>
              </Navbar.Brand>
              <Navbar.Toggle />
            </Navbar.Header>
          </Grid>
        </Navbar>
        <Jumbotron style={{textAlign:"center"}}>
          <Grid>
            <h1>
              <Button bsStyle="info" bsSize="lg" target="_blank" onClick={this.reset.bind(this)}>
                <NotificationBadge count={this.state.count} effect={Effect.SCALE} style={{ backgroundColor: this.state.color, fontSize: 12}}/>
                <img src={messageicon} width="42" height="35" alt="Logo" />             
              </Button>
            </h1>
            <p>              
              <Button bsStyle="warning" bsSize="sm" onClick={this.error_message.bind(this)}>
                Test
              </Button>
            </p>
          </Grid>
        </Jumbotron>
      </div>
    );
  }
}

export default App;