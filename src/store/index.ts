/**
 * IMPORTS
 */
import {createStore, AnyAction} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';

import rootReducer from 'src/store/modules/rootReducer';

/**
 * CODE
 */
const store = createStore(rootReducer, composeWithDevTools());

function dispatch(action: AnyAction): void {
    store.dispatch(action);
}

/**
 * EXPORTS
 */
export {store, dispatch};
