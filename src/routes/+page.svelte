<script>
    import { Canvas, InteractiveObject, OrbitControls, T } from '@threlte/core'
    import Scene from '../lib/Scene.svelte'
    import ColorPicker from 'svelte-awesome-color-picker';

    let hex;
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
  
<div class="canvas-wrapper">
    <Canvas>
        <Scene color={hex} />
    </Canvas>
</div>

<div class="color-picker-div">
    <ColorPicker bind:hex label="Pick a color and apply it to the model 
    " isOpen={false} isPopup={false} isAlpha={false}/>
</div>

<section class="cta">
	<button on:click={buy} class:loading disabled={loading}>
		{#if loading}
			Please wait...
		{:else}
			Buy now
		{/if}
	</button>
</section>


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
    .color-picker-div {
        position: fixed;
        top: 70%;
        left: 25%;
        width: 300px;
    }

    :global(.color-picker > label) {
        font-size: 20px;
    }


    :global(.color-picker > label > div) {
        width: 1em;
        height: 1em;
    }

    :global(.color-picker > label > div > input) {
        width: 5em;
        height: 5em;
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
		position: fixed;
		bottom: 0px;
		width: 100vw;
		padding: 1rem;
	}
	.cta button {
		background: white;
		color: black;
		font-size: 1.3rem;
		border: 1px solid #8460bf;
		border-radius: 3px;
		padding: 1rem;
		width: 100%;
	}
	.cta button:hover {
		background: #8460bf;
        color: white;
	}
	@media screen and (min-width: 480px) {
		
	}
	@media screen and (min-width: 768px) {
		.cta {
			right: 0px;
			width: 200px;
		}
	}
	@media screen and (min-width: 1024px) {
		.cta {
			right: 0px;
			top: 0px;
			width: 200px;
		}
	}
</style>
  