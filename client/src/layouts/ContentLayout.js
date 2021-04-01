import loadable from "@loadable/component";
import React from "react";
import {Route, Switch} from "react-router-dom";
import Sidebar from "../components/navbar/sidebar/Sidebar";
import Topbar from "../components/navbar/topbar/Topbar";
import {Container} from "reactstrap";
import HomeComponent from "../components/home/HomeComponent";

const ContentRoutes = loadable(() => import('./ContentRoutes'));

const ContentLayout=()=>{
return(
    <div className={"d-flex flex-row"}>

    <Sidebar/>

    <div style={{width:"100%"}}>
        <Topbar/>
        <Container fluid className={"my-2"}>
            <Switch>
                <Route path={"/"} exact children={HomeComponent}/>
                <ContentRoutes/>
            </Switch>
        </Container>

    </div>

</div>


);
}

export default ContentLayout