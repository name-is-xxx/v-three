<template>
  <div class="info">
    <button @click="onNavigate(-1)" class="button">back</button>
    <span class="text">远近训练</span>
  </div>
</template>

<script setup>
import router from "@/router.js";
import * as three from "three";
import WebGL from "three/addons/capabilities/WebGL.js";
import { onBeforeUnmount } from "vue";

const onNavigate = (num) => {
  switch (num) {
    case -1:
      router.go(-1);
      break;
  }
};

// 路由变化时的清理函数
onBeforeUnmount(() => {
  onRouteChange();
});

function onRouteChange() {
  // 将对象从场景中移除
  while (scene.children.length > 0) {
    const object = scene.children[0];
    scene.remove(object); // 移除场景中的物体
    // 如果有几何体和材质，也进行清理
    if (object.geometry) object.geometry.dispose();
    if (object.material) object.material.dispose();
  }
  // 取消挂载scene
  document.body.removeChild(renderer.domElement);
}

// Three
// 场景
const scene = new three.Scene();
// 透视摄像机 视野角度（FOV，可见范围） 长宽比（宽/高） 近截面和远截面
const camera = new three.PerspectiveCamera(
  75,
  window.innerWidth / innerHeight,
  0.1,
  1000
);
// 渲染器
const renderer = new three.WebGLRenderer();
// 渲染器尺寸
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

scene.background = new three.Color("#C7EDCC");

// 创建一个三维辅助坐标系
const axesHelper = new three.AxesHelper(150);
// 将辅助坐标系添加到场景中
scene.add(axesHelper);

// SphereGeometry 球体
const geometry = new three.SphereGeometry(1, 32, 16);
// 设置材质及颜色
const material = new three.MeshBasicMaterial({ color: "#6E7B6C" });
// 将立方体与材质结合
const sphere = new three.Mesh(geometry, material);
scene.add(sphere);

// 默认情况下，调用scene.add()物体将会被添加到(0,0,0)，因此使得摄像机和物体彼此在一起，需将摄像机向外移动。
camera.position.set(0, 0, 10);
camera.lookAt(0, 0, 0);

let speed = 0.1;

// 渲染循环 或 动画循环
function animate() {
  requestAnimationFrame(animate);
  if (sphere.position.z < -100 || sphere.position.z > 0) {
    speed = -speed;
  }
  sphere.position.z -= speed;
  renderer.render(scene, camera);
}

// animate();
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
