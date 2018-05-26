<template>

<div class="element_el">

</div>
</template>
<script>
    export default {
        data() {
            return {
                activeIndex: '1',
                activeIndex2: '1'
            };
        },
        methods: {
            change(index1, index2) {
                this.$notify({
                    title: 'notice',
                    message: index1 + " " + index2
                })
            }
        }
    }

</script>
<style scope>
    div.element_el {
        width: 100%;
        height: 60px;
    }

</style>
