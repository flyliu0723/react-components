// 提示框

import * as React from 'react'
import * as ReactDOM from 'react-dom'
import styled from 'styled-components'

const Content = styled.div`
    position: fixed;
    width: 100%;
    bottom: 1rem;
    z-index: 9;
    display: flex;
    justify-content: center;
    p{
        background-color: rgba(0, 0, 0, 0.7);
        color: #fff;
        padding: 0.06rem 0.2rem;
        box-shadow: 0 0 0.1rem rgba(0, 0, 0, 0.3);
        font-size: 0.14rem;
        font-weight: 300;
        border-radius: 0.02rem;
        max-width: 64%;
        animation: tips_ .2s linear;
    }
    @keyframes tips_ {
        from{
            opacity: 0;
        }
        to{
            opacity: 1;
        }
    }
`

export default (text: string, time?: number) => {
    const el = document.createElement('div')
    document.body.appendChild(el)

    const Element = () => {
        return <Content>
            <p>{text}</p>
        </Content>
    }

    ReactDOM.render(<Element />, el)

    setTimeout(() => {
        el && ReactDOM.unmountComponentAtNode(el)
        el.parentNode && el.parentNode.removeChild(el)
    }, time || 3000)
}



