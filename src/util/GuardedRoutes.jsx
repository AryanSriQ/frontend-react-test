import { Route, Redirect } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const GuardedRoute = ({ component: Component, auth, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      auth === true ? <Component {...props} /> : <Redirect to="/" />
    }
  />
);

export default GuardedRoute;
