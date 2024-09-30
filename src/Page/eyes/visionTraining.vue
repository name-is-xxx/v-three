<template>
  <div class="info">这是视力训练Home页</div>
  <button @click="onNavigate(1)">Home页</button>
  <button @click="onNavigate(2)">远近训练</button>
  <button @click="onNavigate(3)">眼保健操</button>
  <button @click="onNavigate(4)">追踪训练</button>
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
    case 3:
      router.push({
        path: "/eye-exercises",
      });
      break;
    case 4:
      router.push({
        path: "/focus-exercise",
      });
      break;
  }
};
</script>
