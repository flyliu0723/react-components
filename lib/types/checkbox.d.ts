import * as React from 'react';
interface Props {
    className?: string;
    checked: boolean;
    onChange: (checked: boolean) => void;
}
export default class Entry extends React.Component<Props> {
    render(): JSX.Element;
}
export {};
