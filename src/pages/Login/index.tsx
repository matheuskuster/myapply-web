/**
 * IMPORTS
 */
import React, {useEffect, useState, useRef} from 'react';
import {useHistory, Link} from 'react-router-dom';
import {AiFillEye, AiFillEyeInvisible} from 'react-icons/ai';
import {BsArrowRight} from 'react-icons/bs';
import * as Yup from 'yup';

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

/**
 * CODE
 */

/**
 * I am the login page.
 */
function Login(): JSX.Element {
    const history = useHistory();

    const formRef = useRef<FormHandles>(null);
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const [logged, setLogged] = useState<boolean>(false);

    /**
     * I handle the form submit event.
     *
     * @param data: user email and password
     */
    async function handleSubmit(data: IFormData) {
        formRef.current?.setErrors({});

        console.log(data);

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

            // TODO: Authenticate within server
            setLogged(true);
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
        if (logged) setTimeout(() => history.push('/app'), 800);
    }, [logged, history]);

    return (
        <S.Container>
            <S.Logo logged={logged}>
                <img src={LogoApply} alt="Logo Apply Black" />
            </S.Logo>

            <S.Content>
                <S.Form onSubmit={handleSubmit} ref={formRef} logged={logged}>
                    <S.Title>
                        <p>Bem-vindo!</p>
                        <span>
                            Realize seu login para acessar o <b>MyApply</b>
                        </span>
                    </S.Title>

                    <S.InputWrapper>
                        <Input
                            label="E-mail"
                            name="email"
                            placeholder="Digite seu e-mail"
                        />
                    </S.InputWrapper>

                    <S.InputWrapper>
                        <Input
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

                        <S.SubmitButton type="submit">
                            ENTRAR
                            <BsArrowRight />
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
