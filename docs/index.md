---
title:  低代码 零代码 开发平台，易用，全面，可拓展，安全，高效 
---
<div class="banner">
    <div class="inner-content">
        <div class="info">
           <div class="title-h1">
               <h1><strong>{{ data.title }}</strong></h1>
               <vuetyped :strings="[data.slogn]" :showCursor="true" :typeSpeed="200">
                  <h1 class="typing"></h1>
               </vuetyped>
           </div>
           <div class="desc">
              {{ data.desc }}
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
                   <div class="desc">{{ clouds.desc }}</div>
                </div>
            </div>
            <a class="btn">{{ clouds.btnText }}</a>
        </div>
    </div>
    <div class="feature join">
        <div class="inner-content">
            <h2 class="title title-h2">加入我们的社区 </h2>
            <div class="subTitle">获取最新更新，并于官方开发者和其他用户讨论。</div>
            <div class="blocks">
               <a class="block develop">
                  <h3 class="title3">加入我们的开发者社区</h3>
                  <div class="desc">SuiteBoot 已开源。欢迎关注我们的GitHub！</div>
               </a>
               <a class="block bg-2">
                  <h3 class="title3">联系我们</h3>
                  <div class="desc">发送邮件到service@suiteboot.cn，及时获取最新反馈。</div>
               </a>
            </div>
        </div>
    </div>
</div>

<script setup>
    import { useData } from 'vitepress';

    const { theme } = useData();
    const data = theme.value.index;
    const { features, clouds } = data;
    
</script>

<style scoped>
    .banner{
        display: flex;
        position: relative;
        overflow: hidden;
        width: 100%;
        padding-top: 80px;
        padding-bottom: 80px;
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
        background: #6e77af;
    }

</style>
