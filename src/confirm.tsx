// 信息框

import * as React from 'react'
import * as ReactDOM from 'react-dom'
import styled from 'styled-components'

const AlertStyle = styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    z-index: 9;
    background: rgba(0, 0, 0, 0.3);
    display: flex;
    justify-content: center;
    align-items: center;
    .content {
        width: 3rem;
        background: #fff;
        border-radius: 0.1rem;
        overflow: hidden;
        padding: 0.25rem;
    }
    .title {
        margin-top: -0.18rem;
        margin-bottom: 0.14rem;
        height: 0.44rem;
        line-height: 0.44rem;
        border-bottom: 0.01rem solid #eaeaea;
        font-size: 0.18rem;
        font-weight: bold;
    }
    .text {
        font-size: 0.15rem;
        text-align: center;
    }
    .btns {
        margin-top: 0.24rem;
        display: flex;
        justify-content: space-around;
    }
    button {
        height: 0.36rem;
        border-radius: 0.36rem;
        outline: none;
        width: 1.1rem;
        background-color: #fff;
        color: #e32525;
        border: 0.01rem solid #e32525;
    }
    button:last-child {
        background-color: #e32525;
        color: #fff;
        border: none;
    }
`

interface confirmOption {
    title?: string
    text?: string
    children?: JSX.Element
    button: string[]
    close?: () => boolean
}

export default (options: confirmOption): Promise<boolean> => new Promise(over => {

    const el = document.createElement('div')
    document.body.appendChild(el)

    const remove = result => {

        // 当点击确定的时候 先验证是否允许关闭
        if (result && options.close !== undefined && !options.close()) {
            return
        }

        over(result)
        ReactDOM.unmountComponentAtNode(el)
        el.parentNode && el.parentNode.removeChild(el)

    }

    ReactDOM.render(
        <AlertStyle>
            <div className='content'>
                <h2 className='title'>{options.title || '提示'}</h2>
                {options.children && options.children}
                {options.text && <p className='text'>{options.text}</p>}
                <div className='btns'>
                    {options.button[1] && <button onClick={() => remove(false)}>{options.button[0]}</button>}
                    <button onClick={() => remove(true)}>{options.button[1] || options.button[0]}</button>
                </div>
            </div>
        </AlertStyle>,
        el
    )
})



