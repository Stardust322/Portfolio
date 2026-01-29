"use client";

import React, { useState, useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
// @ts-ignore
import * as random from "maath/random/dist/maath-random.esm";

const StarBackground = (props: any) => {
  const ref = useRef<any>(null);

  const [sphere] = useState(() => {
    // 1. 별의 개수를 5,000개에서 15,000개(array size)로 늘립니다. (실제 별 개수: 5,000개)
    // 2. radius(반경)를 1.2에서 1.5로 키워 별들을 더 넓게 퍼뜨립니다.
    const data = random.inSphere(new Float32Array(15000), { radius: 1.5 });
    
    for (let i = 0; i < data.length; i++) {
      if (isNaN(data[i])) data[i] = 0;
    }
    return data;
  });

  useFrame((state, delta) => {
    if (ref.current) {
      // 3. 회전 속도를 아주 약간만 늦춰서 더 은은하게 움직이도록 조절합니다.
      ref.current.rotation.x -= delta / 15;
      ref.current.rotation.y -= delta / 20;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points
        ref={ref}
        positions={sphere}
        stride={3}
        frustumCulled={false}
        {...props}
      >
        <PointMaterial
          transparent
          color="#ffffff"
          size={0.002} // 별이 너무 크면 뭉쳐 보입니다. 0.002가 가장 적당합니다.
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const StarsCanvas = () => (
  <div className="w-full h-full fixed inset-0 z-[20] pointer-events-none">
    <Canvas camera={{ position: [0, 0, 1] }}>
      <Suspense fallback={null}>
        <StarBackground />
      </Suspense>
    </Canvas>
  </div>
);

export default StarsCanvas;