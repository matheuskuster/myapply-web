/**
 * TYPES
 */
import {IUserState} from 'src/store/modules/user/state.d';

/**
 * CONSTANTS AND DEFINITIONS
 */
const INITIAL_STATE: IUserState = {
    auth: {
        isAuthenticated: false,
        isAuthenticating: false,
        token: null,
    },
    data: {
        email: null,
        fullname: null,
        name: null,
        surname: null,
    },
    errors: {
        hasAuthenticateError: false,
    },
    type: {
        isAdmin: false,
        slug: null,
    },
};

/**
 * EXPORTS
 */
export {INITIAL_STATE};
