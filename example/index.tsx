import * as React from 'react'
import * as ReactDOM from 'react-dom'

import { tips, confirm } from '../src/index'

class Example extends React.Component {
    render() {
        return (
            <div>
                <button onClick={this.tips}>tips</button>
                <button onClick={this.confirm}>confirm</button>
            </div>
        )
    }

    tips = () => {
        tips('hello world')
    }

    confirm = () => {
        confirm({
            text: 'hello world',
            button: ['取消', '确定'],
            children: <span>a</span>,
            close() {
                return false
            }
        }).then(result => {
            console.log(result)
        })
    }
}

ReactDOM.render(<Example />, document.querySelector('#root'))
