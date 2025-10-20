<script setup lang="ts">
import DiamondUser from './pages/DiamondUser.vue';
import LegendUser from './pages/LegendUser.vue';
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Autoplay } from 'swiper/modules'
import { User } from './data';
import axios from 'axios';
import { onMounted, ref } from 'vue';


const API = 'http://localhost:48081/api'

const legendUsers = ref<User[]>([])
const diamondUsers = ref<User[]>([])

const fetchLeaderBoard = async () => {
  await axios.get(`${API}/leaderboard`)
  .then(res => {
     legendUsers.value = res.data.legendUsers
     diamondUsers.value = res.data.diamondUsers 
  })
}

onMounted(() => {
  fetchLeaderBoard()
})
</script>

<template>
   <Swiper
    class="full-slider"
    :modules="[Autoplay]"
    :speed="1000"
    :loop="true"
    :autoplay="{ delay: 10000, disableOnInteraction: false }"
    pagination
    navigation
  >
    <SwiperSlide><LegendUser :users="legendUsers"/></SwiperSlide>
    <SwiperSlide><DiamondUser :users="diamondUsers"/></SwiperSlide>
  </Swiper>
</template>
