<script setup lang="ts">
import type { User } from '../components/data';
import LegendCard from '../components/LegendCard.vue';
import mimicSymbol from '../../public/심볼형_1.png'
import mimicLogo from '../../public/기본형_1.png'
import legendLogo from '../../public/b57d10d842cb6fe89e19df65bbfd20506aecf9c9.png'

const props = defineProps<{
  users: User[]
}>()
</script>

<template>
<div class="legend-container">
  <header class="legend-header">
    <div class="legend-title">
      <div class="mimic-logo">
        <img :src="mimicLogo" alt="MIMIC 로고">
      </div>
      <div class="legend-logo">
         <img :src="legendLogo" alt="LEGEND 로고">
      </div>
    </div>
  </header>
  <main class="legend-main">
    <div class="card-list">
      <div
          v-for="(user, index) in props.users"
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

  .legend-container{
    width: 1920px;
    height: 1080px;
  }

/* header */
  .legend-header{ 
    height: 435px;
  }

  .legend-title{
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }


  /* 로고  */
  .mimic-logo{
    width: 426.789px;
    height: 124px;
  }

  .legend-logo{
    width: 500px;
    height: 124px;
  }

  .mimic-logo img,
  .legend-logo img{
    width: 100%;
    height: 100%;
  }
/* main */
  .legend-main{
    height: 375px;
  }
  .card-list{
    height: 400px;
    display: flex;
    justify-content: center;
    column-gap: 87px;
  }

/* footer*/
  .legend-footer{
    display: flex;
    height: 270px;
    justify-content: center;
  }

  .legend-footer img{
    width: 98.421px;
    height: 79px;
    margin-top: 121px;
  }
</style>