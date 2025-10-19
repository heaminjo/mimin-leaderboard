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
                <span><b>{{ user.ranking }}</b>th</span>
            </div>
            <div class="d-tier">
                <span>{{ user.tier }}</span>
            </div>
        </div>
        <div class="info">
            <div class="d-nickname">
                <span>{{ user.nickname }}</span>
            </div>
            <div class="d-mscore">
                <span>{{ user.mscore }}</span>
            </div>
        </div>
    </section>
</template>

<style>
    section{
        width: 300px;
        height: 80px;
        padding: 10px 15px;
        background-color: #3F3F3F;
        border-radius: 20px;
        border: solid 2px #FFFFFF;
    }

/* ranking */
.ranking{
    display: flex;
    justify-content: space-between;
}
span{
    color: #fff;
}

span b{
    font-size: 25px;
}

.d-tier{
    width: 98px;
    height: 25px;
    background-color: #33B7FF;
    border-radius: 12px;
    text-align: center;
}

/* info */
.info{
    display: flex;
    margin-top: 7px;
    justify-content: space-between;
}

.d-nickname span{
    font-size: 23px;
    font-weight: bold;
}
.d-mscore span{
    font-size: 25px;
    font-weight: bold;
}
</style>