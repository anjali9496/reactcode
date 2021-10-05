
import React from 'react';
import FunctionComp from './functionComp';
import HookCheck from './functionCompHook';
import PostsClass from './PostsClass';
import PostsFunction from './PostsFunction';
import { BrowserRouter as Router, Link, Route , Switch } from "react-router-dom";
function App() {
  return (
<div className="alignment">

<Router>
<Link to="user"> User </Link>

  <Switch>
    <Route exact path='/' component={FunctionComp} />
    <Route path='/user' component={PostsFunction} />
  </Switch>
</Router>

</div>

  )
}

export default App;
