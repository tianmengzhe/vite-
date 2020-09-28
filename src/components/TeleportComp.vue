<template>
    Teleport 传送门组件提供一种简洁的方式可以指定它里面的内容的父元素
    

    示例：在body下面添加窗口

    <button @click="medalOpen = true">弹窗</button>

    <!-- to 选择父元素 -->
    <teleport to="body">
        <div v-if="medalOpen" class="modal">
            <div>
                这是一模态窗口！
                父元素是 body

                <div>
                    <button  @click="medalOpen = false" >close</button>
                </div>
            </div>
        </div>
    </teleport>
</template>

<script>
export default {
    data(){
        return {
            medalOpen: false
        }
    }
}
</script>

<style scoped>
.modal{
     position: absolute;
   top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: rgba(0, 0, 0, .5);
}
.modal>div{
    width: 400px;
    height: 200px;
    padding: 15px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border: 1px solid #156390;
    border-radius: 5px;
    background-color: rgba(115, 255, 255, 0.4);
}
</style>