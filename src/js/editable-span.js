Vue.component("editable-span",{
    props:["value"],// 其他作用域传来的数据  外来数据
    // 自己的模板
    template:`
            <span class="editableSpan">
              <span v-show="!editing">{{value}}</span>
              <input v-show="editing" type="text" v-bind:value="value" v-on:input="triggerEdit">
              <button v-on:click="editing = !editing">edit</button>
            </span>

        `,
    data(){// 自己的数据
        return {
            editing:false
        }
    },
    methods:{
        // 设定自己的方法
        triggerEdit(e){
            this.$emit("edit",e.target.value)  // 传送 事件edit
        }
    }
});