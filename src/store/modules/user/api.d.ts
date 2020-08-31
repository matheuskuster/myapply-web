/**
 * IMPORTS
 */
import {UserTypes} from 'src/store/modules/user/state.d';

/**
 * EXPORTS
 */
export interface ILoginRequestDTO {
    email: string;
    password: string;
}

export interface ILoginResponseDTO {
    token: string;
    user: {
        name: string;
        surname: string;
        email: string;
        type: {
            slug: UserTypes;
            admin: boolean;
        };
    };
}
