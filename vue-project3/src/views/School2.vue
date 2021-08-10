<template>
   <!-- <input type="checkbox" name="hobby" v-model="checked" value="등산">등산 -->
   <input type="checkbox" name="hobby" v-model="checked" v-bind:value="check1Value">{{ check1Value }}
   <input type="checkbox" name="hobby" v-model="checked" :value="check2Value">{{ check2Value }}
   <input type="checkbox" name="hobby" v-model="checked" value="조깅">조깅
   <input type="checkbox" name="hobby" v-model="checked" value="자전거">자전거

   <div>{{ checked }}</div>

    <!-- <input type="radio" name="city" v-model="checked2" value="인천">인천 -->
    <input type="radio" name="city" v-model="checked2" v-bind:value="city1">{{ city1}}
    <input type="radio" name="city" v-model="checked2" :value="city2">{{ city2 }}
    <input type="radio" name="city" v-model="checked2" value="수원">수원
    <input type="radio" name="city" v-model="checked2" value="부산">부산

    <div>{{ checked2 }}</div>

    <textarea v-model="textValue"></textarea>   <!-- value 속성 -->

    <br>

    <select v-model="selectedCity">
        <option value="인천">인천</option>
        <option value="서울">서울</option>
        <option value="부산">부산</option>
    </select>

    <br>
    <a v-bind:href="href1">네이버</a>
    <br>
    <a :href="href2">다음</a>
    <br>

    <img :src="imageSrc">
    <br>
    <br>
    <input type="text" v-bind:readonly="textReadOnly">
    <br>
    <br>
    <button tupe="button" v-bind:disabled="buttonDisabled">버튼</button>
    <br>
    <br>
    <input type="text" name="title" v-model="textTitle">
    <button type="button" v-bind:disabled="textTitle==''">버튼</button>
    <br>
    <br>
    <div class="class1" v-bind:class="{ 'on' : isActive, 'error' : isError }">클래스 추가/제거 테스트</div>
    <br>
    <br>
    <div class="class1" v-bind:class="[calss2, class3]">클래스 추가/제거 테스트 2 </div>
    <br>
    <br>
    <div v-bind:style="styleObject">123123 </div>
    <div v-bind:style="[style1, style2, style3]">1111111</div>
    <br>



</template>

<script>

export default {
   
    data() {
        return {
            style1 : "width : 100px",
            style2 : "height : 100px",
            style3 : "backgroundColor : blue",
            styleObject : {
                color : "red",
                width : "100px",
                height : "100px",
                backgroundColor : "orange",
            },
            class2 : "class2",
            class3 : "class3",
            isError : true,
            isActive : true,
            textTitle : "",
            buttonDisabled : true,
            textReadOnly : true,
            imageSrc : "https://www.google.co.kr/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png",
            href1 : "https://www.naver.com",
            href2 : "hrrps://www.daum.net",
           checked : [],    // checkbox -> 여러개 선택 -> 배열 객체
           check1Value : "등산",
           check2Value : "수영",
           checked2 : "",   // ra-> 선택(1개만 선택 가능)
           city1 : "인천",
           city2 : "서울",
           textValue : "텍스트 영역 내용...",
           selectedCity : "부산",
        };
    },
    created() {
        console.log("Created");
    },
    mounted() {
        console.log("Mounted");
       // this.title = "(변경)" + this.title;
       this.selectedCity = "서울";
    },
    unmounted() {
        console.log("Unmounted");
    },
    methods : {
        changeTitle() {
            this.title = "(변경)" + this.title;
        }
    }
}

</script>
