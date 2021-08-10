<template>
    <h1> 안녕{{ title }} </h1>
    <br>
    <div v-html="htmlString"></div>
   
    <br>

    <div>
        <input type="text" v-model="valueModel">
    </div>
   
    <br>

    <div>
        <input type="number" v-model.number="numberModel">
    </div>

    <br>

    <textarea v-model="textArea"></textarea>

    <br>

    <div>
        <select v-model="city">
            <option value="02">서울</option>
            <option value="051">부산</option>
            <option value="053">대구</option>
            <option value="032">인천</option>
            <option value="062">광주</option>
            <option value="042">대전</option>
            <option value="052">울산</option>
            <option value="044">세종</option>
            <option value="031">경기</option>
            <option value="033">강원</option>
            <option value="043">충북</option>
            <option value="041">충남</option>
            <option value="063">전북</option>
            <option value="061">전남</option>
            <option value="054">경북</option>
            <option value="055">경남</option>
            <option value="064">제주</option>
        </select>
    </div>

    <br>

    <div>
        <label>
            <input type="checkbox" v-model="checked" true-value="선택됐습니다" false-value="선택하세요">
            {{ checked }}
        </label>
    </div>

    <br>

    <label><input type="checkbox" value="중국" v-model="checked2">중국</label>
    <label><input type="checkbox" value="일본" v-model="checked2">일본</label>
    <label><input type="checkbox" value="베트남" v-model="checked2">베트남</label>
    <label><input type="checkbox" value="호주" v-model="checked2">호주</label>
    <label><input type="checkbox" value="러시아" v-model="checked2">러시아</label>
    <br>
    <span> 가고싶은 여행지는 {{ checked2 }} 입니다. </span>

    <br>
    <br>
    <br>

    <label><input type="radio" :value="radioValue1" v-model="picked">한식</label>
    <label><input type="radio" :value="radioValue2" v-model="picked">중식</label>
    <label><input type="radio" :value="radioValue3" v-model="picked">일식</label>
    <label><input type="radio" :value="radioValue4" v-model="picked">양식</label>
    <label><input type="radio" :value="radioValue5" v-model="picked">아무거나</label>
    <br>
    <span>먹고싶은 음식은 {{picked}} 입니다.</span>

    <br>
    <br>
    <img :src="imgSrc" />
    <br>
    <br>
    <br>
    
    <div>
        <h2>작성 후 Click 가능</h2>
        <input type="text" v-model="textValue" />
        <button type="button" :disabled="textValue==''">Click</button>
    </div>
    <br>
    <br>
    <br>


</template>

<script>
export default {
    data() {
        return {
            title : "하세요^^",
            htmlString : "<p style='color:blue'> HTML로 작성된 문장입니다~ ^^</p>",
            valueModel : "인천광역시",
            numberModel : "1205",
            textArea : "글을 작성해주세요^^.",
            city : "032",
            checked : true,
            checked2 : [],
            picked : "",
            radioValue1 : "한식",
            radioValue2 : "중식",
            radioValue3 : "일식",
            radioValue4 : "양식",
            radioValue5 : "아무거나",
            imgSrc : "https://jmagazine.joins.com/_data/photo/2016/05/thumb_2949993309_olERkGMq_01.jpg",
            textValue : "",    
        };
    }
}
</script>