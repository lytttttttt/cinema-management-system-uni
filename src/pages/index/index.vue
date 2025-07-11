<template>
  <swiper indicator-dots autoplay circular>
    <swiper-item v-for="i in 3" :key="i">
      <image :src="`/static/images/lun0${i}.jpg`" />
    </swiper-item>
  </swiper>
  <!-- <button type="primary" @tap="bindClick">点击发送请求</button> -->
</template>

<script setup lang="ts">
// import { login } from "@/services/user";
// import { ref } from "vue";
// const title = ref("欢迎来到小程序lalalala");

// const bindClick = async () => {
//   const res = await login({
//     username: "xzzz",
//     password: "1234",
//     roleId: 0,
//   });

//   let data = res.data;
// };
</script>

<style></style>
