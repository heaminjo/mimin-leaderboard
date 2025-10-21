<script setup lang="ts">
import DiamondUser from './pages/DiamondUser.vue';
import LegendUser from './pages/LegendUser.vue';
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay } from 'swiper/modules'
import axios from 'axios';
import 'swiper/css';
import { onMounted, onUnmounted, ref } from 'vue';
import type { User } from './components/data';


let baseURL = 'http://localhost:48081/api'

if (import.meta.env.NODE_ENV === 'production')
  baseURL = '/api/'

const legendUsers = ref<User[]>([])
const diamondUsers = ref<User[]>([])

const fetchLeaderBoard = async () => {
  await axios.get(`${baseURL}/mscore/ranking`,{
    params: {
      page: 0,
      size: 25,
      scoreGroup: 'MAIN'
    }}
  )
  .then(res => {
    legendUsers.value = res.data.list.filter((user: any) => user.tier === 'LEGEND')
    diamondUsers.value = res.data.list.filter((user: any) => user.tier === 'DIAMOND')
  })
}

let intervalId: ReturnType<typeof setInterval> | null = null

onMounted(() => {
  fetchLeaderBoard() // 최초 1회 실행

  intervalId = setInterval(() => {
    fetchLeaderBoard()
  }, 600_000)
})

onUnmounted(() => {
  if (intervalId) clearInterval(intervalId)
})
</script>

<template>
   <Swiper
    class="full-slider"
    :modules="[Autoplay]"
    :speed="1000"
    :loop="true"
    :autoplay="{ delay: 15000, disableOnInteraction: false }"
    pagination
    navigation
  >
    <SwiperSlide><LegendUser :users="legendUsers"/></SwiperSlide>
    <SwiperSlide><DiamondUser :users="diamondUsers"/></SwiperSlide>

  </Swiper>
</template>
