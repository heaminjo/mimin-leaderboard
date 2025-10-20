<script setup lang="ts">
import type { User } from './data';

const props = defineProps<{
  user: User
}>()

</script>

<template>
    <section>
        <div class="ranking">
            <div class="d-rank">
                <span><b>{{ props.user.ranking }}</b>th</span>
            </div>
            <div class="d-tier">
                <span>{{ props.user.tier }}</span>
            </div>
        </div>
        <div class="info">
            <div class="d-nickname">
                <span>{{ props.user.nickname }}</span>
            </div>
            <div class="d-mscore">
                <span>{{ props.user.mscore }}</span>
            </div>
        </div>
    </section>
</template>

<style>
    section{
        width: 328px;
        height: 100px;
        box-sizing: border-box;
        padding: 18px 15px 22px 19px;
        border-radius: 20px;
        border: 2px solid #FFF;
        background: rgba(255, 255, 255, 0.15);

    }

/* ranking */
.ranking{
    display: flex;
    justify-content: space-between;
}
span{
    color: #FFF;
    font-family: Pretendard;
    font-size: 15px;
    font-style: normal;
    font-weight: 700;
    line-height: 21px;
}

span b{
    font-family: Pretendard;
    font-size: 25px;
    font-style: normal;
    font-weight: 700;
    line-height: 21px; /* 84% */
}

.d-tier{
    width: 98.668px;
    height: 25.695px;
    border-radius: 12px;
    background: #2EB9FF;
    text-align: center;
}

/* info */
.info{
    display: flex;
    margin-top: 13px;
    justify-content: space-between;
}

.d-nickname{
    width: 171px;
    height: 23px;
}

.d-nickname span{
    color: #FFF;
    font-family: Pretendard;
    font-size: 23px;
    display: inline-block;
    font-style: normal;
    font-weight: 700;
    line-height: 21px; /* 84% */
}

.d-mscore{
    width: 73px;
    height: 23px;
}
.d-mscore span{
    font-size: 25px;
    font-weight: bold;
    display: inline-block;
}
</style>