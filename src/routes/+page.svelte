<script>
    import { Canvas, InteractiveObject, OrbitControls, T } from '@threlte/core'
    import Scene from '../lib/Scene.svelte'
    import ColorPicker from 'svelte-awesome-color-picker';

    let hex;
</script>
  
<div class="canvas-wrapper">
    <Canvas>
        <Scene color={hex}/>
    </Canvas>
</div>

<div class="color-picker-div">
    <ColorPicker bind:hex label="hallo" isOpen isAlpha={false}/>
</div>

<style>
.canvas-wrapper {
    position: fixed;
    top: 0;
    left:0;
    width: 100vw;
    height: 100vh;
}

:global(.canvas-wrapper canvas) {
    position: absolute;
}

.color-picker-div {
        position: absolute;
        top: 50;
        left: 50;
        z-index: 100;
    }
</style>
  