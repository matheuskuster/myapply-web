/**
 * IMPORTS
 */
import styled, {css} from 'styled-components';
import {Form as Unform} from '@unform/web';

/**
 * TYPES
 */
interface IAnimatedElements {
    logged: boolean;
}

/**
 * CODE
 */
export const Container = styled.div`
    width: 100vw;
    height: 100vh;

    display: flex;
    flex-direction: row-reverse;
`;

export const Logo = styled.div<IAnimatedElements>`
    max-width: 40vw;
    z-index: 10;
    width: 100%;
    height: 100%;
    background: var(--color-orange-light);

    display: flex;
    align-items: center;
    justify-content: center;

    transition: 0.4s 0.4s all ease-in-out;

    ${(props) =>
        props.logged &&
        css`
            transform: translateX(1000px);
        `}

    img {
        width: 30%;
    }

    @media (max-width: 1200px) {
        display: none;
    }
`;

export const Content = styled.main`
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media (max-width: 1200px) {
        background: var(--color-orange-light);
    }

    @media (max-width: 600px) {
        background: none;
    }
`;

export const Form = styled(Unform)<IAnimatedElements>`
    max-width: 600px;
    width: 100%;
    transition: 0.8s all ease-in-out;
    background: var(--color-white);
    padding: 75px;
    border-radius: 20px;
    box-shadow: 0px 0px 5px 1px var(--color-gray);

    ${(props) =>
        props.logged &&
        css`
            transform: translateX(2000px);
        `}

    @media (max-width: 600px) {
        padding: 20px;
        border-radius: 0;
        box-shadow: none;
        background: none;
    }
`;

export const Title = styled.div`
    width: 100%;

    display: flex;
    align-items: flex-start;
    flex-direction: column;

    border-bottom: 1px solid var(--color-gray);
    padding-bottom: 15px;
    margin-bottom: 15px;

    p {
        color: var(--color-orange);
        font-weight: 600;
        font-size: 51px;
        transform: translateX(-2px);
        margin: 0;
    }

    span {
        color: var(--color-black);
        font-size: 18px;
    }

    @media (max-width: 420px) {
        p {
            font-size: 38px;
        }

        span {
            font-size: 14px;
        }
    }
`;

export const InputWrapper = styled.div`
    margin-top: 10px;
`;

export const Footer = styled.div`
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 30px;

    a {
        font-size: 12px;
        color: var(--color-orange-light);
        font-weight: 600;
        letter-spacing: 80%;
        transition: 0.2s all ease-in-out;

        &:hover {
            opacity: 0.8;
        }
    }

    @media (max-width: 430px) {
        flex-direction: column-reverse;

        a {
            margin-top: 20px;
        }
    }
`;

export const SubmitButton = styled.button`
    width: 40%;
    padding: 6px 15px;
    border-radius: var(--border-radius);
    border: none;
    background: var(--color-orange-light);
    color: var(--color-white);
    font-weight: 600;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-shadow: 0px 0px 2px 0.3px var(--color-orange-light);
    transition: 0.3s all ease-in-out;

    &:hover {
        background: var(--color-white);
        color: var(--color-orange-light);
    }

    svg {
        font-size: 22px;
    }

    @media (max-width: 430px) {
        width: 100%;
        justify-content: center;

        svg {
            display: none;
        }
    }
`;
