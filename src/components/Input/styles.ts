/**
 * IMPORTS
 */
import styled, {css} from 'styled-components';

/**
 * TYPES
 */
interface IContent {
    error: boolean;
    focused: boolean;
}

export const Container = styled.div`
    label {
        font-weight: 600;
        margin-bottom: 3px;
        color: var(--color-black);
        font-size: 14px;
    }
`;

export const Content = styled.div<IContent>`
    background: var(--color-white);
    border-radius: var(--border-radius);
    border: 1px solid var(--color-gray);
    height: 38px;
    width: 100%;
    padding: 0 15px 0 15px;
    transition: 0.2s all ease-in-out;

    display: flex;
    align-items: center;
    justify-content: space-between;

    ${(props) =>
        props.focused &&
        css`
            border-color: var(--color-orange-light);
            box-shadow: 0px 0px 2px 0.3px var(--color-orange-light);
        `}

    ${(props) =>
        props.error &&
        css`
            border-color: var(--color-warning);
            box-shadow: 0px 0px 2px 0.3px var(--color-warning);
        `}

    input {
        width: 100%;
        background: none;
        border: none;
        color: var(--color-black);
        font-size: 12px;
    }

    svg {
        font-size: 18px;
        color: var(--color-gray);
        cursor: pointer;
        transition: 0.2s all ease-in-out;
        margin-left: 15px;

        &:hover {
            color: var(--color-orange-light);
        }
    }
`;
