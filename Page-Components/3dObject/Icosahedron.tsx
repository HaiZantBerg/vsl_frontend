"use client";

import { useRef } from "react";
import { Canvas } from "@react-three/fiber";

export default function Icosahedron() {
    const cubeRef = useRef(null);

    return (
        <Canvas>
            <mesh ref={cubeRef}>
                <icosahedronGeometry />
            </mesh>
        </Canvas>
    );
}
