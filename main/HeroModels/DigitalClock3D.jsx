import React, { useState, useEffect } from 'react'
import { Html, Edges } from '@react-three/drei'

export function DigitalClock3D({
       position = [1.5, 5, -1],
       width    = 6,
       height   = 0.8,
       depth    = 0.2,
   }) {
    const [now, setNow] = useState(new Date())

    useEffect(() => {
        const id = setInterval(() => setNow(new Date()), 1000)
        return () => clearInterval(id)
    }, [])

    const hh      = now.getHours().toString().padStart(2, '0')
    const mm      = now.getMinutes().toString().padStart(2, '0')
    const ss      = now.getSeconds().toString().padStart(2, '0')
    const timeStr = `${hh}:${mm}:${ss}`

    const days = ['SUN','MON','TUE','WED','THU','FRI','SAT']
    const day  = days[now.getDay()]

    const months = ['JAN','FEB','MAR','APR','MAY','JUN','JUL','AUG','SEP','OCT','NOV','DEC']
    const mon     = months[now.getMonth()]
    const date    = now.getDate().toString().padStart(2,'0')
    const dateStr = `${mon} ${date}`

    return (
        <group position={position}>
            {/* 3D background for depth */}
            <mesh>
                <boxGeometry args={[width, height, depth]} />
                <meshStandardMaterial color="black" />
            </mesh>

            {/* HTML overlay on the front face */}
            <Html
                prepend
                position={[0, 0, depth / 2 + 0.001]}
                center
                transform
                occlude
                distanceFactor={1.3}
                zIndexRange={[1, 1]}
                style={{ pointerEvents: 'none'}}
            >
                <div className="digital-clock-inline" style={{ zIndex: 0 }}>
                    <span className="time">{timeStr}</span>
                    <span className="sep">|</span>
                    <span className="day">{day}</span>
                    <span className="sep">|</span>
                    <span className="date">{dateStr}</span>
                </div>
            </Html>
        </group>
    )
}
