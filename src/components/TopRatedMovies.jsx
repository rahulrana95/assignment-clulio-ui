import React, {Component} from 'react';
import {connect} from 'react-redux';

class TopRatedMovies extends React.Component {
    render(){return (
        <div>
           top rated movies

        </div>
    )}
}

const mapStateToProps = state => ({
   // loginReducer: state.loginReducer,
  });
  
  const mapDisptachToProps = dispatch => ({
    //loginFn: email => dispatch(loginAction.bind(this, email)),
  });
  
//   const loginAction = (email, dispatch) => {
//     loginService.getLoginData(email).then(response => {
//       dispatch({
//         type: 'LOGIN',
//         payload: {...response, email: email},
//       });
//     });
//   };
  
  export default connect(
    mapStateToProps,
    mapDisptachToProps,
  )(TopRatedMovies);