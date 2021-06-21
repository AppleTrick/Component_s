<<<<<<< HEAD
import React from 'react';
import { Route , Redirect } from 'react-router-dom';

const AuthRoute = ({authenticated, component: Component, render, ...rest})=> {
    return(
        <Route
            {...rest}
            render = {(props) => 
                authenticated ? 
                ( render ? 
                    (render(props)) : (<Component {...props} /> ))
                     : 
            (<Redirect to ={ { pathname : "/login", state : { from : props.location } } }/>)
        }
        />
    )
=======
import React from "react";
import { Route, Redirect } from "react-router-dom";

function AuthRoute({ authenticated, component: Component, render, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) =>
        authenticated ? (
          render ? (
            render(props)
          ) : (
            <Component {...props} />
          )
        ) : (
          <Redirect
            to={{ pathname: "/login", state: { from: props.location } }}
          />
        )
      }
    />
  );
>>>>>>> c3ae9b47d041b4c48472195590f05e49c351507e
}

export default AuthRoute;