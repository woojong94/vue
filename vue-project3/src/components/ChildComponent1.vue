<template>
    <button type="button" @click="showChildMessage" ref="btn">자식 클릭</button>
    
</template>

<script>
import ChildComponent from "../components/ChildComponent1.vue";
export default {
    methods : {
        components : {ChildComponent},
        showChildMessage() {
            alert("자식 컴포넌트에서 메세지 출력!");
        }
    }
}
</script>