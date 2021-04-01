import { NavItem, NavLink} from "reactstrap";
import {Link} from "react-router-dom";



export const SidebarMenu =({route})=>{
    return(

            <NavItem>
                <NavLink tag={Link} className={"nav py-0 d-flex align-items-center justify-content-center"} to={route.to}>
                    <div className={"d-flex flex-column align-items-center"}>
                    <i className={`${route.icon} navIcon`}></i>
                    <p>{route.name}</p>
                    </div>
                </NavLink>
            </NavItem>

    );
}