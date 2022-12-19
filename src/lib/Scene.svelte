<script>
import { T, OrbitControls, InteractiveObject } from '@threlte/core'
import { Float, ContactShadows, Environment, HTML, useGltf, useCursor } from '@threlte/extras';
import { Color } from 'three';

export let color

$: newColor = color
let selectedMesh = null
let currentColor
let currentMeshName = ''

const { gltf } = useGltf('/shoe-draco.glb', {
useDraco: true
})

  // onClick
    const onClick = (e) => {
        selectedMesh = e.detail.object
        currentMeshName = e.detail.object.material.name
        currentColor = e.detail.object.material.color
        newColor = currentColor
    }

    // change the color of the selected mesh
    $: if (selectedMesh) {
        selectedMesh.material.color = new Color(newColor);
    }

    // onPointerEnter
    const onPointerEnter = (e) => {
        //console.log('enter', e.detail.object.material.color)
    }

    // onPointerLeave
    const onPointerLeave = (e) => {
        //console.log('leave')
    }

    const { onPointerEnter: cursorEnter, onPointerLeave: cursorLeave  } = useCursor();
</script>


<HTML center position={{y:1}}>
   <h1>{currentMeshName}</h1>
</HTML>

{#if $gltf}
 <Float>
   
  <T.Group position={[0, 0, 0]}>
    <!-- Laces -->
    <T.Mesh 
        let:ref 
        geometry={$gltf.nodes['shoe'].geometry}
        material={$gltf.materials['laces']}
        position={[0, 0, 0]}
    >   
        <InteractiveObject 
            object={ref}
            interactive 
            on:click={onClick} 
            on:pointerenter={cursorEnter} 
            on:pointerenter={onPointerEnter}
            on:pointerleave={cursorLeave}
            on:pointerleave={onPointerLeave}
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
        on:pointerenter={cursorEnter} 
        on:pointerenter={onPointerEnter}
        on:pointerleave={cursorLeave}
        on:pointerleave={onPointerLeave}
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
            on:pointerenter={cursorEnter} 
            on:pointerenter={onPointerEnter}
            on:pointerleave={cursorLeave}
            on:pointerleave={onPointerLeave}
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
            on:pointerenter={cursorEnter} 
            on:pointerenter={onPointerEnter}
            on:pointerleave={cursorLeave}
            on:pointerleave={onPointerLeave}
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
            on:pointerenter={cursorEnter} 
            on:pointerenter={onPointerEnter}
            on:pointerleave={cursorLeave}
            on:pointerleave={onPointerLeave}
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
            on:pointerenter={cursorEnter} 
            on:pointerenter={onPointerEnter}
            on:pointerleave={cursorLeave}
            on:pointerleave={onPointerLeave}
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
            on:pointerenter={cursorEnter} 
            on:pointerenter={onPointerEnter}
            on:pointerleave={cursorLeave}
            on:pointerleave={onPointerLeave}
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
            on:pointerenter={cursorEnter} 
            on:pointerenter={onPointerEnter}
            on:pointerleave={cursorLeave}
            on:pointerleave={onPointerLeave}
            />
    </T.Mesh>
    
  </T.Group>
</Float>
{/if}

<ContactShadows scale={5} blur={2.4} far={2.5} opacity={0.4} position={{ y: -1 }}/>
<Environment path="/hdr/" files="potsdamer_platz_1k.hdr" isBackground={false}/>
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
        font-size: 10em;
        
    }
    @media only screen and (max-width: 600px) {
        h1 {
            font-size: 5em;
        }
    }
</style>