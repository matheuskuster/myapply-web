/**
 * IMPORTS
 */
import {combineReducers} from 'redux';
import {IAction, IActionsMap, Reducer} from 'src/store/index.d';

import user from 'src/store/modules/user/reducer';

/**
 * CODE
 */
export function createReducer<StateType, ActionsType extends IAction>(
    initialState: StateType,
    actionsMap: IActionsMap<StateType, ActionsType>,
): Reducer<StateType, ActionsType> {
    return (state = initialState, action) => {
        const reducer = actionsMap[action.type];

        if (reducer === undefined) {
            return state;
        }

        return reducer(state, action);
    };
}

/**
 * EXPORTS
 */
export default combineReducers({user});
