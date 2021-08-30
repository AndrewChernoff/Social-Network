import React from "react";
import { Redirect } from "react-router";
import {connect} from 'react-redux';

export const WithAuthRedirectComponent = (Component) => {
    let mapStateToPropsForAuthRedirect = (state) => {
        return {
            isAuth: state.userAuth.isAuth
        }
    }

   class RedirectedComponent extends React.Component {
      render() {
        if(!this.props.isAuth) {return <Redirect to='/login'/>}
          return  <Component {...this.props}/>
      }
   }

let ConnectedAuthRedirectComponent = connect(mapStateToPropsForAuthRedirect) (RedirectedComponent);

return ConnectedAuthRedirectComponent

}