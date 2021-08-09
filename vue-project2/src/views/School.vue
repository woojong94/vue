<template>
    <h1>School.vue</h1>
    <h2 @click="changeTitle">{{ title }}</h2>
    <SchoolTitle />
    <school-title />
</template>
<script>
import SchoolTitle from "../components/SchoolTitle.vue"
export default {
    components : {SchoolTitle},
    data() {
        return {
            title : "학교 홈페이지",
        }
    },
    created() {

    },
    mounted() {

    },
    unmounted() {

    },
    methods : {
        changeTitle() {
            this.title = "(변경) 학교 홈페이지";
        }
    }
}
</script>