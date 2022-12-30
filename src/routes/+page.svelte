<script>
    import { Canvas } from '@threlte/core'
    import Scene from '../lib/Scene.svelte'
    import ColorPicker from 'svelte-awesome-color-picker';
    import { storeSelectedMesh } from '../store/store';
    
    $: hex = '#ffffff';

    let loading = false;
   
    async function buy() {
		loading = true;
		const response = await fetch('/checkout', {
			method: 'POST',
			body: JSON.stringify({
				quantity: 1
			})
		});
		const { url } = await response.json();
		window.location.href = url;
		setTimeout(() => loading = false)
	}
</script>

{#if $storeSelectedMesh}
    <div class="selected-mesh">
        <h1>{$storeSelectedMesh}</h1>
    </div>
{/if}

<div class="canvas-wrapper">
    <Canvas>
        <Scene color={hex}/>
    </Canvas>
</div>

<div class="color-picker-div">
    <ColorPicker bind:hex label="" isOpen={true} isPopup={false} isAlpha={false} isTextInput={false}/>
</div>

<section class="cta">
	<button on:click={buy} class:loading disabled={loading}>
		{#if loading}
			Loading
		{:else}
			Buy now
		{/if}
	</button>
</section>

<style>

.canvas-wrapper {
    position: fixed;
    top: 0;
    left:0;
    width: 100vw;
    height: 100vh;
}

.color-picker-div {
        position: fixed;
        top: 50%;
        left: 5%;
        width: 300px;
        z-index: 100;
}

/* center the selected mesh */
.selected-mesh {
    position: fixed;
    font-size: 4em;
    top: 20%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 100;
}

:global(.color-picker > label) {
    font-size: 20px;
}


:global(.color-picker > label > div) {
    width: 3em;
    height: 3em;
}

:global(.color-picker > label > div > input) {
    width: 3em;
    height: 3em;
}

/* mobile styles for the color picker */
@media only screen and (max-width: 600px) {
    .selected-mesh {
        font-size: 2em;
    }
    
    .color-picker-div {
        position: fixed;
        top: 75%;
        left: 15%;
        width: 300px;
    }

    :global(.picker-wrapper ) {
        width: 100px !important;
        height: 100px !important;
    }
    :global(.color-picker) {
        --picker-width: 100px;
        --picker-height: 100px;
    }   

}

.cta {
        position:fixed;
        top: 20px;
        right: 20px;
       
	}
	.cta button {
		background: darkred;
        font-family: "West";
		color: white;
		font-size: 1.3rem;
		border: 1px solid darkred;
		border-radius: 3px;
		padding: 1rem;
		width: 100%;
	}

	.cta button:hover {
		background: rgb(163, 17, 17);
        color: white;
        cursor: pointer;
	}
	
	@media screen and (min-width: 768px) {
		.cta {
			right: 0px;
            top: 20px;
			width: 200px;
		}
	}
	@media screen and (min-width: 1024px) {
		.cta {
			right: 20px;
			top: 20px;
			width: 200px;
		}
	}
</style>
  