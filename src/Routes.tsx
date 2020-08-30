/**
 * IMPORTS
 */
import React, {useEffect} from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch,
    useHistory,
} from 'react-router-dom';
import Login from 'src/pages/Login';

/**
 * TYPES
 */
import {RouteProps} from 'react-router-dom';

interface IPrivateRouteProps extends RouteProps {
    children: JSX.Element;
}

/**
 * CODE
 */

/**
 * I am a routes component.
 */
function Routes(): JSX.Element {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Login />
                </Route>

                <PrivateRoute path="/app">
                    <h1>Private</h1>
                </PrivateRoute>
            </Switch>
        </Router>
    );
}

/**
 * I am a private route that redirects if not authenticated.
 *
 * @param props: necessary private route props
 */
function PrivateRoute({children, ...props}: IPrivateRouteProps): JSX.Element {
    const history = useHistory();

    // TODO: authenticate behavior
    const isAuthenticated = 1 + 1 === 2;

    useEffect(() => {
        if (isAuthenticated === false) {
            history.push('/');
        }
    }, [isAuthenticated, history]);

    return <Route {...props}>{children}</Route>;
}

/**
 * EXPORTS
 */
export default Routes;
