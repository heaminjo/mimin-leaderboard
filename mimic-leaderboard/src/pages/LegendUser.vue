<script setup lang="ts">
import type { User } from '../components/data';
import LegendCard from '../components/LegendCard.vue';
import mimicSymbol from '../../public/심볼형_1.png'
import mimicLogo from '../../public/기본형_1.png'
import legendLogo from '../../public/b57d10d842cb6fe89e19df65bbfd20506aecf9c9.png'


const data = [
    {
    "accountId": "8sla79r554",
        "nickname": "테스트",
        "profileUrl": "/user/profile/2025081003353447143ba.bin",
        "ranking": 1,
        "mscore": 40.923,
        "tier": "LEGEND",
        "mscores": [{
                "ranking": 1,
                "scoreGroup": "MAIN", 
                "mscore": 42.1
            }, {
                "ranking": 1,
                "scoreGroup": "LIGHT", 
                "mscore": 56.5
            }, {
                "ranking": 1,
                "scoreGroup": "BLITZ", 
                "mscore": 24.1
            }, {
                "ranking": 1,
                "scoreGroup": "CLASSIC", 
                "mscore": 52.2
            }],
    },{
    "accountId": "8sla79r554",
        "nickname": "테스트",
        "profileUrl": "/user/profile/2025081003353447143ba.bin",
        "ranking": 2,
        "mscore": 40.923,
        "tier": "LEGEND",
        "mscores": [{
                "ranking": 1,
                "scoreGroup": "MAIN", 
                "mscore": 65.1
            }, {
                "ranking": 1,
                "scoreGroup": "LIGHT", 
                "mscore": 90.3
            }, {
                "ranking": 1,
                "scoreGroup": "BLITZ", 
                "mscore": 80.5
            }, {
                "ranking": 1,
                "scoreGroup": "CLASSIC", 
                "mscore": 70.2
            }],
    },{
    "accountId": "8sla79r554",
        "nickname": "테스트",
        "profileUrl": "/user/profile/2025081003353447143ba.bin",
        "ranking": 3,
        "mscore": 40.923,
        "tier": "LEGEND",
        "mscores": [{
                "ranking": 1,
                "scoreGroup": "MAIN", 
                "mscore": 30.2
            }, {
                "ranking": 1,
                "scoreGroup": "LIGHT", 
                "mscore": 50.1
            }, {
                "ranking": 1,
                "scoreGroup": "BLITZ", 
                "mscore": 15.1
            }, {
                "ranking": 1,
                "scoreGroup": "CLASSIC", 
                "mscore": 64.1
            }],
    },{
    "accountId": "8sla79r554",
        "nickname": "테스트",
        "profileUrl": "/user/profile/2025081003353447143ba.bin",
        "ranking": 4,
        "mscore": 40.923,
        "tier": "LEGEND",
        "mscores": [{
                "ranking": 1,
                "scoreGroup": "MAIN", 
                "mscore": 30.2
            }, {
                "ranking": 1,
                "scoreGroup": "LIGHT", 
                "mscore": 50.1
            }, {
                "ranking": 1,
                "scoreGroup": "BLITZ", 
                "mscore": 15.1
            }, {
                "ranking": 1,
                "scoreGroup": "CLASSIC", 
                "mscore": 64.1
            }],
    },{
    "accountId": "8sla79r554",
        "nickname": "테스트",
        "profileUrl": "/user/profile/2025081003353447143ba.bin",
        "ranking": 5,
        "mscore": 40.923,
        "tier": "LEGEND",
        "mscores": [{
                "ranking": 1,
                "scoreGroup": "MAIN", 
                "mscore": 30.1
            }, {
                "ranking": 1,
                "scoreGroup": "LIGHT", 
                "mscore": 50.1
            }, {
                "ranking": 1,
                "scoreGroup": "BLITZ", 
                "mscore": 15.2
            }, {
                "ranking": 1,
                "scoreGroup": "CLASSIC", 
                "mscore": 64.3
            }],
    }
]
</script>

<template>
<div class="legend-container">
  <header class="legend-header">
    <div class="legend-title">
      <img id="mimic-logo" :src="mimicLogo" alt="MIMIC 로고">
      <img id="legend-logo" :src="legendLogo" alt="LEGEND 로고">
    </div>
  </header>
  <main class="legend-main">
    <div class="card-list">
      <div
          v-for="(user, index) in data"
          :key="user.accountId + index"
          class="user-card"
        >
        <LegendCard :user="user"/>
        </div>
      </div>
  </main>
  <footer class="legend-footer">
    <img :src="mimicSymbol" alt="">
  </footer>
</div>
</template>

<style>

/* header */
  .legend-header{ 
    height: 350px;
  }

  .legend-title{
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  #mimic-logo{
    width: 426px;
    height: auto;
  }

/* main */
  #legend-logo{
    width: 500px;
    height: auto;
  }
  .card-list{
    height: 400px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 60px;
  }

/* footer*/
  .legend-footer{
    display: flex;
    justify-content: center;
  }

  .legend-footer img{
    width: 100px;
    height: auto;
    margin-top: 30px;
  }
</style>