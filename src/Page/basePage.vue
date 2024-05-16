<template>
  <button>back</button>
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

// 文本（字体404）
const loader = new FontLoader();
loader.load('fonts/helvetiker_regular.typeface.json', function (font) {
  console.log(font)
  const geoText = new TextGeometry('hello world!', {
    font:font,
    size:10, // Float。字体大小，默认值为100。
    height:0.05, //  Float。挤出文本的厚度。默认值为50。
    curveSegments: 12, // Integer （表示文本的）曲线上点的数量。默认值为12。
    bevelEnabled: true, // Boolean 是否开启斜角，默认为false。
    bevelThickness: 0.01, // Float。文本上斜角的深度，默认值为20。
    bevelSize: 0,// Float。斜角与原始文本轮廓之间的延伸距离。默认值为8。
    bevelSegments: 3 // Integer 斜角的分段数。默认值为3。
  });
  const maText = [
    new three.MeshPhongMaterial({
      color:'#ffff00',
      flatShading:true
    }),//front
    new three.MeshPhongMaterial({color:'#ffff00'})//back
  ]
  const text = new three.Mesh(geoText, maText);
  text.position.set(0, 0, 6);
  scene.add(text);
});




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