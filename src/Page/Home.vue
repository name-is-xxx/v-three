<template>
  <div class="info">这是Home页</div>
  <button @click="onNavigate(1)">Home页</button>
  <button @click="onNavigate(2)">base页</button>
  <button @click="onNavigate(3)">视力练习</button>
</template>

<script setup>
import router from "@/router.js";

const onNavigate = (num) => {
  switch (num) {
    case 1:
      router.push({
        name: "Home",
      });
      break;
    case 2:
      router.push({
        path: "/base",
      });
      break;
    case 3:
      router.push({
        path: "/vision",
      });
      break;
  }
};
</script>
