<script setup lang="ts">
import type { Mscores } from './data';
import mBadge from '../../public/_격리_모드.png'
import lBadge from '../../public/_격리_모드 (1).png'
import bBadge from '../../public/_격리_모드 (2).png'
import cBadge from '../../public/_격리_모드 (3).png'

const props = defineProps<{
    mscores: Mscores []
}>()

const badgeMap: Record<string, string> = {
  MAIN: mBadge,
  LIGHT: lBadge,
  BLITZ: bBadge,
  CLASSIC: cBadge,
}

</script>

<template>
    <div class="mscore-container">
        <h4>MSCORE</h4>
        <div class="mscore-box">
            <div v-for="mscore in props.mscores">
                <div class="score">
                    <img :src="badgeMap[mscore.scoreGroup]" alt="">
                    <span>{{ mscore.mscore}}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
    .mscore-container{
        border-top: 1px solid #AAAAAA;
    }
    .mscore-box{
        display: flex;
        gap: 5px;
        justify-content: center;
    }
    h4{
        text-align: center;
        margin: 5px 0;
        font-size: 15px;
    }
    .score{
        display: flex;
        gap: 3px;
    }
    .score span{
        font-size: 12px;
    }
    .score img{
        height: auto;
        width: 10;
    }
    .score span{
        color: #000;
    }
</style>