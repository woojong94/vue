<template>
    <div v-html="htmlString">

    </div>
</template>

<script>
export default {
    data() {
        return {
            htmlString : "<p style='color:blue'> HTML로 작성됨 </p>"
        };
    }
}
</script>