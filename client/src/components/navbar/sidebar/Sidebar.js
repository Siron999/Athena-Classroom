import {Media, Nav, Navbar, NavbarBrand} from "reactstrap";
import "./sidebar.css"
import {SidebarMenu} from "./SidebarMenu";
import owlLogo from "../../../images/owl.png";
import routes from "../../../routes/navBarRoutes"
import {Link} from "react-router-dom";


const Sidebar =()=>{
    return(
        <div>
        <Navbar className={"sidebarContainer d-flex flex-column justify-content-center align-items-center p-0"} dark >
            <NavbarBrand tag={Link} to={"/"} className={"pt-0 mr-0 d-flex flex-column justify-content-center"} >
                <Media src={owlLogo} className={"owlLogo"}></Media>
                {/*ATHENA*/}
            </NavbarBrand>
            <Nav  vertical className={"mb-auto mt-3 d-flex align-items-center"} >
            {routes.map((route,i)=>
                <SidebarMenu key={i} route={route} />
            )}
            </Nav>
        </Navbar>
        </div>
);
}

export default Sidebar;