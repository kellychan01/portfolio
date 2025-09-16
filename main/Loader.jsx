import React from 'react'
import { Html, useProgress } from '@react-three/drei'

export function Loader() {
    const { progress } = useProgress()
    return (
        <Html fullscreen>
            <div className="loading-screen">
                <div className="spinner" />
                <p className="loading-text">{progress.toFixed(0)}%</p>
            </div>
        </Html>
    )
}