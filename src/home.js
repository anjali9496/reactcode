
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
export default function HomeLink(){
    return (
        <>
        <h5 >Home Page</h5>
        <Route> 
            <Link to='/'>Home</Link>
            <br/>
            <Link to='/FunctionComp'>Function Component Example</Link>
            <br/>
            <Link to='/ClassComp'>Class Component Example</Link>
            <br/> <Link to='/FormView'>Event Handling Example</Link>
            <br/> <Link to='/HookCheck'>UseState Hook Example(State Hook)</Link>
            <br/> <Link to='/PostsFunction'>useEffect Hook Example(Event Hook)</Link>
            <br/> <Link to='/PostsClass'>LIfeCysle Method Component Did Mount Example</Link>
            <br/> <Link to='/ViewList'>Crud Operation</Link>
            <br/> <Link to='/ViewListToDo'>TO Do Task</Link>
            <br/> 
        </Route>
       
        </>
    )
}