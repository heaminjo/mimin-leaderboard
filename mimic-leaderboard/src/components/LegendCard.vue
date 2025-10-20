<script setup lang="ts">
import rank01 from '../../public/7ec0095c98149fa036d9b5c551aaeb3575e5b705.png'
import rank02 from '../../public/a05934fad142ae9b551115892d6bf5172fb5f3c6.png'
import rank03 from '../../public/5fbb33a9a4fe7c031a7784bc40745ccd7e9b25a9.png'
import rank04 from '../../public/ddc27bc62bbefd059bc8bfc128c9baaf17f3b3e3.png'
import rank05 from '../../public/73793b3af47789a5456e2357f5844cdc7d42de1b.png'
import mimicSymbol1 from '../../public/심볼형_1.png'
import mimicSymbol2 from '../../public/Group 192.png'

import type { User } from './data';
import MscoreCard from './MscoreCard.vue'

const props = defineProps<{
  user: User
}>()

const rankImg = [rank01, rank02, rank03, rank04, rank05]

</script>

<template>
    <section class="legend-section">
        <div class="rank-img">
            <img :src='rankImg[user.ranking - 1]' alt="랭크 이미지">
        </div>
        <div class="user-info">
            <div class="profile">
                <img :src="mimicSymbol1" alt="">
                <div class="tier">
                    <span>{{ user.tier }}</span>
                </div>
            </div>
            <div class="nickname">
                <span>{{ user.nickname }}</span>
            </div>
            <div class="mscore">
                <span class="label">MSCORE</span>
                <span class="value">{{user.mscore}}</span>
            </div>
            <div class="symbol">
                <img :src="mimicSymbol2" alt="">
            </div>
        </div>
    </section>
</template>

<style>
    .legend-section{
        width: 267px;
        height: 375px;
        border-radius: 25px;
        border: 4px solid #A80014;
        background: #FEE;
        box-shadow: 2px 2px 5px -1px rgba(0, 0, 0, 0.15);
        border-radius: 20px;
        position: relative;
        padding: 36px 40px 24px;
        box-sizing: border-box;
    }
    .rank-img img{
        width: 94px;
        height: 47px;
        position: absolute;
        left: 15px;
        top: -30px;
    }

    .user-info{
        display: flex;
        flex-direction: column;
        align-items: center;
    }

/* profile */
    .profile{
        display: flex;
        width: 185.249px;
        height: 181.517px;
        justify-content: center;
        position: relative;
    }
    .profile img{
        width: 100%;
        height: auto;
        background-color: #000;
        border-radius: 100%;
    }

/* tier  */
    .tier{
        width: 129.274px;
        height: 32.61px;
        position: absolute;
        z-index: 10;
        background-color: #A80014;
        border-radius: 15.5px;
        text-align: center;
        line-height: 28px;
        color: #fff;
        font-weight: bold;  
        bottom: -11.9px;
    }

/* nickname*/
    .nickname{
        display: flex;
        align-items: center;
        height: 66.92px;
    }
    .nickname{
        span{
           color: #A80014;
            text-align: center;
            font-family: Pretendard;
            font-size: 25px;
            font-style: normal;
            font-weight: 900;
            line-height: normal;
            letter-spacing: 1.25px;
        }
    }

/* mscore  */
.mscore{
    width: 123px;
    height: 21px;
    display: flex;
    align-items: center;
    gap: 13px;
}

.mscore .label{
color: #000;
text-align: center;
font-family: Pretendard;
font-size: 18px;
font-style: normal;
font-weight: 700;
line-height: normal;
}

.mscore .value{
color: #000;
font-family: Pretendard;
font-size: 18px;
font-style: normal;
font-weight: 500;
line-height: normal;
}
/* symbol*/
    .symbol{
        display: flex;
        height: 44px;
        align-items: end;
    }
</style>
