<template>
    <h1>{{ fullName }}</h1>
    <button type="button" @click="changeFirstName">이름 변경</button>
</template>

<script>
export default {
    data() {
        return {
            firstName : "Woojong",
            lastName : "Park",
            fullName : "",
        };
    },
    watch : {
        fristName() {
            this.fullName = this.firstName + " " + this.lastName;
        },
        lastName() {
            this.fullName = this.firstName + " " + this.lastName;
        }, 
    },
    methods : {
            changeFirstName() {  "Woodong";
            }
        }  

}
</script>