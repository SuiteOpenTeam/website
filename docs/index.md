---
title:  低代码 零代码 开发平台，易用，全面，可拓展，安全，高效 
---
<div class="banner">
    <div class="inner-content">
        <div class="info">
           <div class="title-h1">
               <h1><strong>{{ data.title }}</strong></h1>
                <h1 class="typing">{{ typedText }}</h1>
           </div>
           <div class="desc">
              {{ data.desc }}
           </div>
           <div class="btns">
               <a class="btn colorful2" target="_blank" :href="data.btnLink">{{ data.btnText }}</a>
           </div>
        </div>
    </div>
</div>
<div class="product-content">
    <div class="feature">
        <div class="inner-content">
            <h2 class="title title-h2">{{ features.title }} </h2>
            <div class="subTitle">{{ features.desc }}</div>
            <div class="columns">
                <div class="column" v-for="item in features.items">
                   <img :src="item.icon" />
                   <div class="item-title">{{ item.title }}</div>
                   <div class="desc">{{ item.desc }}</div>
                </div>
            </div>
            <a class="btn colorful-btn">{{features.btnText}}</a>
        </div>
    </div>
    <div class="feature cloud">
        <div class="inner-content">
            <h2 class="title title-h2">{{ clouds.title }} </h2>
            <div class="subTitle">{{ clouds.desc }}</div>
            <div class="columns">
                <div class="column" v-for="item in clouds.items">
                   <div class="item-title">{{ item.title }}</div>
                   <div class="desc">{{ item.desc }}</div>
                </div>
            </div>
            <a class="btn" >{{ clouds.btnText }}</a>
        </div>
    </div>
    <div class="feature join">
        <div class="inner-content">
            <h2 class="title title-h2">{{ concat.title }} </h2>
            <div class="subTitle">{{ concat.desc }}</div>
            <div class="blocks">
               <a class="block develop" :href="concat.github.link" target="_blank">
                  <h3 class="title3">{{ concat.github.title }}</h3>
                  <div class="desc">{{ concat.github.desc }}</div>
               </a>
               <a class="block bg-2" :href="concat.join.link" target="_blank">
                  <h3 class="title3">{{ concat.join.title }}</h3>
                  <div class="desc">{{ concat.join.desc }}</div>
               </a>
            </div>
        </div>
    </div>
</div>

<script setup>
    import { useData } from 'vitepress';
    import { ref } from 'vue';

    const { theme } = useData();
    const data = theme.value.index;
    const { features, clouds, concat } = data;

    const typedText = ref('');
    var index = 0;
    const type = () => {
        if (index < data.slogn.length) {
            typedText.value += data.slogn[index++];
        } else {
            clearInterval(intervalId);
        }
    };
    
    const intervalId = setInterval(type, 250);
    
</script>

<style scoped>
    .banner{
        display: flex;
        position: relative;
        overflow: hidden;
        width: 100%;
        padding-top: 80px;
        padding-bottom: 50px;
        justify-content: center;
        background: linear-gradient(180deg, rgba(30, 27, 33, .8) 0%, rgba(30, 27, 33, 0) 10%, rgba(30, 27, 33, 0) 81%, rgba(30, 27, 33, .95) 100%);
    }
    .inner-content{
        max-width: 1320px;
        padding: 0 20px;
        margin: 0 auto;
        display: flex;
        justify-content: space-around;
        position: relative;
        overflow: hidden;
    }
    .banner .info{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        max-width: 760px;
    }
    .banner .info .title-h1 h1{
        margin-bottom: 30px;
        text-align: center;
        font-size: 60px;
        line-height: 80px;
        font-weight: 800;
    }
    h1 strong{
        font-weight: 900;
        color: var(--color-red-1);
    }
    .banner .info .desc {
        font-size: 20px;
        line-height: 28px;
        color: #bab9bc;
        text-align: center;
        margin-bottom: 30px;
    }
    .product-content{
        flex-direction: column;
        align-items: center;
        padding-top: 80px;
    }
    .feature{
        margin-bottom: 100px;
    }
    .product-content .feature .inner-content {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        flex-wrap: wrap;
    }
    .title-h1, .title-h2 {font-family: Noto Sans SC;}
    .product-content .feature .title {
        margin-bottom: 15px;
        font-size: 40px;
        font-weight: 800;
        line-height: 49px;
    }
    .product-content .feature .subTitle {
        font-size: 18px;
        line-height: 24px;
    }
    .product-content .feature .columns {
        display: grid;
        margin-top: 60px;
        grid-template-columns: repeat(4, 1fr);
        grid-gap: 40px;
    }
    .product-content .feature .columns .column {
        padding: 32px 0;
        padding-top: 10px;
    }
    .column .item-title{
        font-size: 20px;
        line-height: 28px;
        font-weight: 700;
        margin: 15px 0 20px;
    }
    .column .desc{
        font-size: 16px;
        line-height: 22px;
    }
    .btn {
        -webkit-user-select: none;
        user-select: none;
        cursor: pointer;
        min-width: 182px;
        height: 46px;
        font-size: 16px;
        line-height: 22px;
        color: #f9f9f9;
        background-color: transparent;
        display: flex;
        justify-content: space-around;
        align-items: center;
        padding: 12px 16px;
        font-weight: 600;
        border: 1px solid #bab9bc;
    }
    .feature .btn {
        margin-top: 40px;
        justify-content: center;
    }
    .cloud .btn{
        background: transparent;
        border-radius: 4px;
        cursor: progress;
    }
    .btn.colorful-btn {
        padding: 0;
        border: solid 1px transparent;
        border-radius: 4px;
        background-image: linear-gradient(#1e1b21, #1e1b21), linear-gradient(307deg, #fc29a1, #751ee4);
        background-origin: border-box;
        background-clip: content-box, border-box;
    }
    .colorful-btn:hover{
        background: linear-gradient(135deg, #751ee4 0%, #fc29a1 100%);
        border: none;
    }
    .colorful2{
        background: linear-gradient(135deg, #751ee4 0%, #fc29a1 100%);
        border: none;
        border-radius: 4px;
    }
    .colorful2:hover{
        opacity: 0.8;
    }
    .product-content .cloud {
        padding-bottom: 80px;
        background: linear-gradient(135deg, #751ee4 0%, #fc29a1 100%);
        clip-path: polygon(0 0, 100% 15%, 100% 100%, 0 100%);
    }
    .cloud .title-h2{
        margin-top: 120px;
    }
    .product-content .cloud .columns .column {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        padding: 32px 24px;
        background: #f9f9f9;
        border-radius: 8px;
        color: #170c2c;
    }
    .product-content .feature .columns .column .item-title {
        font-size: 20px;
        line-height: 28px;
        font-weight: 700;
        margin: 15px 0 20px;
    }
    .blocks{
        margin-top: 30px;
        display: flex;
        justify-content: space-between;
        width: 100%;
    }
    .block{
        flex: 1;
        padding: 32px;
        margin-right: 40px;
        border-radius: 8px;
        background: rgba(83, 82, 87, .3);
        border: 1px solid #535257;
        opacity: .8;
    }
    .block:hover{
        opacity: 1;
    }
    .develop{
        display: flex;
        flex-direction: column;
    }
    h3.title3{
        font-size: 20px;
        font-weight: 700;
        margin-bottom: 15px;
    }
    .bg-2{
        background: #8322ff;
    }

</style>
