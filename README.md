
# React-UI

> React 移动端 UI 组件

## 依赖关系

组件样式使用 `styled-components` 


## 组件

* [提示框](#tips)
* [询问框](#confirm)
* [选择框](#checkbox)
* [轮播](#slide)

### tips 

在底部展示文字的小提示框

```typescript
import { tips } from 'react-ui'

tips('一段提示文字', 3000)
```

### confirm

* 标题 默认： "提示"
* 文字和子节点只能同时存在一个
* 按钮可以只写一个 当一个的时候 结果 为 `true`
* `close` 方法可以写一些验证 只有返回 `true` 的时候点击确定才可以关闭弹窗

```typescript
import { confirm } from 'react-ui'

confirm({
    title: '标题'
    text: '文字',
    children: <span>hello world</span>,
    button: ['取消' ,'确定'],
    close() {
        return false
    }
}).then((result) => {
    console.log(result)
})
```

### Checkbox

```typescript
import { Checkbox } from 'react-ui'

<Checkbox
    checked
    onChange={(checked) => {
        console.log(checked)
    }}
/>
```

### Slide


```typescript
import { Slide } from 'react-ui'

const imgs = [
    '//timgs.tongtongmall.com/1.jpg',
    '//timgs.tongtongmall.com/2.jpg',
    '//timgs.tongtongmall.com/3.jpg'
]

const render = () => {
    return <Slide
        data={imgs}
        time={3000}
        spot={true}
        speed={300}
        type={'ease'}
        onClick={(i) => {
            console.log('click', i)
        }}
        onChange={i => {
            console.log('change', i)
        }}
        onPrev={i => {
            console.log('prev', i)
        }}
        onNext={i => {
            console.log('next', i)
        }}
    />
}
```

> 除 `data` 参数外 其余都是选填

| Command        | type                      | Explain                                   |
| -------------  | -------------             | -------------                             |
| `data`         | `string[] `               | 图片列表                                   |
| `time`         | `number \ false`          | 多久滚动一次 `false` 为关闭自动滚动           |
| `spot`         | `boolean`                 | 是否显示轮播的 `点`                         |
| `speed`        | `number`                  | 过渡速度                                   |
| `type`         | `ease \ linear \ ease-in \ ease-out \ ease-in-out` | 过渡方式           |
| `onClick`      | `(index: number) => void` | 点击当前选中轮播的回调                        |
| `onChange`     | `(index: number) => void` | 轮播变动触发的回调                           |
| `onPrev`       | `(index: number) => void` | 轮播向前变动触发的回调                        |
| `onNext`       | `(index: number) => void` | 轮播向后变动触发的回调                        |


---