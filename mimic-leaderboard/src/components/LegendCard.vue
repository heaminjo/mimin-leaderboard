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
                <p>{{ user.nickname }}</p>
            </div>
            <div class="mscore">
                <MscoreCard :mscores="user.mscores"/>
            </div>
            <div class="symbol">
                <img :src="mimicSymbol2" alt="">
            </div>
        </div>
    </section>
</template>

<style>
    .legend-section{
        width: 230px;
        height: 320px;
        background-color: #FFEEEE;
        border-radius: 20px;
        border: solid 4px #A80014;
        position: relative;
        padding: 20px;
    }
    .rank-img img{
        width: 80px;
        position: absolute;
        left: 15px;
        top: -30px;
    }

/* profile */
    .profile{
        display: flex;
        justify-content: center;
        position: relative;
        padding: 20px 0;
    }
    .profile img{
        width: 140px;
        height: auto;
        background-color: #000;
        border-radius: 100%;
    }

/* tier  */
    .tier{
        position: absolute;
        z-index: 10;
        background-color: #A80014;
        border-radius: 15.5px;
        width: 111px;
        height: 28px;
        text-align: center;
        line-height: 28px;
        color: #fff;
        font-weight: bold;  
        bottom: 10px;
    }

/* nickname*/
    .nickname{
        margin-bottom: 7px;
    }

    .nickname{
        p{
            font-size: 17px;
            font-weight: bold;
            text-align: center;
            color: #A80014;
        }
    }

/* symbol*/
    .symbol{
        display: flex;
        padding: 10px;
        justify-content: center;
        margin-top: 20px;
    }
</style>
