import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import './App.css';

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
)

const About = () => (
  <div>
    <h2>About</h2>
  </div>
)

const Topic = ({ match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
)

const Topics = ({ match }) => (
  <div>
    <h2>Topics</h2>
    <ul>
      <li>
        <Link to={`${match.url}/rendering`}>
          Rendering with React
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/components`}>
          Components
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/props-v-state`}>
          Props v. State
        </Link>
      </li>
    </ul>

    <Route path={`${match.path}/:topicId`} component={Topic}/>
    <Route exact path={match.path} render={() => (
      <h3>Please select a topic.</h3>
    )}/>
  </div>
)

class App extends Component {
  state = {
    count: 0,
  }
  changeCount = ({ detail: count }) => {
    console.log('change count')
    this.setState({ count })
  }
  componentDidMount() {
    window.addEventListener('react-app::addCount', this.changeCount)
  }
  componentWillUnmount () {
    window.removeEventListener('react-app::addCount', this.changeCount)
  }
  render() {
    const { count } = this.state
    return (
      <div className="App">
         <Router>
          <div>
            <ul>
              <li><Link to="/react-app">Home</Link></li>
              <li><Link to="/react-app/about">About</Link></li>
              <li><Link to="/react-app/topics">Topics</Link></li>
            </ul>
            <hr/>
            <Route exact path="/react-app" component={Home}/>
            <Route path="/react-app/about" component={About}/>
            <Route path="/react-app/topics" component={Topics}/>
          </div>
        </Router>
        <p>{count}</p>
      </div>
    );
  }
}

export default App;
