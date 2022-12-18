<script>
    import { Canvas, InteractiveObject, OrbitControls, T } from '@threlte/core'
    import Scene from '../lib/Scene.svelte'
    import ColorPicker from 'svelte-awesome-color-picker';

    let hex;
</script>
  
<div class="canvas-wrapper">
    <Canvas>
        <Scene color={hex} />
    </Canvas>
</div>

<div class="color-picker-div">
    <ColorPicker bind:hex label="Pick a color 
    " isOpen isPopup={false} isAlpha={false}/>
</div>

<style lang="">
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
        position: fixed;
        top: 45%;
        left: 10%;
        width: 300px;
}

:global(.color-picker > label) {
    font-size: 40px;
}


:global(.color-picker > label > div) {
    width: 3em;
    height: 3em;
}

:global(.color-picker > label > div > input) {
    width: 10em;
    height: 10em;
}
</style>
  