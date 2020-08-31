/**
 * IMPORTS
 */
import React from 'react';
import {Provider} from 'react-redux';

import Routes from 'src/Routes';
import GlobalStyles from 'src/styles/GlobalStyles';
import {store} from 'src/store';

/**
 * CODE
 */
function App(): JSX.Element {
    return (
        <Provider store={store}>
            <GlobalStyles />
            <Routes />
        </Provider>
    );
}

/**
 * EXPORTS
 */
export default App;
