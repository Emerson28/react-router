import React from 'react';
import { Route, Link } from 'react-router-dom';

import './App.css';

const HomePage = props => {
  console.log(props);
  return (
    <div>
        {/*<Link to="/topics">Topics</Link><br />   The difference of Link in router to anchor tag href is that
            Link in router is a single page application meaning it didnt refresh the page when going to other link while
            anchor tag href is an html tag that will refresh when going to other link.
        */}
        <button onClick = { () => props.history.push('/topics') }>Topics</button>
      <h1>HOME PAGE</h1>
    </div>
  );
};

const TopicsList = props => {
    console.log(props);
  return (
    <div>
        <Link to={`${props.match.url}/13`}> Top Topic 13</Link>
        <Link to={`${props.match.url}/17`}> Top Topic 17</Link>
        <Link to={`${props.match.url}/21`}> Top Topic 21</Link>
      <h1>TOPIC LIST PAGE</h1>
    </div>
  );
};

const TopicDetail = props => {
    console.log(props);
  return (
    <div>
      <h1>TOPIC DETAIL PAGE: { props.match.params.topicId } </h1>
    </div>
  );
};

function App() {
  return (
    <div>
      <Route path='/' component={HomePage} />
      <Route exact path='/topics' component={TopicsList} />
      <Route path='/topics/:topicId' component={TopicDetail} />
    </div>
  );
}

export default App;
