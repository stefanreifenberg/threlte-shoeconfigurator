<script>
    import { Canvas } from '@threlte/core'
    import Scene from '../lib/Scene.svelte'
    import ColorPicker from 'svelte-awesome-color-picker';
    
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

<div class="canvas-wrapper">
    <div class="color-picker-div">
        <ColorPicker bind:hex label="" isOpen={true} isPopup={false} isAlpha={false} isTextInput={false}/>
    </div>
    <Canvas>
        <Scene color={hex} />
    </Canvas>
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
    position: relative;
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
        top: 80%;
        left: 10%;
        width: 300px;
        z-index: 1000;
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
        top: 75%;
        left: 15%;
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
        position:fixed;
        top: 20px;
        left: 0;
        transform: translate(calc(50vw - 50%));
        width: 80vw;
	}
	.cta button {
		background: white;
        font-family: "West";
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
	
	@media screen and (min-width: 768px) {
		.cta {
			right: 0px;
            top: 20px;
			width: 200px;
		}
	}
	@media screen and (min-width: 1024px) {
		.cta {
			right: 0px;
			top: 20px;
			width: 200px;
		}
	}
</style>
  