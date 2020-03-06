import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from 'react-router-dom';

export default function App() {
  return (
    <Router>
      <div>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <nav>
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/about'>About</Link></li>
            <li><Link to='/users'>Users</Link></li>
          </ul>
        </nav>
        <Switch>
          <Route path='/about'><About /></Route>
          <Route path='/users'><Users /></Route>
          <Route path='/params/:param'><Params /></Route>
          <Route path='/'><Home /></Route>
        </Switch>
      </div>
    </Router>
  )
}

const Headline = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
    </div>
  )
}




function Home() {
  return (
    <Headline title='Customer Info' />

  )
}
function About() {
  return <Headline title='About' />
}
function Users() {
  return <Headline title='Users' />
}
function Params() {
  let { param } = useParams()
  return <Headline title={param} />
}
