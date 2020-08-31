/**
 * IMPORTS
 */
import {Tooltip} from 'antd';
import React, {useEffect, useRef, useState, memo} from 'react';
import {useField} from '@unform/core';

/**
 * STYLES
 */
import * as S from 'src/components/Input/styles';

/**
 * TYPES
 */
import {IInputProps} from 'src/components/Input/index.d';

/**
 * CODE
 */
function Input({
    disabled,
    name,
    label,
    suffix,
    ...props
}: IInputProps): JSX.Element {
    const inputRef = useRef(null);
    const {fieldName, defaultValue, registerField, error} = useField(name);
    const [shouldShowError, setShouldShowError] = useState(true);
    const [focused, setFocused] = useState<boolean>(false);

    useEffect(() => {
        registerField({
            name: fieldName,
            path: 'value',
            ref: inputRef.current,
        });
    }, [fieldName, registerField]);

    useEffect(() => {
        setShouldShowError(false);
    }, [focused]);

    useEffect(() => {
        setShouldShowError(true);
    }, [error]);

    return (
        <S.Container>
            {!!label && <label htmlFor={name}>{label}</label>}

            <S.Content
                disabled={disabled}
                error={shouldShowError && !!error}
                focused={focused}
            >
                <Tooltip title={shouldShowError ? error : ''}>
                    <input
                        defaultValue={defaultValue}
                        disabled={disabled}
                        onBlur={() => setFocused(false)}
                        onFocus={() => setFocused(true)}
                        ref={inputRef}
                        {...props}
                    />
                </Tooltip>
                {suffix}
            </S.Content>
        </S.Container>
    );
}

/**
 * EXPORTS
 */
export default memo(Input);
