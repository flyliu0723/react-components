/// <reference types="react" />
interface confirmOption {
    title?: string;
    text?: string;
    children?: JSX.Element;
    button: string[];
    close?: () => boolean;
}
declare const _default: (options: confirmOption) => Promise<boolean>;
export default _default;
