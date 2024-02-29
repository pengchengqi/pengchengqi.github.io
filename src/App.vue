<template>
  <div>
    <div id="container"></div>
  </div>
</template>

<script>
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { STLLoader } from 'three/examples/jsm/loaders/STLLoader.js'

export default {
  data() {
    return {
      // publicPath: process.env.BASE_URL,
      mesh: null,
      camera: null,
      scene: null,
      renderer: null,
      controls: null
    }
  },
  mounted() {
    this.init()
  },
  methods: {
    // 初始化
    init() {
      this.createScene() // 创建场景
      this.loadSTL() // 加载STL模型
      this.createLight() // 创建光源
      this.createCamera() // 创建相机
      this.createRender() // 创建渲染器
      this.createControls() // 创建控件对象
      this.render() // 渲染
    },
    // 创建场景
    createScene() {
      this.scene = new THREE.Scene()
      var textureLoader = new THREE.TextureLoader()
// 加载背景图片
      var texture = textureLoader.load('/bg.jpg')
      this.scene.background = texture
    },
    // 加载STL模型
    loadSTL() {
      const THIS = this
      const loader = new STLLoader()
      loader.load(
        `/test.stl`,
        geometry => {
          // 创建材质
          const material = new THREE.MeshLambertMaterial({ color: 0xFFFF00 })
          this.mesh = new THREE.Mesh(geometry, material)
          this.mesh.rotation.x = -0.5 * Math.PI
          this.mesh.scale.set(0.005, 0.005, 0.005)
          geometry.center()
          this.scene.add(this.mesh)
        }
      )
    },

    // 创建光源
    createLight() {
      // 环境光
      const ambientLight = new THREE.AmbientLight(0xFFFFFF, 0.5) // 创建环境光
      this.scene.add(ambientLight) // 将环境光添加到场景

      // const spotLight = new THREE.SpotLight(0xFFD700) // 创建聚光灯
      // spotLight.position.set(150, 150, 150)
      // spotLight.castShadow = true
      // this.scene.add(spotLight)

      const light = new THREE.DirectionalLight(0xFFFFFF, 0.5)
      light.position.set(0, 0, 600)
      this.scene.add(light)
    },
    // 创建相机
    createCamera() {
      const element = document.getElementById('container')
      const width = element.clientWidth // 窗口宽度
      const height = element.clientHeight // 窗口高度
      const k = width / height // 窗口宽高比
      // PerspectiveCamera( fov, aspect, near, far )
      this.camera = new THREE.PerspectiveCamera(35, k, 0.1, 1000)
      this.camera.position.set(250, 250, 150) // 设置相机位置

      this.camera.lookAt(new THREE.Vector3(10, 40, 0)) // 设置相机方向
      this.scene.add(this.camera)
    },
    // 创建渲染器
    createRender() {
      const element = document.getElementById('container')
      this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
      this.renderer.setSize(element.clientWidth, element.clientHeight) // 设置渲染区域尺寸
      this.renderer.shadowMap.enabled = true // 显示阴影
      this.renderer.shadowMap.type = THREE.PCFSoftShadowMap
      this.renderer.setClearColor(0xffffff, 1) // 设置背景颜色
      element.appendChild(this.renderer.domElement)
    },

    render() {
      if (this.mesh) {
        this.mesh.position.x -= 0.2
      }
      this.renderer.render(this.scene, this.camera)
      requestAnimationFrame(this.render)
    },
    // 创建控件对象
    createControls() {
      this.controls = new OrbitControls(this.camera, this.renderer.domElement)
    }
  }
}
</script>
<style>
#container {
  position: absolute;
  width: 80%;
  height: 80%;
}
</style>

