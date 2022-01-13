import React from "react";
import { Route, Navigate } from "react-router-dom";
import { connect } from 'react-redux';

function GuestRoute(props) {
  const { auth } = props;
  return auth ? <Navigate to="/home" /> : <Route path={props.path} component={props.component} />;
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth.loginState
  };
};

export default connect(mapStateToProps)(GuestRoute);