<template>
    <button type="button" @click="showMessage" ref="btn1">클릭!!</button>
    <ChildComponent ref="child_component" />
</template>

<script>
export default {
    mounted() {
        // this.$refs.btn1.click();
        // this.$refs.child_component.$refs.btn.click();
        this.$refs.child_component.showChildMessage();
    },
    methods : {
        showMessage() {
          alert("클릭!");
        }
    }
}
</script>