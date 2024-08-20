"use client";

import { useRef, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";

export default function IcosahedronCanvas({
    shapeColor,
    rotatingSpeed,
}: {
    shapeColor: string;
    rotatingSpeed: number;
}) {
    return (
        <Canvas>
            <ambientLight intensity={5} />
            <Icosahedron
                shapeColor={shapeColor}
                rotatingSpeed={rotatingSpeed}
            />
        </Canvas>
    );
}

function Icosahedron({
    shapeColor,
    rotatingSpeed,
}: {
    shapeColor: string;
    rotatingSpeed: number;
}) {
    const icosahedronRef = useRef<any>();

    const testRef = useRef<any>();

    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    useEffect(() => {
        console.log(testRef.current);
    }, [isMounted]);

    useEffect(() => {
        console.log(icosahedronRef.current);
        icosahedronRef.current.rotation.z = 100;
        icosahedronRef.current.rotation.x = 0;
    }, [isMounted]);

    useFrame((state, delta) => {
        icosahedronRef.current.rotation.y += delta * rotatingSpeed;
    });
    return (
        <mesh ref={icosahedronRef}>
            <icosahedronGeometry args={[1]} />
            <meshStandardMaterial color={shapeColor} />
            {icosahedronRef.current !== undefined ? (
                <lineSegments ref={testRef}>
                    <edgesGeometry
                        attach="geometry"
                        args={[icosahedronRef.current.geometry]}
                    />
                    <lineBasicMaterial attach="material" color="#000" />
                </lineSegments>
            ) : null}
        </mesh>
    );
}
