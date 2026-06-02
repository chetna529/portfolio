import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";
import { useTheme } from "../../hooks/useTheme";

const ParticleSphere = ({ color, ...props }) => {
  const ref = useRef(null);
  
  // Generate random floating particles inside a sphere
  const sphere = random.inSphere(new Float32Array(2000), { radius: 1.5 });

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 12;
      ref.current.rotation.y -= delta / 18;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color={color}
          size={0.015}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

export const HeroAnimation = () => {
  const [theme, setTheme, themes] = useTheme();
  const activeThemeObj = themes.find((t) => t.id === theme) || themes[0];

  return (
    <div className="w-full h-[320px] md:h-[450px] relative z-10 flex items-center justify-center">
      {/* Decorative Cybernetic Ring around Canvas */}
      <div 
        className="absolute w-[260px] h-[260px] md:w-[350px] md:h-[350px] rounded-full border animate-spin [animation-duration:35s] flex items-center justify-center pointer-events-none transition-colors duration-500"
        style={{ borderColor: activeThemeObj.color + "25" }}
      >
        <div 
          className="absolute w-[92%] h-[92%] rounded-full border border-dashed animate-spin [animation-duration:15s] reverse transition-colors duration-500" 
          style={{ borderColor: activeThemeObj.color + "18" }}
        />
      </div>
      
      <Canvas camera={{ position: [0, 0, 1] }} className="w-full h-full">
        <ambientLight intensity={0.5} />
        <ParticleSphere color={activeThemeObj.color} />
      </Canvas>
    </div>
  );
};
export default HeroAnimation;
