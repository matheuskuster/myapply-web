/**
 * IMPORTS
 */
import {dispatch} from 'src/store';
import {api} from 'src/services/api';
import * as userActions from 'src/store/modules/user/actions';

/**
 * TYPES
 */
import {ILoginRequestDTO} from 'src/store/modules/user/api.d';

/**
 * CODE
 */
async function login(data: ILoginRequestDTO): Promise<void> {
    dispatch(userActions.userLogging());

    try {
        const result = await api.post('/sessions', data);

        dispatch(userActions.userLogged(result.data));
    } catch (error) {
        dispatch(userActions.userNotLogged());
    }
}

/**
 * EXPORTS
 */
export {login};
