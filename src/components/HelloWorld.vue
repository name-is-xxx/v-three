<template>
  <div class="info">这是示例-Html</div>
</template>

<script setup>
import * as three from 'three'
import WebGL from 'three/addons/capabilities/WebGL.js';
import { TextGeometry } from 'three/addons/geometries/TextGeometry.js';
import { FontLoader } from 'three/addons/loaders/FontLoader.js';

// 场景
const scene = new three.Scene();
// 透视摄像机 视野角度（FOV，可见范围） 长宽比（宽/高） 近截面和远截面
const camera = new three.PerspectiveCamera(75, window.innerWidth / innerHeight, 0.1, 1000);
// 渲染器
const renderer = new three.WebGLRenderer();
// 渲染器尺寸
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild(renderer.domElement);

// BoxGeometry 立方体
const geoBox = new three.BoxGeometry(1, 1, 1);
// 设置材质及颜色
const maBox = new three.MeshBasicMaterial({ color: '#fff' });
// 将立方体与材质结合
const cube = new three.Mesh(geoBox, maBox);

// 线条
const maLine = new three.LineBasicMaterial({ color: '#fff' });
const lines = [];
const points1 = [];
points1.push(new three.Vector3(2, 2, 2));
points1.push(new three.Vector3(2, 2, -2));
points1.push(new three.Vector3(-2, 2, -2));
points1.push(new three.Vector3(-2, 2, 2));
points1.push(new three.Vector3(2, 2, 2));
points1.push(new three.Vector3(2, -2, 2));
const points2 = [];
points2.push(new three.Vector3(-2, -2, -2));
points2.push(new three.Vector3(-2, -2, 2));
points2.push(new three.Vector3(2, -2, 2));
points2.push(new three.Vector3(2, -2, -2));
points2.push(new three.Vector3(-2, -2, -2));
points2.push(new three.Vector3(-2, 2, -2));
const points3 = [];
points3.push(new three.Vector3(2, 2, -2));
points3.push(new three.Vector3(2, -2, -2));
const points4 = [];
points4.push(new three.Vector3(-2, 2, 2));
points4.push(new three.Vector3(-2, -2, 2));
const geoLine1 = new three.BufferGeometry().setFromPoints(points1);
const geoLine2 = new three.BufferGeometry().setFromPoints(points2);
const geoLine3 = new three.BufferGeometry().setFromPoints(points3);
const geoLine4 = new three.BufferGeometry().setFromPoints(points4);
const line1 = new three.Line(geoLine1, maLine);
const line2 = new three.Line(geoLine2, maLine);
const line3 = new three.Line(geoLine3, maLine);
const line4 = new three.Line(geoLine4, maLine);
lines.push(line1);
lines.push(line2);
lines.push(line3);
lines.push(line4);

// 文本
const loader = new FontLoader();
loader.load('fonts/helvetiker_regular.typeface.json', function (font) {
  new TextGeometry( '这是示例-几何体', {
    size: 80,
    font: font,
    depth: 5,
    curveSegments: 12,
    bevelEnabled: true,
    bevelThickness: 10,
    bevelSize: 8,
    bevelSegments: 5
  } );
} );




scene.add(cube);
scene.add(...lines);
// 默认情况下，调用scene.add()物体将会被添加到(0,0,0)，因此使得摄像机和物体彼此在一起，需将摄像机向外移动。
camera.position.set( 0, 0, 10 );
camera.lookAt( 0, 0, 0 );

// 渲染循环 或 动画循环
function animate() {
  requestAnimationFrame(animate);
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;
  cube.rotation.z += 0.01;
	renderer.render( scene, camera );
}

// animate();
function main() {
  // 兼容性检查
  if ( WebGL.isWebGLAvailable() ) {
    animate();
  } else {
    const warning = WebGL.getWebGLErrorMessage();
    document.getElementById( 'container' ).appendChild( warning );
  }
}
main()

</script>

<style scoped>
.info {
	position: absolute;
	top: 30px;
	width: 100%;
	text-align: center;
	display:block;
  color: red;
}
</style>