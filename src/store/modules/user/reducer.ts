/**
 * IMPORTS
 */
import produce from 'immer';
import {INITIAL_STATE} from 'src/store/modules/user/state';

/**
 * TYPES
 */
import {IUserState} from 'src/store/modules/user/state.d';
import {IActionsMap} from 'src/store/index.d';
import {createReducer} from 'src/store/modules/rootReducer';
import {
    types,
    IUserActionsType,
    IUserLogged,
} from 'src/store/modules/user/actions.d';

/**
 * CODE
 */
const actionsMap: IActionsMap<IUserState, IUserActionsType> = {
    [types.USER_LOGGING]: (state, action) => {
        return produce(state, (user) => {
            user.auth.isAuthenticating = true;
            user.errors.hasAuthenticateError = false;
            return user;
        });
    },

    [types.USER_LOGGED]: (state, action) => {
        const {payload} = action as IUserLogged;

        return produce(state, (user) => {
            user.auth.isAuthenticated = true;
            user.auth.isAuthenticating = true;
            user.errors.hasAuthenticateError = false;

            user.auth.token = payload.token;
            user.data.email = payload.user.email;
            user.data.name = payload.user.name;
            user.data.surname = payload.user.surname;

            user.type.isAdmin = payload.user.type.admin;
            user.type.slug = payload.user.type.slug;

            return user;
        });
    },

    [types.USER_NOT_LOGGED]: (state, action) => {
        return produce(state, (user) => {
            user.auth.isAuthenticating = false;
            user.errors.hasAuthenticateError = true;
            return user;
        });
    },
};

/**
 * EXPORTS
 */
export default createReducer<IUserState, IUserActionsType>(
    INITIAL_STATE,
    actionsMap,
);
