<template>
    <table>
        <thead>
            <tr>
                <th>도시명</th>
                <th>시구군</th>
            </tr>
        </thead>
        <tbody>
            <tr v-bind:key="i" v-for="(item, i) in list"> 
                <td>{{ item.city }}</td>
                <td>{{ item.sigugun }}</td>
            </tr>
        </tbody>
    </table>
</template>


<script>
import axios from "axios"
export default  {
    data() {
        return {
            list : [],
        };
    },
    async mounted() {
        const result = await axios.get("http://localhost:3000");    // eslint-disable-line no-unused-vars
        this.list = result.data;
    }
}
</script>
