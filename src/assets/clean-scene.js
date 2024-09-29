function cleanScene(scene, renderer) {
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
export default cleanScene;
