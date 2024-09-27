<template>
  <div class="info">这是视力训练Home页</div>
  <button @click="onNavigate(1)">Home页</button>
  <button @click="onNavigate(2)">远近训练</button>
</template>

<script setup>
import router from "@/router.js";

const onNavigate = (num) => {
  switch (num) {
    case 1:
      router.push({
        path: "/",
      });
      break;
    case 2:
      router.push({
        path: "/near-far",
      });
      break;
  }
};
</script>
