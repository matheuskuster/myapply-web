/**
 * IMPORTS
 */
import {notification} from 'antd';
import React, {useEffect, useState, useRef} from 'react';
import {useSelector} from 'react-redux';
import {useHistory, Link} from 'react-router-dom';
import {AiFillEye, AiFillEyeInvisible} from 'react-icons/ai';
import {BsArrowRight} from 'react-icons/bs';
import * as Yup from 'yup';

import * as userAPI from 'src/store/modules/user/api';

import Input from 'src/components/Input';
import LogoApply from 'src/assets/logo_apply_black.png';

/**
 * STYLES
 */
import * as S from 'src/pages/Login/styles';

/**
 * TYPES
 */
import {FormHandles} from '@unform/core';
import {IFormData} from 'src/pages/Login/index.d';
import {IAppState} from 'src/store/index.d';

/**
 * CODE
 */

/**
 * I am the login page.
 */
function Login(): JSX.Element {
    const isAuthenticating = useSelector<IAppState, boolean>(
        (state) => state.user.auth.isAuthenticating,
    );
    const isAuthenticated = useSelector<IAppState, boolean>(
        (state) => state.user.auth.isAuthenticated,
    );
    const hasAuthenticateError = useSelector<IAppState, boolean>(
        (state) => state.user.errors.hasAuthenticateError,
    );

    const history = useHistory();

    const formRef = useRef<FormHandles>(null);
    const [showPassword, setShowPassword] = useState<boolean>(false);

    /**
     * I handle the form submit event.
     *
     * @param data: user email and password
     */
    async function handleSubmit(data: IFormData) {
        formRef.current?.setErrors({});

        try {
            const schema = Yup.object().shape({
                email: Yup.string()
                    .email('E-mail inválido.')
                    .required('Preencha este campo.'),
                password: Yup.string().required('Preencha este campo.'),
            });

            await schema.validate(data, {
                abortEarly: false,
            });

            userAPI.login({email: data.email, password: data.password});
        } catch (err) {
            const validationErrors: Record<string, string> = {};

            if (err instanceof Yup.ValidationError) {
                err.inner.forEach((error) => {
                    validationErrors[error.path] = error.message;
                });

                formRef.current?.setErrors(validationErrors);
            }
        }
    }

    /**
     * I change the type of the password input on eye icon click.
     */
    function handleEyeClick() {
        setShowPassword((value: boolean) => !value);
        formRef.current?.getFieldRef('password').focus();
    }

    /**
     * I push the user to /app.
     */
    useEffect(() => {
        if (isAuthenticated) setTimeout(() => history.push('/app'), 800);
    }, [isAuthenticated, history]);

    /**
     * I dispatch an error notification.
     */
    useEffect(() => {
        if (hasAuthenticateError && !isAuthenticating) {
            notification.error({
                description: 'Usuário ou senha incorretos.',
                message: 'Erro',
                placement: 'bottomLeft',
            });
        }
    }, [hasAuthenticateError, isAuthenticating]);

    return (
        <S.Container>
            <S.Logo logged={isAuthenticated}>
                <img src={LogoApply} alt="Logo Apply Black" />
            </S.Logo>

            <S.Content>
                <S.Form
                    onSubmit={handleSubmit}
                    ref={formRef}
                    logged={isAuthenticated}
                >
                    <S.Title>
                        <p>Bem-vindo!</p>
                        <span>
                            Realize seu login para acessar o <b>MyApply</b>
                        </span>
                    </S.Title>

                    <S.InputWrapper>
                        <Input
                            disabled={isAuthenticating || isAuthenticated}
                            label="E-mail"
                            name="email"
                            placeholder="Digite seu e-mail"
                        />
                    </S.InputWrapper>

                    <S.InputWrapper>
                        <Input
                            disabled={isAuthenticating || isAuthenticated}
                            label="Senha"
                            name="password"
                            type={showPassword ? 'text' : 'password'}
                            placeholder="Digite sua senha secreta"
                            suffix={
                                showPassword ? (
                                    <AiFillEyeInvisible
                                        onClick={handleEyeClick}
                                    />
                                ) : (
                                    <AiFillEye onClick={handleEyeClick} />
                                )
                            }
                        />
                    </S.InputWrapper>

                    <S.Footer>
                        <Link to="#">Esqueci minha senha</Link>

                        <S.SubmitButton
                            type="submit"
                            disabled={isAuthenticating || isAuthenticated}
                        >
                            ENTRAR
                            {isAuthenticating || isAuthenticated ? (
                                <S.Loading />
                            ) : (
                                <BsArrowRight />
                            )}
                        </S.SubmitButton>
                    </S.Footer>
                </S.Form>
            </S.Content>
        </S.Container>
    );
}

/**
 * EXPORTS
 */
export default Login;
