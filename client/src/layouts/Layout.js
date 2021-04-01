import ContentLayout from "./ContentLayout";
import {Route, BrowserRouter as Router, Switch} from "react-router-dom";
import React from "react";

const Layout=()=>{
    return(
<Router >
    <Switch>
        <Route component={ContentLayout}/>
    </Switch>

</Router>
    );
}
export default Layout;