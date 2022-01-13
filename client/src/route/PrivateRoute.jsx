import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { connect } from 'react-redux';

function PrivateRoute(props) {
    const { auth } = props;
    return auth ? <Route path={props.path} component={props.component} /> : <Navigate to='/' />;
}

const mapStateToProps = (state) => {
    return {
        auth: state.auth.loginState
    };
};

export default connect(mapStateToProps)(PrivateRoute);