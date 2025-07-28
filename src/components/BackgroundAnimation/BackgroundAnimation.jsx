// import React, { useEffect, useRef } from 'react';
// import * as THREE from 'three';

// export default function BackgroundAnimation() {
//   const mountRef = useRef(null);

//   useEffect(() => {
//     const scene = new THREE.Scene();
//     const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
//     const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    
//     renderer.setSize(window.innerWidth, window.innerHeight);
//     renderer.setClearColor(0x000000, 0);
//     mountRef.current.appendChild(renderer.domElement);
    
//     // Create organic blob geometry
//     const geometry = new THREE.SphereGeometry(3, 64, 64);
//     const material = new THREE.MeshPhongMaterial({ 
//       color: 0x1a1a1a,
//       transparent: true,
//       opacity: 0.8,
//       shininess: 30,
//       specular: 0x222222
//     });
    
//     const blob = new THREE.Mesh(geometry, material);
    
//     // Add organic deformation
//     const positions = geometry.attributes.position;
//     for (let i = 0; i < positions.count; i++) {
//       const x = positions.getX(i);
//       const y = positions.getY(i);
//       const z = positions.getZ(i);
      
//       // Add organic noise
//       const noise = Math.sin(x * 2) * Math.cos(y * 2) * Math.sin(z * 2) * 0.3;
//       positions.setXYZ(i, x + noise, y + noise, z + noise);
//     }
    
//     geometry.computeVertexNormals();
//     scene.add(blob);
    
//     // Add ambient and directional lighting
//     const ambientLight = new THREE.AmbientLight(0x404040, 0.4);
//     scene.add(ambientLight);
    
//     const directionalLight = new THREE.DirectionalLight(0xffffff, 0.6);
//     directionalLight.position.set(5, 5, 5);
//     scene.add(directionalLight);
    
//     camera.position.z = 8;
    
//     function animate() {
//       requestAnimationFrame(animate);
      
//       // Gentle rotation
//       blob.rotation.x += 0.005;
//       blob.rotation.y += 0.003;
      
//       // Subtle scale animation
//       const time = Date.now() * 0.001;
//       blob.scale.x = 1 + Math.sin(time) * 0.05;
//       blob.scale.y = 1 + Math.sin(time * 1.1) * 0.05;
//       blob.scale.z = 1 + Math.sin(time * 0.9) * 0.05;
      
//       renderer.render(scene, camera);
//     }
    
//     animate();
    
//     // Handle window resize
//     const handleResize = () => {
//       camera.aspect = window.innerWidth / window.innerHeight;
//       camera.updateProjectionMatrix();
//       renderer.setSize(window.innerWidth, window.innerHeight);
//     };
    
//     window.addEventListener('resize', handleResize);
    
//     return () => {
//       window.removeEventListener('resize', handleResize);
//       mountRef.current?.removeChild(renderer.domElement);
//     };
//   }, []);

//   return <div ref={mountRef} className="fixed inset-0 w-full h-full pointer-events-none z-0" />;
// }