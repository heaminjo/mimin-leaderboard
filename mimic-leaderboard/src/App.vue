<script setup lang="ts">
import DiamondUser from './pages/DiamondUser.vue';
import LegendUser from './pages/LegendUser.vue';
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Autoplay } from 'swiper/modules'


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
    <SwiperSlide><LegendUser /></SwiperSlide>
    <SwiperSlide><DiamondUser /></SwiperSlide>
  </Swiper>
</template>
