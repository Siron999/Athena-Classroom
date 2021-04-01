import {Form, FormGroup, Input, Nav, Navbar, NavItem, NavLink} from "reactstrap";
import "./topbar.css";

const Topbar=()=>{
    return(
        <Navbar  light  className={"topbarContainer justify-content-space pt-3"}>
            <Nav pills>
                <NavItem className={" d-flex justify-content-center"}>
                           <Form inline>
                               <div className={"search-container d-flex"}>
                                   <div className={"search-icon-container d-flex  align-items-center mx-2"}>
                                            <i className={"fa fa-search"}></i>
                                   </div>
                               <FormGroup>
                                   <Input type={"text"} placeholder={"Search"} className={"searchbar"}/>
                               </FormGroup>
                               </div>
                           </Form>

                </NavItem>
            </Nav>
            <Nav pills>
                <NavItem href={"/"} className={"mx-1"}>
                    <NavLink className={"nav px-1"}>
                        <i className="fas fa-cog fa-lg"></i>
                    </NavLink>
                </NavItem>
                <NavItem href={"/"} className={"mx-1"}>
                    <NavLink className={"nav px-1"}>
                        <i className="fas fa-user fa-lg"></i>
                    </NavLink>
                </NavItem>
            </Nav>
        </Navbar>
    );
    
}

export default Topbar;