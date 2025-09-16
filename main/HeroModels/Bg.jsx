import React, { useRef, useState, Suspense, useEffect } from 'react'
import { useFrame } from '@react-three/fiber'
import { useGLTF, Text } from '@react-three/drei'
import { Vector3 } from 'three'

const FuturaMedium = '../../src/fonts/Futura Medium.ttf'
const FuturaLight = '../../src/fonts/Futura Light.ttf'
const FuturaLightItalic = '../../src/fonts/Futura Light Italic.ttf'


export function Room({ onTogglePopup, disableInteraction, ...props }) {
    const { nodes, materials } = useGLTF('/models/new.glb')
    const [hovered, setHovered] = useState(null)
    const [scale, setScale] = useState(0.8); // Default scale of the text
    const [initialLoad, setInitialLoad] = useState(true); // Flag to track initial load
    const [isMobile, setIsMobile] = useState(false)   // 🔹 detect phone/tablet

    // Detect if on mobile/tablet
    useEffect(() => {
        const checkScreen = () => {
            setIsMobile(window.innerWidth <= 1200) // treat <=1024px as tablet/phone
        }
        checkScreen()
        window.addEventListener('resize', checkScreen)
        return () => window.removeEventListener('resize', checkScreen)
    }, [])

    // ---- CONFIG ----
    const hoverFactor = 1.2    // 20% larger on hover
    const fileHoverFactor = 0.84
    const hoverSpeed  = 5      // lerp speed
    const hoverLifts  = {
        Cube012: 0.2, // RIGHT
        Cube001: 0.2, // LEFT
    }
    const monitorScale = 1
    const baseScales = {
        Cube012: monitorScale,
        Cube024: monitorScale,
        Cube033: monitorScale,
        Cube032: monitorScale,
        Cube001: monitorScale,
        file: 0.7,
    }

    // ---- REFS ----
    const refs = {
        Cube012: useRef(),
        Cube024: useRef(),
        Cube033: useRef(),
        Cube032: useRef(),
        Cube001: useRef(),
        file:    useRef(),
    }

    const positions = {
        Cube012: [1.9291,  5.9032, -0.87501],
        Cube024: [-0.026,   8.177,  -1.288  ],
        Cube033: [4.316,    8.166,  -1.196  ],
        Cube032: [-3.873,   8.354,  -0.94   ],
        Cube001: [-1.615,   5.8483, -0.99479],
        file:    [3.918,    3.822,   1.34   ],
    }
    const overlaySizes = {
        Cube012: [2.9, 1.72], // Graphic Design
        Cube024: [3.8, 2.2],  // Production
        Cube033: [3.9, 2.3],  // Premiere Pro
        Cube032: [3.5, 2.1],  // Photography
        Cube001: [2.7, 1.5],  // 3D Modeling
    }
    const overlayPositions = {
        Cube012: [0, 0.26, 0.1],
        Cube024: [0, 0.24, 0.1],
        Cube033: [0, 0.23, 0.1],
        Cube032: [0, -0.05, 0.1],
        Cube001: [0, 0.3, 0.1],
    }

    // Preallocate target vectors
    const targetScale = new Vector3()
    const targetPos   = new Vector3()
    const time = useRef(0)

    // ---- ANIMATION LOOP ----
    useFrame((_, delta) => {
        Object.entries(refs).forEach(([key, refObj]) => {
            const ref = refObj.current;
            if (!ref) return;

            // scale lerp
            const base = baseScales[key]; // base scale for the object
            const s = hovered === key ? (key === 'file' ? fileHoverFactor : hoverFactor) : base;
            ref.scale.lerp(new Vector3(s, s, s), delta * hoverSpeed);

            if (hoverLifts[key] != null) {
                const [x, y, z] = positions[key];
                const lift = hovered === key ? hoverLifts[key] : 0;
                ref.position.lerp(targetPos.set(x, y + lift, z), delta * hoverSpeed);
            }
        });

        // Smoothly interpolate the text scale only when hovered
        if (hovered === 'file') {
            setScale(prev => Math.min(prev + 0.1 * delta, fileHoverFactor)); // Gradually increase scale
        } else {
            setScale(prev => Math.max(prev - 0.1 * delta, 0.8)); // Gradually decrease scale back to 1
        }
    });


    // Toggle popup
      const handlePopupToggle = key =>
          onTogglePopup(prev => (prev === key ? null : key))


    return (
        <>
            {/* Main 3D scene */}
            <group {...props} dispose={null} position={[0, -6, 0]}>
                {/* Preload font */}
                <Text font={FuturaLight} fontSize={0} visible={false}>
                    .
                </Text>

                {/* HOVERABLE MONITORS */}
                {['Cube012','Cube024','Cube033','Cube032','Cube001'].map(key => {
                    const [w, h] = overlaySizes[key]
                    const [ox, oy, oz] = overlayPositions[key]
                    const info = {
                        Cube012: { pos:[1.9291, 5.9032, -0.87501], rot:[0,0,0], text:'Graphic Design' },
                        Cube024: { pos:[-0.026,8.177,-1.288],      rot:[0.122,0,0], text:'Video Production' },
                        Cube033: { pos:[4.516,8.166,-1.196],      rot:[0.176,-0.141,0.025], text:'Video Editing' },
                        Cube032: { pos:[-4.173,8.354,-0.94],      rot:[0,0.105,0], text:'3D Modeling' },
                        Cube001: { pos:[-1.615,5.8483,-0.99479],  rot:[0,0,0], text:'Photography' },
                    }[key]
                    const matA = key === 'Cube012' ? 'kelly illustrator'
                        : key === 'Cube024' ? 'machine 1'
                            : key === 'Cube033' ? 'premiere'
                                : 'machine 2'
                    const matB = key === 'Cube024' ? 'days of being wild'
                        : key === 'Cube033' ? 'machine 2'
                            : key === 'Cube032' ? '3d game'
                                : key === 'Cube001' ? 'black myth'
                                    : 'machine 1'

                    return (
                        <group
                            key={key}
                            ref={refs[key]}
                            position={info.pos}
                            rotation={info.rot}
                            scale={[baseScales[key], baseScales[key], baseScales[key]]}
                            onPointerEnter={
                                !disableInteraction
                                  ? e => (e.stopPropagation(), setHovered(key))
                                      : undefined
                            }
                            onPointerLeave={
                                !disableInteraction
                                  ? e => (e.stopPropagation(), setHovered(null))
                                      : undefined
                            }
                            onClick={
                                !disableInteraction
                                  ? () => handlePopupToggle(key)
                                      : undefined
                            }
                        >
                            <mesh geometry={nodes[key].geometry} material={materials[matA]} />
                            <mesh
                                geometry={nodes[`${key}_1`].geometry}
                                material={materials[matB]}
                            />

                            {hovered === key && (
                                <Suspense fallback={null}>
                                    <group>
                                        <mesh raycast={() => null} position={[ox, oy, oz]}>
                                            <planeGeometry args={[w, h]} />
                                            <meshBasicMaterial
                                                color="black"
                                                transparent
                                                opacity={0.7}
                                            />
                                        </mesh>
                                        <Text
                                            raycast={() => null}
                                            position={[ox, oy, oz + 0.05]}
                                            font={FuturaLight}
                                            fontSize={0.3}
                                            anchorX="center"
                                            anchorY="middle"
                                        >
                                            {info.text}
                                        </Text>
                                    </group>
                                </Suspense>
                            )}
                        </group>
                    )
                })}

                {/* FILE (always visible with hover animation) */}
                <group
                    ref={refs.file}
                    position={[3.918, 3.822, 1.34]}
                    rotation={[0, -0.603, 0]}
                    onPointerEnter={e => (e.stopPropagation(), setHovered('file'))}
                    onPointerLeave={e => (e.stopPropagation(), setHovered(null))}
                    onClick={() => handlePopupToggle('file')}
                    scale={[ baseScales.file, baseScales.file, baseScales.file ]}
                >
                    <mesh
                        geometry={nodes.A4_Page1Shape_6_0.geometry}
                        material={materials.A4_Page1Shape}
                    />
                    <mesh
                        geometry={nodes.A4_Page1Shape_6_0_1.geometry}
                    >
                        <meshStandardMaterial color="#47474c" />
                    </mesh>

                    {/* BIG INVISIBLE CLICK TARGET (hitbox) */}
                    <mesh
                        position={[0, 0.05, 0.15]}   // a little in front of the file
                        onPointerEnter={(e) => { e.stopPropagation(); setHovered('file'); }}
                        onPointerLeave={(e) => { e.stopPropagation(); setHovered(null); }}
                        onClick={(e) => { e.stopPropagation(); onTogglePopup(prev => prev === 'file' ? null : 'file'); }}
                    >
                        {/* adjust size to comfortably cover the file */}
                        <boxGeometry args={[1.5, 2.0, 0.2]} />
                        <meshBasicMaterial transparent opacity={0} depthWrite={false} />
                    </mesh>

                    {/* Show About Me text ONLY on desktop */}
                    {!isMobile && (
                        <Text
                            position={[-0.2, 0.1, 0.2]}
                            font={FuturaMedium}
                            fontSize={0.4}
                            lineHeight={1.5}
                            color="#363639"
                            anchorX="center"
                            anchorY="middle"
                            rotation={[-Math.PI / 2, 0, 0]}
                            scale={[scale, scale, 1]}
                        >
                            {`About &\nContact`}
                        </Text>
                    )}

                </group>

                {/* STATIC PARTS */}
                <group {...props} dispose={null}>
                    <mesh geometry={nodes.Cube.geometry} material={materials.bg} position={[0, 6, 6]} scale={[3, 1.32, 1.8]} />

                    <group position={[0.984, 3.969, -0.355]} rotation={[0, -Math.PI / 2, 0]}>
                        <mesh geometry={nodes.Cube029.geometry} material={materials['machine 2']} />
                        <mesh geometry={nodes.Cube029_1.geometry} material={materials.metal} />
                        <mesh geometry={nodes.Cube029_2.geometry} material={materials['Sharp green']} />
                        <mesh geometry={nodes.Cube029_3.geometry} material={materials.button} />
                        <mesh geometry={nodes.Cube029_4.geometry} material={materials.mic} />
                    </group>

                    <group
                        position={[2.498, 3.959, -0.34]}
                        rotation={[1.396, -Math.PI / 2, 0]}
                        scale={[0.403, 0.306, 0.403]}
                    >
                        <mesh geometry={nodes.Cylinder002.geometry} material={materials.button} />
                        <mesh geometry={nodes.Cylinder002_1.geometry} material={materials['machine 1']} />
                        <mesh geometry={nodes.Cylinder002_2.geometry} material={materials['Sharp green']} />
                        <mesh geometry={nodes.Cylinder002_3.geometry} material={materials.metal} />
                        <mesh geometry={nodes.Cylinder002_4.geometry} material={materials.table} />
                    </group>

                    <group
                        position={[-1.761, 3.997, -0.391]}
                        rotation={[1.396, -Math.PI / 2, 0]}
                        scale={[1, 0.38, 0.48]}
                    >
                        <mesh geometry={nodes.Cube007_1.geometry} material={materials.metal} />
                        <mesh geometry={nodes.Cube007_2.geometry} material={materials.Red} />
                        <mesh geometry={nodes.Cube007_3.geometry} material={materials.Blue} />
                        <mesh geometry={nodes.Cube007_4.geometry} material={materials.Material} />
                        <mesh geometry={nodes.Cube007_5.geometry} material={materials['machine 2']} />
                        <mesh geometry={nodes.Cube007_6.geometry} material={materials.button} />
                    </group>

                    <group
                        position={[-4.044, 4.666, -0.584]}
                        rotation={[-0.244, -Math.PI / 2, 0]}
                        scale={[0.18, 0.12, 0.44]}
                    >
                        <mesh geometry={nodes.Cube026.geometry} material={materials.button} />
                        <mesh geometry={nodes.Cube026_1.geometry} material={materials['machine 1']} />
                        <mesh geometry={nodes.Cube026_2.geometry} material={materials['machine 2']} />
                        <mesh geometry={nodes.Cube026_3.geometry} material={materials.metal} />
                        <mesh geometry={nodes.Cube026_4.geometry} material={materials.mic} />
                    </group>

                    <mesh
                        geometry={nodes.defaultMaterial.geometry}
                        material={materials.DefaultMaterial}
                        position={[-1.224, 3.798, 0.558]}
                        rotation={[0, -0.063, 0]}
                    />
                    <mesh
                        geometry={nodes.chinese_keyboard.geometry}
                        material={materials['chinese keyboard']}
                        position={[-2.525, 3.779, 1.731]}
                        rotation={[Math.PI / 2, 0, 0.087]}
                        scale={0.115}
                    />
                    <mesh
                        geometry={nodes.Mouse1.geometry}
                        material={materials['machine 1']}
                        position={[0.733, 3.774, 1.8]}
                        rotation={[Math.PI / 2, 0, Math.PI / 2]}
                        scale={0.012}
                    />
                    <mesh
                        geometry={nodes.Mouse2.geometry}
                        material={materials['machine 2']}
                        position={[1.454, 3.741, 0.923]}
                        rotation={[Math.PI / 2, 0, 2.741]}
                        scale={0.061}
                    />
                    <mesh
                        geometry={nodes.table.geometry}
                        material={materials.table}
                        position={[-0.054, 3.604, 0.252]}
                        rotation={[0, -Math.PI / 2, 0]}
                    />
                    <mesh
                        geometry={nodes.table_legs.geometry}
                        material={materials.table}
                        position={[-4.664, 1.725, 2.099]}
                        rotation={[0, -Math.PI / 2, 0]}
                        scale={[1, 1.73, 1]}
                    />
                </group>
            </group>
        </>
    );
}

useGLTF.preload('../../src/models/new.glb')
