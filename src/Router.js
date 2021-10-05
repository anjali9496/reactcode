
import { BrowserRouter as Router,Switch,Link,Route } from "react-router-dom";
import { AddForm } from "./AddForm";
import ClassComp from "./classComp";
import { FormView } from "./form";
import FunctionComp from "./functionComp";
import HookCheck from "./functionCompHook";
import HomeLink from "./home";
import PostsClass from "./PostsClass";
import PostsFunction from "./PostsFunction";
import { ViewList } from "./ViewDataList";
import { ViewListToDo } from "./ViewTODO";
export default function RouterFunction(){
    return(
     <>

        <Router>
            <Switch>
                <Route exact path="/" component={HomeLink}/>
                <Route path="/FunctionComp" component={FunctionComp}/>
                <Route path="/ClassComp" component={ClassComp}/>
                <Route path="/FormView" component={FormView}/>
                <Route path="/HookCheck" component={HookCheck}/>
                <Route path="/PostsFunction" component={PostsFunction}/>
                <Route path="/PostsClass" component={PostsClass}/>
                <Route path="/ViewList" component={ViewList}/>
                <Route path="/ViewListToDo" component={ViewListToDo}/>
                <Route path="/addForm3" component={AddForm}/>
            </Switch>
</Router>
</>
    )
}  