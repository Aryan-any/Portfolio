import { Canvas, useFrame } from "@react-three/fiber";
import { Stars, Sphere } from "@react-three/drei";
import { useRef, useEffect } from "react";
import * as THREE from "three";
import { useLoading } from "../context/LoadingProvider";
import { setProgress } from "./Loading";

function Earth() {
    const earthRef = useRef<THREE.Mesh>(null);
    const scrollRef = useRef(0);

    // Smooth mouse/scroll interpolation targets
    const targetRotation = useRef({ x: 0, y: 0 });
    const targetPosition = useRef({ x: 0, y: -2.5 }); // Base Y is -2.5

    useEffect(() => {
        const handleScroll = () => {
            scrollRef.current = window.scrollY;
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useFrame(({ clock, mouse }) => {
        if (earthRef.current) {
            const time = clock.getElapsedTime();

            // Base Rotation (Day/Night cycle)
            const baseRotation = time * 0.02; // Slower spin

            // Target Interaction based on Mouse (Parallax)
            // Clamp for mobile safety
            const mouseX = THREE.MathUtils.clamp(mouse.x, -1, 1);
            const mouseY = THREE.MathUtils.clamp(mouse.y, -1, 1);

            // Rotation Targets (Look at mouse)
            const targetRotX = THREE.MathUtils.clamp(mouseY * 0.08, -0.1, 0.1);
            const targetRotY = THREE.MathUtils.clamp(mouseX * 0.08, -0.1, 0.1);

            // Position Targets (Move slightly opposite to mouse for depth)
            const targetPosX = -mouseX * 0.2;
            const targetPosY = -2.5 + (-mouseY * 0.2); // Relative to base Y

            // Smooth Interpolation (Lerp)
            const lerpFactor = 0.03; // Even smoother damping

            targetRotation.current.x = THREE.MathUtils.lerp(targetRotation.current.x, targetRotX, lerpFactor);
            targetRotation.current.y = THREE.MathUtils.lerp(targetRotation.current.y, targetRotY, lerpFactor);

            targetPosition.current.x = THREE.MathUtils.lerp(targetPosition.current.x, targetPosX, lerpFactor);
            targetPosition.current.y = THREE.MathUtils.lerp(targetPosition.current.y, targetPosY, lerpFactor);

            // Scroll Influence
            const scrollRotation = scrollRef.current * 0.0003;

            // Apply Transforms
            earthRef.current.rotation.x = targetRotation.current.x;
            earthRef.current.rotation.y = baseRotation + targetRotation.current.y + scrollRotation;

            earthRef.current.position.x = targetPosition.current.x;
            earthRef.current.position.y = targetPosition.current.y + Math.sin(time * 0.4) * 0.05; // Gentle float
        }
    });

    return (
        <group position={[0, -2.5, 0]}>
            {/* Earth Surface - Water Planet */}
            <Sphere ref={earthRef} args={[4, 64, 64]}>
                <meshPhysicalMaterial
                    color="#ffffff" // White base
                    emissive="#e0f2fe" // Very pale blue glow
                    emissiveIntensity={0.6}
                    roughness={0.2}
                    metalness={0.1}
                    wireframe={true}
                    transparent
                    opacity={0.35}
                />
            </Sphere>

            {/* Inner Ocean Core */}
            <Sphere args={[3.9, 64, 64]}>
                <meshStandardMaterial
                    color="#38bdf8" // Sky Blue
                    roughness={0.4}
                    metalness={0.8}
                />
            </Sphere>

            {/* Atmosphere Glow - Soft Day */}
            <Sphere args={[4.4, 64, 64]}>
                <meshBasicMaterial
                    color="#bfdbfe" // Blue 200
                    transparent
                    opacity={0.15}
                    side={THREE.BackSide}
                    blending={THREE.AdditiveBlending}
                />
            </Sphere>
        </group>
    );
}

export default function EarthBackground() {
    const { setLoading } = useLoading();

    useEffect(() => {
        const { loaded, clear } = setProgress(setLoading);
        loaded();
        return () => clear();
    }, []);

    return (
        <div className="fixed inset-0 z-0 pointer-events-none opacity-60">
            <Canvas
                camera={{ position: [0, 0, 6], fov: 45 }}
                dpr={[1, 2]} // Limit pixel ratio for performance
                gl={{ antialias: true, alpha: true }}
            >
                <ambientLight intensity={1.2} />
                <pointLight position={[10, 10, 10]} intensity={2} color="#ffffff" />
                <pointLight position={[-10, -10, -5]} intensity={1.5} color="#38bdf8" />

                {/* Subtle Dust Motes/Stars */}
                <Stars radius={100} depth={50} count={800} factor={3} saturation={0} fade speed={0.5} />

                <Earth />
                <fog attach="fog" args={['#f8fafc', 5, 25]} /> {/* White fog for depth blending */}
            </Canvas>
        </div>
    );
}
