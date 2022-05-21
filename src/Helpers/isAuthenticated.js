import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

export default function (ComposedComponent) {
  class isAuthenticated extends React.Component {
    componentWillMount() {
      if (!this.props.isLoggedIn) {
        this.props.history.push("/auth/login");
      }
    }
    componentWillUpdate(nextProps) {
      if (!nextProps.isLoggedIn) {
        this.props.history.push("/auth/login");
      }
    }

    render() {
      return <ComposedComponent {...this.props} />;
    }
  }

  isAuthenticated.propTypes = {
    isLoggedIn: PropTypes.bool.isRequired,
  };

  isAuthenticated.contextTypes = {
    router: PropTypes.object.isRequired,
  };

  function mapStateToProps(state) {
    console.log('her i am mapStateToProps',state)
    return {
      isLoggedIn: state.authReducer.isLoggedIn,
    };
  }

  return connect(mapStateToProps)(isAuthenticated);
}
