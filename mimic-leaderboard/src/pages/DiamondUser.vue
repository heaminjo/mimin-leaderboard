<script setup lang="ts">
import diamondLogo from '../../public/15302fa316a3c41fa058ac5bbb2b79f7064e0718.png'
import DiamondCard from '../components/DiamondCard.vue';
import type { User } from '../components/data';

const props = defineProps<{
  users: User[]
}>()
</script>

<template>
<div class="diamond-container">
  <header class="diamond-header">
    <div class="diamond-title">
      <img id="diamond-logo" :src="diamondLogo" alt="DIAMOND 로고">
    </div>
  </header>
  <main class="diamond-main">
    <div class="card-grid">
    <div
      class="player-card"
      v-for="(user, index) in props.users"
      :key="index"
    >
     <DiamondCard :user="user"/>
    </div>
  </div>
  </main>
</div>
</template>

<style>

.diamond-container{
    width: 1920px;
    height: 1080px;
}

/* header */
  .diamond-header{ 
    height: 267px;
  }

  .diamond-title{
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

  #diamond-logo{
  width: 584px;
  height: 124px;
  flex-shrink: 0;
  aspect-ratio: 146/31;
  }

/* main   */
  .diamond-main{
    height: calc(100% - 267px);
  }
  .card-grid {
  width: calc(1980px - 414px);
  margin: 0 auto;
  display: grid;
   grid-template-columns: repeat(5, 1fr); /* 가로 5개 */
  grid-template-columns: repeat(4, 1fr); /* 한 줄에 5개 */
  row-gap: 47px;
  column-gap: 60px; /* 카드 간격 */
  justify-items: center;
  align-items: center;
}
</style>