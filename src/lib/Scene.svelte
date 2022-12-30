<script>
import { T, OrbitControls, InteractiveObject } from '@threlte/core'
import { Float, ContactShadows, HTML, useGltf } from '@threlte/extras';
import { Color } from 'three';
import { storeSelectedMesh } from '../store/store';

export let color

$: nodes = $gltf?.nodes;
$: materials = $gltf?.materials;
$: newColor = color

let selectedMesh = null
let currentColor
let currentMeshName = ''
let hoveredMesh = null
let hoveredMeshColor = null

const { gltf } = useGltf('/shoe-draco.glb', {
    useDraco: true
})

const onClick = (e) => {
    selectedMesh = e.detail.object
    currentMeshName = e.detail.object.material.name
    // set the selected mesh to the store
    storeSelectedMesh.set(currentMeshName)
    currentColor = e.detail.object.material.color
    newColor = currentColor
}

// change the color of the selected mesh
$: if (selectedMesh) {
    selectedMesh.material.color = new Color(newColor);
}

// // onPointerEnter
const onPointerEnter = (e) => {
    hoveredMesh = e.detail.object.material.name
    hoveredMeshColor = e.detail.object.material.color

    // convert rgba to hex
    hoveredMeshColor = hoveredMeshColor.getHexString()
}


$: if (hoveredMesh) {
    const cursor = `<svg width="64" height="64" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0)"><path fill="rgba(255, 255, 255, 0.5)" d="M29.5 54C43.031 54 54 43.031 54 29.5S43.031 5 29.5 5 5 15.969 5 29.5 15.969 54 29.5 54z" stroke="#000"/><g filter="url(#filter0_d)"><path d="M29.5 47C39.165 47 47 39.165 47 29.5S39.165 12 29.5 12 12 19.835 12 29.5 19.835 47 29.5 47z"
            fill="#${hoveredMeshColor}"/></g><path d="M2 2l11 2.947L4.947 13 2 2z" fill="#000"/><text fill="#000" style="white-space:pre" font-family="Inter var, sans-serif" font-size="10" letter-spacing="-.01em"><tspan x="35" y="63">${hoveredMesh}</tspan></text></g><defs><clipPath id="clip0"><path fill="#fff" d="M0 0h64v64H0z"/></clipPath><filter id="filter0_d" x="6" y="8" width="47" height="47" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dy="2"/><feGaussianBlur stdDeviation="3"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"/><feBlend in2="BackgroundImageFix" result="effect1_dropShadow"/><feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape"/></filter></defs></svg>`;
    document.body.style.cursor = `url('data:image/svg+xml;base64,${btoa(cursor)}'), auto`;
} else {
    const auto = `<svg width="64" height="64" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill="rgba(255, 255, 255, 0.5)" d="M29.5 54C43.031 54 54 43.031 54 29.5S43.031 5 29.5 5 5 15.969 5 29.5 15.969 54 29.5 54z" stroke="#000"/><path d="M2 2l11 2.947L4.947 13 2 2z" fill="#000"/></svg>`;
    document.body.style.cursor = `url('data:image/svg+xml;base64,${btoa(auto)}'), auto`;
}
</script>

<HTML position={{x:0,y:0,z:0}}>
    <h1>{currentMeshName}</h1>
 </HTML>

{#if $gltf}
 <Float>
   
  <T.Group position={[0, 0, 0]}>
    
    <!-- Laces -->
    <T.Mesh 
        let:ref 
        geometry={nodes.shoe.geometry}
		material={materials.laces}
        position={[0, 0, 0]}
    >   
        <InteractiveObject 
            object={ref}
            interactive 
            on:click={onClick} 
            on:pointerenter={onPointerEnter}
			on:pointerleave={() => (hoveredMesh = null)}
            />
    </T.Mesh>
    

    <!-- Mesh -->
    <T.Mesh 
        let:ref 
        geometry={$gltf.nodes['shoe_1'].geometry}
        material={$gltf.materials['mesh']}
        position={[0, 0, 0]}
    >   
    <InteractiveObject 
        object={ref}
        interactive 
        on:click={onClick}
        on:pointerenter={onPointerEnter}
		on:pointerleave={() => (hoveredMesh = null)}
    />
    </T.Mesh>
    

    <!-- Caps -->
    <T.Mesh 
        let:ref 
        geometry={$gltf.nodes['shoe_2'].geometry}
        material={$gltf.materials['caps']}
        position={[0, 0, 0]}
    >   
    <InteractiveObject 
            object={ref}
            interactive 
            on:click={onClick}
            on:pointerenter={onPointerEnter}
			on:pointerleave={() => (hoveredMesh = null)}
            />
    </T.Mesh>
    

    <!-- Inner -->
    <T.Mesh 
    let:ref 
    geometry={$gltf.nodes['shoe_3'].geometry}
    material={$gltf.materials['inner']}
    position={[0, 0, 0]}
    >   
    <InteractiveObject 
            object={ref}
            interactive 
            on:click={onClick}
            on:pointerenter={onPointerEnter}
			on:pointerleave={() => (hoveredMesh = null)}
            />
    </T.Mesh>
    
    <!-- Sole -->
    <T.Mesh 
        let:ref 
        geometry={$gltf.nodes['shoe_4'].geometry}
        material={$gltf.materials['sole']}
        position={[0, 0, 0]}
    >   
    <InteractiveObject 
            object={ref}
            interactive 
            on:click={onClick}
            on:pointerenter={onPointerEnter}
			on:pointerleave={() => (hoveredMesh = null)}
            />
    </T.Mesh>

    <!-- Stripes -->
    <T.Mesh 
        let:ref 
        geometry={$gltf.nodes['shoe_5'].geometry}
        material={$gltf.materials['stripes']}
        position={[0, 0, 0]}
    >

    <InteractiveObject 
            object={ref}
            interactive 
            on:click={onClick}
            on:pointerenter={onPointerEnter}
			on:pointerleave={() => (hoveredMesh = null)}
            />
    </T.Mesh>
   
    <!-- Band -->
    <T.Mesh 
        let:ref 
        geometry={$gltf.nodes['shoe_6'].geometry}
        material={$gltf.materials['band']}
        position={[0, 0, 0]}
    >   
    <InteractiveObject 
            object={ref}
            interactive 
            on:click={onClick}
            on:pointerenter={onPointerEnter}
			on:pointerleave={() => (hoveredMesh = null)}
            />
    </T.Mesh>
    <!-- Patch -->
    <T.Mesh 
        let:ref 
        geometry={$gltf.nodes['shoe_7'].geometry}
        material={$gltf.materials['patch']}
        position={[0, 0, 0]}
    >   
    <InteractiveObject 
            object={ref}
            interactive 
            on:click={onClick}
            on:pointerenter={onPointerEnter}
			on:pointerleave={() => (hoveredMesh = null)}
            />
    </T.Mesh>
    
  </T.Group>
</Float>
{/if}

<ContactShadows scale={5} blur={2.4} far={2.5} opacity={0.4} position={{ y: -1 }}/>
<T.AmbientLight intensity={0.7} />

<T.SpotLight intensity={0.5} angle={0.1} penumbra={1} position={[10, 15, 10]} castShadow />

<T.PerspectiveCamera makeDefault near={0.1} far={1000} zoom={1} position={[0, 2, 4]}>
    <OrbitControls
    minPolarAngle={Math.PI / 2} maxPolarAngle={Math.PI / 2}
         enableDamping
         enableZoom={false}
         enablePan={false}
          />
</T.PerspectiveCamera>

<style>
    h1 {
        font-size: 8em;
        z-index: 1000;
        
    }

    @media only screen and (max-width: 600px) {
        h1 {
            font-size: 5em;
        }
    }
</style>