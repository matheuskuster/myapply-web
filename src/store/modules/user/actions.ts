/**
 * TYPES
 */
import * as IUserActions from 'src/store/modules/user/actions.d';
import {types} from 'src/store/modules/user/actions.d';
import {ILoginResponseDTO} from 'src/store/modules/user/api.d';

/**
 * CODE
 */

function userLogging(): IUserActions.IUserLogging {
    return {
        type: types.USER_LOGGING,
    };
}

function userLogged(data: ILoginResponseDTO): IUserActions.IUserLogged {
    return {
        payload: data,
        type: types.USER_LOGGED,
    };
}

function userNotLogged(): IUserActions.IUserNotLogged {
    return {
        type: types.USER_NOT_LOGGED,
    };
}

/**
 * EXPORTS
 */
export {userLogged, userLogging, userNotLogged};
