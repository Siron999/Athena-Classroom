import React from "react";
import {Route,Switch} from "react-router-dom";
import ProfileComponent from "../components/profile/ProfileComponent";
import StudentsComponent from "../components/students/StudentsComponent";
import NewStudentComponent from "../components/students/NewStudentComponent";

const ProfileRoutes=({match:{url}})=>(
    <Switch>
        <Route path={`${url}/`} exact component={ProfileComponent}/>
    </Switch>
)
const StudentRoutes=({match:{url}})=>(
    <Switch>
        <Route path={`${url}/`} exact component={StudentsComponent}/>
        <Route path={`${url}/new`} exact component={NewStudentComponent}/>

    </Switch>
)


const DashboardRoutes = () => (
    <Switch>
        {/*Profile*/}
        <Route path="/profile" component={ProfileRoutes} />
        <Route path="/students" component={StudentRoutes} />


    </Switch>
);

export default DashboardRoutes;