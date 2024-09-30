<template>
  <div class="info">
    <button @click="onNavigate(-1)" class="button">back</button>
    <span class="text">追踪训练</span>
  </div>
</template>

<script setup>
import router from "@/router.js";
import * as three from "three";
import WebGL from "three/addons/capabilities/WebGL.js";
import { onBeforeUnmount } from "vue";
import createScence from "@/assets/create-scene";
import cleanScene from "@/assets/clean-scene";

const onNavigate = (num) => {
  switch (num) {
    case -1:
      router.go(-1);
      break;
  }
};

// 路由变化时的清理函数
onBeforeUnmount(() => {
  cleanScene(scene, renderer);
});

// Three
// 创建场景
const { scene, camera, renderer } = createScence();
scene.background = new three.Color("#C7EDCC");

// CircleGeometry 圆 TorusGeometry 圆环
const circleGeometry = new three.CircleGeometry(0.5);
const gridHelper = new three.GridHelper(14, 14);
gridHelper.rotateX(Math.PI / 2);
scene.add(gridHelper);
// 设置材质及颜色
const material = new three.MeshBasicMaterial({ color: "#6E7B6C" });
// 将立方体与材质结合
const moveCircle = new three.Mesh(circleGeometry, material);
scene.add(moveCircle);

// 渲染循环 或 动画循环
function animate() {
  moveCircle.position.setX(Math.random() * 12 - 6);
  moveCircle.position.setY(Math.random() * 12 - 6);
  renderer.render(scene, camera);
  requestAnimationFrame(() => {
    setTimeout(() => {
      animate();
    }, 500);
  });
}

function main() {
  // 兼容性检查
  if (WebGL.isWebGLAvailable()) {
    animate();
  } else {
    const warning = WebGL.getWebGLErrorMessage();
    document.getElementById("container").appendChild(warning);
  }
}
main();
</script>

<style scoped>
.info {
  position: absolute;
  width: 100%;
  font-weight: 600;
  display: flex;
  align-items: center;
}
.button {
  padding: 2px 6px;
  margin: 5px;
  width: 45px;
  font-size: large;
  border: 0;
  background: #c7edcc;
}
.text {
  font-size: larger;
  text-align: center;
  flex: 1;
}
</style>
