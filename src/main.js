import { createApp, createRenderer } from 'vue'
import App from './App.vue'
import CanvasApp from './CanvasApp.vue'
import './index.css'

const app = createApp(App).mount('#app')
















































// 绘制方方法
const draw = (el, noClear)=>{
    if(!noClear){ // 清除画布
        ctx.clearRect(0, 0, canvas.width, canvas.height)
    }

    debugger
    if(el.tag === 'piechart'){ // div
        let {data, r, x, y} = el;
        let total = data.reduce((memo, current) => memo + current.count,)
        let start = 0, end = 0;
        data.forEach(item => {
            end += item.count / total * 360
            drawPieChart(start, end, item.color, x, y, r)
            drawPieChartText(item.name, (start + end)/2, x, y, r)
            start = end
        });
    }

    el.childs && el.childs.forEach( child => draw(child, true))

    const d2a = n => {
        return n * Math.PI / 180
    }

    const drawPieChart = (start, end, color, cx, cy, r)=>{
        let x = cx + Math.cos(d2a(start)) * r
        let y = cx + Math.sin(d2a(start)) * r
        ctx.beginPath()
        ctx.moveTo(cx, cy)
        ctx.lineTo(x, y)
        ctx.arc(cx, cy, r, d2a(start), d2a(end), false)
        ctx.fillStyle = color
        ctx.fill()
        ctx.storke()
        ctx.closePath()
    }

    const drawPieChartText = (val, position, cx, cy, r)=>{
        ctx.beginPath()
        let x = cx + Math.cos(d2a(position)) * r/1.25 -20
        let y = cx + Math.sin(d2a(position)) * r/1.25
        ctx.fillStyle = '#000'
        ctx.font = '20px 微软雅黑'
        ctx.fillText(val, x, y)
        ctx.closePath()
    }
}


// 自定义渲染器
const ondeOps = {
    createElement(tag, isSVG, is){ // 处理元素的创建逻辑
        return {tag}
    },
    insert(child, parent, ancher){
        // 处理元素的插入逻辑
        // 如果是子元素， 不是真实dom, 此时只需将数据保存到前面虚拟对象上即可
        child.parent = parent
        if(!parent.childs){
            parent.childs = [child]
        }else{
            parent.childs.push(child)
        }

        // 如果是真实dom 在这里是canvas 需要绘制
        if(parent.nodeType == 1){
            draw(child)
            // 事件处理
            if(child.onClick){
                CanvasGradient.addEventListener('click', ()=>{
                    child.onClick()
                    setTimeout(()=>{
                        draw(child)
                    },0)
                })
            }
        }

        return 
    },
    remove: child => {},
    createText: text => {},
    createComment: text => {},
    setText: (node, text) => {},
    setElementText: (el, text) => {},
    parentNode: node => {},
    nextSibling: node => {},
    querySelector: selector => {},
    setScopeId(el, id) {},
    cloneNode(el) {},
    insertStaticContent(content, parent, anchor, isSVG){},
    patchProp(el, key, prevValue, nextValue){ // 属性更新
        el[key] = nextValue
    }

}

const renderer = createRenderer(ondeOps)

let ctx, canvas;
// 扩展mount: 首先创建一个画布元素
function createCanvasApp(App){
    const app = renderer.createApp(App)
    const mount = app.mount
    app.mount = function(selector){
        // 创建并插入画布
        canvas = document.createElement('canvas')
        ctx = canvas.getContext('2d')

        // 设置画布基础属性
        canvas.width = 600
        canvas.height = 600
        document.querySelector(selector).appendChild(canvas)

        // 执行默认mount行为
        mount(canvas)
    }
    return app
}
// createCanvasApp(CanvasApp).mount("#demo")  //未实现