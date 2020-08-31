/**
 * TYPES
 */
import {IAction} from 'src/store/index.d';
import {ILoginResponseDTO} from 'src/store/modules/user/api.d';

/**
 * EXPORTS
 */

/**
 * Actions types.
 */
export enum types {
    USER_LOGGING = '@user/LOGGING',
    USER_LOGGED = '@user/LOGGED',
    USER_NOT_LOGGED = '@user/NOT_LOGGED',
}

export interface IUserLogging extends IAction {
    type: types.USER_LOGGING;
}

export interface IUserLogged extends IAction {
    type: types.USER_LOGGED;
    payload: ILoginResponseDTO;
}

export interface IUserNotLogged extends IAction {
    type: types.USER_NOT_LOGGED;
}

export type IUserActionsType = IUserLogging | IUserLogged | IUserNotLogged;
