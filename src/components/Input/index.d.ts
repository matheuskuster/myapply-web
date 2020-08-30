/**
 * CODE
 */
interface IInput {
    name: string;
    label?: string;
    suffix?: JSX.Element;
}

/**
 * EXPORTS
 */
export type IInputProps = IInput & JSX.IntrinsicElements['input'];
