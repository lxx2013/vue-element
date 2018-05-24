<template>
  <div id="app">
    <element_el></element_el>

   <intern></intern>
    </div>
</template>

<script>
    import element_el from './components/element_el.vue'
    import intern from './components/intern.vue'
    export default {
        name: 'app',
        components: {
            element_el,
            intern
        },
        methods: {

        }
    }

</script>

<style>
    * {
        margin: 0;
        padding: 0;
    }

    #app {
        font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
        margin-top: 0px;
    }

</style>
