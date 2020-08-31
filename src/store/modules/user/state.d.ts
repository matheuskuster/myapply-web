enum UserTypes {
    STUDENT = 'student',
    TEACHER = 'teacher',
    TUTOR = 'tutor',
    ADMIN = 'admin',
}

interface IUserAuth {
    isAuthenticating: boolean;
    isAuthenticated: boolean;
    token: string | null;
}

interface IUserErrors {
    hasAuthenticateError: boolean;
}

interface IUserType {
    isAdmin: boolean;
    slug: UserTypes | null;
}

interface IUserData {
    name: string | null;
    surname: string | null;
    fullname: string | null;
    email: string | null;
}

export interface IUserState {
    errors: IUserErrors;
    data: IUserData;
    auth: IUserAuth;
    type: IUserType;
}
