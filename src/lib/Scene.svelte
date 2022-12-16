<script>
import { T, OrbitControls, InteractiveObject } from '@threlte/core'
import { GLTF, Float, ContactShadows, Environment, HTML, Text, useGltf, useCursor } from '@threlte/extras';
import { MeshStandardMaterial, Color } from 'three';
import { writable } from 'svelte/store'

export let color

// additional features
 // create random colors for all
 // show color in text in a list
 // on click copy color to clipboard

 // create a random hex color including a leading #
 const randomHex = () => '#' + Math.floor(Math.random() * 16777215).toString(16)

const createRandomColors = () => {
    // get all meshes
    const materials = $gltf?.materials

    // loop through all materials
    for (const material in materials) {
        console.log('material', material)
        // set random color
        materials[material].color = new Color(randomHex())
    }
}

  const { gltf } = useGltf('/shoe-draco.glb', {
    useDraco: true
  })
  


  // onClick
    const onClick = (e) => {
        e.detail.object.material.color = new Color(color);
    }

    // onPointerEnter
    const onPointerEnter = (e) => {
        console.log('enter', e.detail.object.material.color)
        //e.detail.object.material.color = new Color(0x000000);
    }

    // onPointerLeave
    const onPointerLeave = (e) => {
        console.log('leave')
        //e.detail.object.material.color = new Color(0xffffff);
    }

    const { onPointerEnter: cursorEnter, onPointerLeave: cursorLeave  } = useCursor();

    // $: if ($hovering) {
    //     //get the current material of the hovered object
    //     console.log('hovering', $hovering)
    //     // get the current hovered mesh
    //     const mesh = $hovering.object;

    // }
    // else {
    //     //material.color = new Color(0xc62004);
    // }

    
</script>





{#if $gltf}
 <Float>
   
  <T.Group position={[0, 0, 0]}>

    


    <button on:click={() => createRandomColors()}>Random colors</button>
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

<!-- create a box  -->
<T.Mesh position={[4, 0, 0]} castShadow let:ref>
    <T.BoxBufferGeometry attach="geometry" args={[1, 1, 1]} />
    <T.MeshStandardMaterial attach="material" color="hotpink" />
    <InteractiveObject 
            object={ref}
            interactive 
            on:click={createRandomColors} 
           
            />
</T.Mesh>


<ContactShadows scale={5} blur={2.4} far={2.5} opacity={0.4} position={{ y: -1 }}/>
<!-- <Environment path="/hdr/" files="potsdamer_platz_1k.hdr" isBackground={false}/> -->
<T.AmbientLight intensity={0.7} />
<T.SpotLight intensity={0.5} angle={0.1} penumbra={1} position={[10, 15, 10]} castShadow />

<T.PerspectiveCamera makeDefault near={0.1} far={1000} zoom={1} position={[-4, 4, 4]}>
    <OrbitControls 
         enableDamping
         enableZoom={false}
         target={{ y: 0.5 }}
          />
</T.PerspectiveCamera>

