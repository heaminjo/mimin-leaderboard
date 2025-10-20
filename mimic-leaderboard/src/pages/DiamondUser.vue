<script setup lang="ts">
import { onMounted } from 'vue';
import diamondLogo from '../../public/15302fa316a3c41fa058ac5bbb2b79f7064e0718.png'
import DiamondCard from '../components/DiamondCard.vue';
import type { User } from '../components/data';

const props = defineProps<{
  users: User[]
}>()

const data = [
    {
            "accountId": "8sla79r554",
            "nickname": "테스트",
            "ranking": 6,
            "mscore": 40.923,
            "tier": "DIAMOND"
        },
        {
            "accountId": "8sla79r554",
            "nickname": "테스트",
            "profileUrl": "/user/profile/2025081003353447143ba.bin",
            "ranking": 7,
            "mscore": 40.923,
            "tier": "DIAMOND"
        },
        {
            "accountId": "8sla79r554",
            "nickname": "테스트",
            "profileUrl": "/user/profile/2025081003353447143ba.bin",
            "ranking": 8,
            "mscore": 40.923,
            "tier": "DIAMOND"
        },
        {
            "accountId": "8sla79r554",
            "nickname": "테스트",
            "profileUrl": "/user/profile/2025081003353447143ba.bin",
            "ranking": 9,
            "mscore": 40.923,
            "tier": "DIAMOND"
        },
        {
            "accountId": "8sla79r554",
            "nickname": "테스트",
            "profileUrl": "/user/profile/2025081003353447143ba.bin",
            "ranking": 10,
            "mscore": 40.923,
            "tier": "DIAMOND"
        },
        {
            "accountId": "8sla79r554",
            "nickname": "테스트",
            "profileUrl": "/user/profile/2025081003353447143ba.bin",
            "ranking": 11,
            "mscore": 40.923,
            "tier": "DIAMOND"
        },
        {
            "accountId": "8sla79r554",
            "nickname": "테스트",
            "ranking": 12,
            "mscore": 40.923,
            "tier": "DIAMOND"
        },
        {
            "accountId": "8sla79r554",
            "nickname": "테스트",
            "profileUrl": "/user/profile/2025081003353447143ba.bin",
            "ranking": 13,
            "mscore": 40.923,
            "tier": "DIAMOND"
        },
        {
            "accountId": "8sla79r554",
            "nickname": "테스트",
            "profileUrl": "/user/profile/2025081003353447143ba.bin",
            "ranking": 14,
            "mscore": 40.923,
            "tier": "DIAMOND"
        },
        {
            "accountId": "8sla79r554",
            "nickname": "테스트",
            "profileUrl": "/user/profile/2025081003353447143ba.bin",
            "ranking": 15,
            "mscore": 40.923,
            "tier": "DIAMOND"
        },
        {
            "accountId": "8sla79r554",
            "nickname": "테스트",
            "profileUrl": "/user/profile/2025081003353447143ba.bin",
            "ranking": 16,
            "mscore": 40.923,
            "tier": "DIAMOND"
        },
        {
            "accountId": "8sla79r554",
            "nickname": "테스트",
            "profileUrl": "/user/profile/2025081003353447143ba.bin",
            "ranking": 17,
            "mscore": 40.923,
            "tier": "DIAMOND"
        },
        {
            "accountId": "8sla79r554",
            "nickname": "테스트",
            "ranking": 18,
            "mscore": 40.923,
            "tier": "DIAMOND"
        },
        {
            "accountId": "8sla79r554",
            "nickname": "테스트",
            "profileUrl": "/user/profile/2025081003353447143ba.bin",
            "ranking": 19,
            "mscore": 40.923,
            "tier": "DIAMOND"
        },
        {
            "accountId": "8sla79r554",
            "nickname": "테스트",
            "profileUrl": "/user/profile/2025081003353447143ba.bin",
            "ranking": 20,
            "mscore": 40.923,
            "tier": "DIAMOND"
        },
        {
            "accountId": "8sla79r554",
            "nickname": "테스트",
            "profileUrl": "/user/profile/2025081003353447143ba.bin",
            "ranking": 21,
            "mscore": 40.923,
            "tier": "DIAMOND"
        },
        {
            "accountId": "8sla79r554",
            "nickname": "테스트",
            "profileUrl": "/user/profile/2025081003353447143ba.bin",
            "ranking": 22,
            "mscore": 40.923,
            "tier": "DIAMOND"
        },
        {
            "accountId": "8sla79r554",
            "nickname": "테스트",
            "profileUrl": "/user/profile/2025081003353447143ba.bin",
            "ranking": 23,
            "mscore": 40.923,
            "tier": "DIAMOND"
        },
        {
            "accountId": "8sla79r554",
            "nickname": "테스트",
            "ranking": 24,
            "mscore": 40.923,
            "tier": "DIAMOND"
        },
        {
            "accountId": "8sla79r554",
            "nickname": "테스트",
            "profileUrl": "/user/profile/2025081003353447143ba.bin",
            "ranking": 25,
            "mscore": 40.923,
            "tier": "DIAMOND"
        }
]

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
      v-for="(user, index) in data"
      :key="index"
    >
     <DiamondCard :user="user"/>
    </div>
  </div>
  </main>
</div>
</template>

<style>

/* header */
  .diamond-header{ 
    height: 220px;
  }

  .diamond-title{
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 30px;
}

  #diamond-logo{
    width: 584px;
    height: 124px;
  }

/* main   */

  .card-grid {
  width: 1600px;
  margin: 0 auto;
  display: grid;
   grid-template-columns: repeat(5, 1fr); /* 가로 5개 */
  grid-template-columns: repeat(4, 1fr); /* 한 줄에 5개 */
  gap: 20px; /* 카드 간격 */
  justify-items: center;
  align-items: start;
  padding: 20px;
}
</style>