<template>
  <div class="main">
    <div class="info">
      <button @click="onNavigate(-1)" class="button">back</button>
      <span class="text">眼保健操</span>
    </div>
    <video src="../../../public/眼保健操.mp4" controls class="video"></video>
  </div>
</template>

<script setup>
import router from "@/router.js";

const onNavigate = (num) => {
  switch (num) {
    case -1:
      router.go(-1);
      break;
  }
};
</script>

<style scoped>
.main {
  position: absolute;
  width: 100%;
  height: 100%;
  background: #faf9de;
}
.info {
  width: 100%;
  font-weight: 600;
  display: flex;
  align-items: center;
  background: #faf9de;
}
.button {
  padding: 2px 6px;
  margin: 5px;
  width: 45px;
  font-size: large;
  border: 0;
  background: #faf9de;
}
.text {
  font-size: larger;
  text-align: center;
  flex: 1;
}
.video {
  width: 90%;
  margin: auto;
  display: flex;
  max-width: 1180px;
}
</style>
