/**
 * TYPES
 */
import {IUserState} from 'src/store/modules/user/state.d';

/**
 * EXPORTS
 */
export interface IAction {
    type: string;
    payload?: unknown;
}

export interface IActionsMap<StateType, ActionsType extends IAction> {
    [key: string]: (state: StateType, action: ActionsType) => StateType;
}

export type Reducer<StateType, ActionsType> = (
    state: StateType,
    action: ActionsType,
) => StateType;

export interface IAppState {
    user: IUserState;
}
