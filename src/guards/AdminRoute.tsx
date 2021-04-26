import React from "react";
import { Route, Redirect } from "react-router-dom";
import { isAdmin } from "./service";

const AdminRoute: React.FC<{
    component: React.FC;
    path: string;
    exact?: boolean;
    already?: boolean;
}> = (props) => {

    return isAdmin() ?
        <Route path={props.path} exact={props.exact} component={props.component} /> :
        <Redirect to="/home" />;
};
export default AdminRoute;