// 复选框

import * as React from 'react'
import styled from 'styled-components'

const Content = styled.div`
    width: 0.16rem;
    height: 0.16rem;
    border-radius: 50%;
    border: 0.01rem solid #969696;
    display: inline-flex;
    padding: 0.02rem;
    &.checked {
        background-color: #ec232f;
        border: none;
    }
    svg {
        width: 100%;
        height: 100%;
        stroke-width: 10;
        stroke: #fff;
        fill: none;
    }
`


interface Props {
    className?: string
    checked: boolean
    onChange: (checked: boolean) => void
}

export default class Entry extends React.Component<Props> {
    render() {
        return <Content
            className={(this.props.className || '') + (this.props.checked ? ' checked' : '')}
            onClick={() => this.props.onChange(!this.props.checked)}
        >
            {
                this.props.checked && <svg viewBox='0 0 100 100'>
                    <path d='M 20 50 l 20 20 l 40 -40' />
                </svg>
            }
        </Content>
    }
}
