import * as three from "three";

function createScence() {
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

  // 默认情况下，调用scene.add()物体将会被添加到(0,0,0)，因此使得摄像机和物体彼此在一起，需将摄像机向外移动。
  camera.position.set(0, 0, 10);
  camera.lookAt(0, 0, 0);

  return { scene, camera, renderer };
}
export default createScence;
