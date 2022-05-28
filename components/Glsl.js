import React, { useRef, useState, Suspense } from "react";
import { Canvas, useFrame, useLoader, extend } from "@react-three/fiber";
import Link from "next/link";
import * as THREE from "three";
import {
  OrbitControls,
  shaderMaterial,
  Html,
  ScrollControls,
  Scroll,
} from "@react-three/drei";
import glsl from "babel-plugin-glsl/macro";
import ProductCard from "./ProductCard";
import { Section } from "./section";
import ProductList from "./ProductList";
const WaveShaderMaterial = shaderMaterial(
  // Uniform
  {
    uTime: 0,
    uColor: new THREE.Color(0.0, 0.0, 0.0),
    uTexture: new THREE.Texture(),
  },
  // Vertex Shader
  glsl`
    precision mediump float;
    varying vec2 vUv;
    varying float vWave;
    uniform float uTime;
    #pragma glslify: snoise3 = require(glsl-noise/simplex/3d);
    void main() {
      vUv = uv;
      vec3 pos = position;
      float noiseFreq = 2.0;
      float noiseAmp = 0.4;
      vec3 noisePos = vec3(pos.x * noiseFreq + uTime, pos.y, pos.z);
      pos.z += snoise3(noisePos) * noiseAmp;
      vWave = pos.z;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);  
    }
  `,
  // Fragment Shader
  glsl`
    precision mediump float;
    uniform vec3 uColor;
    uniform float uTime;
    uniform sampler2D uTexture;
    varying vec2 vUv;
    varying float vWave;
    void main() {
      float wave = vWave * 0.001;
      vec3 texture = texture2D(uTexture, vUv + wave).rgb;
      gl_FragColor = vec4(texture, 1.0); 
    }
  `
);

extend({ WaveShaderMaterial });

function Box(props) {
  // This reference gives us direct access to the THREE.Mesh object
  const ref = useRef();

  const [image] = useLoader(THREE.TextureLoader, [
    "https://steamuserimages-a.akamaihd.net/ugc/939447588385396615/EF4E2CDA91234D38556DD2CF88084EA933A328FF/?imw=5000&imh=5000&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false",
  ]);
  // Subscribe this component to the render-loop, rotate the mesh every frame
  // useFrame(
  //   (state, delta) => (ref.current.rotation.y = ref.current.rotation.x += 0.001)
  // );
  useFrame(({ clock }) => (ref.current.uTime = clock.getElapsedTime()));

  // Return the view, these are regular Threejs elements expressed in JSX
  return (
    <mesh>
      <planeBufferGeometry args={[0.55, 0.2, 16, 16]} />
      {/* <meshBasicMaterial color={"hotpink"} /> */}
      <waveShaderMaterial uColor={"hotpink"} ref={ref} uTexture={image} />
    </mesh>
  );
}

const HTMLContent = ({ products }) => {
  return (
    <Section factor={1.0} offset={1}>
      <Html fullscreen></Html>
    </Section>
  );
};

export default function Glsl({ products }) {
  return (
    <Canvas
      style={{
        width: "100%",
        height: "100%",
        position: "fixed",
      }}
      camera={{ fov: 12, position: [0, 0, 5] }}
    >
      {/* <ambientLight /> */}
      {/* <pointLight position={[10, 10, 10]} /> */}
      <Suspense fallback={null}>
        <Box />
      </Suspense>
      {/* 
      <OrbitControls /> */}
    </Canvas>
  );
}
