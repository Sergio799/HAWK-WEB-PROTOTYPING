'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Html, Stars, Sparkles } from '@react-three/drei';
import { motion } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import * as THREE from 'three';

// Sample Whole Foods locations
const stores = [
  { id: 1, name: 'Downtown Charlotte', lat: 35.2271, lng: -80.8431, position: [0, 0, 0], address: '123 Main St', phone: '(704) 555-0100' },
  { id: 2, name: 'SouthPark', lat: 35.1580, lng: -80.8270, position: [2, 0, 1], address: '456 Park Ave', phone: '(704) 555-0101' },
  { id: 3, name: 'University Area', lat: 35.3074, lng: -80.7350, position: [-2, 0, -1], address: '789 College Rd', phone: '(704) 555-0102' },
  { id: 4, name: 'Ballantyne', lat: 35.0530, lng: -80.8480, position: [1, 0, -2], address: '321 South Blvd', phone: '(704) 555-0103' },
  { id: 5, name: 'Plaza Midwood', lat: 35.2180, lng: -80.8050, position: [-1, 0, 2], address: '654 Central Ave', phone: '(704) 555-0104' }
];

// Calculate distance between two coordinates (Haversine formula)
function calculateDistance(lat1: number, lon1: number, lat2: number, lon2: number) {
  const R = 3959; // Earth's radius in miles
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLon = (lon2 - lon1) * Math.PI / 180;
  const a = 
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
    Math.sin(dLon / 2) * Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}

function StoreMarker({ store, onClick, isSelected }: any) {
  const meshRef = useRef<THREE.Mesh>(null);
  const ringRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      // Floating animation
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 2 + store.id) * 0.2;
      // Pulse animation
      const scale = 1 + Math.sin(state.clock.elapsedTime * 3 + store.id) * 0.1;
      meshRef.current.scale.set(scale, scale, scale);
    }
    if (ringRef.current) {
      ringRef.current.rotation.z += 0.02;
    }
  });

  return (
    <group position={store.position}>
      {/* Pulsing ring */}
      <mesh ref={ringRef} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[0.4, 0.05, 16, 32]} />
        <meshStandardMaterial 
          color="#16a34a" 
          emissive="#16a34a" 
          emissiveIntensity={isSelected ? 1 : 0.3}
          transparent
          opacity={0.6}
        />
      </mesh>

      {/* Main marker sphere */}
      <mesh ref={meshRef} onClick={() => onClick(store)}>
        <sphereGeometry args={[0.3, 32, 32]} />
        <meshStandardMaterial 
          color={isSelected ? "#22c55e" : "#16a34a"}
          emissive={isSelected ? "#22c55e" : "#16a34a"}
          emissiveIntensity={isSelected ? 1 : 0.5}
          metalness={0.3}
          roughness={0.2}
        />
      </mesh>

      {/* Glow effect */}
      <pointLight 
        position={[0, 0, 0]} 
        intensity={isSelected ? 2 : 0.5} 
        distance={3} 
        color="#16a34a" 
      />

      <Html distanceFactor={10}>
        <div className={`bg-white px-3 py-1 rounded-full shadow-lg text-xs font-bold text-black whitespace-nowrap pointer-events-none transition-all ${isSelected ? 'scale-110 border-2 border-green-500' : ''}`}>
          {store.name}
        </div>
      </Html>
    </group>
  );
}

function Ground() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current && meshRef.current.material) {
      const material = meshRef.current.material as THREE.MeshStandardMaterial;
      material.opacity = 0.3 + Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
    }
  });

  return (
    <>
      {/* Animated ground plane */}
      <mesh ref={meshRef} rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.5, 0]} receiveShadow>
        <planeGeometry args={[20, 20, 32, 32]} />
        <meshStandardMaterial 
          color="#10b981" 
          opacity={0.3} 
          transparent
          wireframe={false}
        />
      </mesh>
      
      {/* Grid lines */}
      <gridHelper args={[20, 20, '#16a34a', '#16a34a']} position={[0, -0.49, 0]} />
    </>
  );
}

function Particles() {
  return (
    <>
      <Sparkles 
        count={100}
        scale={15}
        size={2}
        speed={0.3}
        opacity={0.6}
        color="#16a34a"
      />
      <Stars 
        radius={50}
        depth={50}
        count={1000}
        factor={2}
        saturation={0}
        fade
        speed={0.5}
      />
    </>
  );
}

function AnimatedCamera() {
  const cameraRef = useRef<THREE.PerspectiveCamera>(null);

  useFrame((state) => {
    if (cameraRef.current) {
      // Gentle camera sway
      cameraRef.current.position.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.5;
      cameraRef.current.position.y = 5 + Math.sin(state.clock.elapsedTime * 0.3) * 0.3;
    }
  });

  return <PerspectiveCamera ref={cameraRef} makeDefault position={[0, 5, 8]} />;
}

export default function StoreLocator3D() {
  const [selectedStore, setSelectedStore] = useState<any>(null);
  const [userLocation, setUserLocation] = useState<{ lat: number; lng: number } | null>(null);
  const [nearestStores, setNearestStores] = useState<any[]>([]);
  const [locationError, setLocationError] = useState<string>('');

  useEffect(() => {
    // Get user's location
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const userLat = position.coords.latitude;
          const userLng = position.coords.longitude;
          setUserLocation({ lat: userLat, lng: userLng });

          // Calculate distances and sort stores
          const storesWithDistance = stores.map(store => ({
            ...store,
            distance: calculateDistance(userLat, userLng, store.lat, store.lng)
          })).sort((a, b) => a.distance - b.distance);

          setNearestStores(storesWithDistance);
        },
        (error) => {
          setLocationError('Unable to get your location. Showing all stores.');
          setNearestStores(stores.map(store => ({ ...store, distance: null })));
        }
      );
    } else {
      setLocationError('Geolocation is not supported by your browser.');
      setNearestStores(stores.map(store => ({ ...store, distance: null })));
    }
  }, []);

  return (
    <div className="relative w-full h-screen bg-gradient-to-b from-green-900 to-black">
      <Canvas shadows>
        <AnimatedCamera />
        <OrbitControls 
          enableZoom={true}
          enablePan={true}
          minDistance={3}
          maxDistance={15}
          autoRotate
          autoRotateSpeed={0.5}
        />
        
        {/* Lighting */}
        <ambientLight intensity={0.4} />
        <directionalLight 
          position={[10, 10, 5]} 
          intensity={1} 
          castShadow
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
        />
        <pointLight position={[0, 5, 0]} intensity={0.8} color="#16a34a" />
        <spotLight
          position={[0, 10, 0]}
          angle={0.5}
          penumbra={1}
          intensity={0.5}
          color="#22c55e"
          castShadow
        />
        
        {/* Environment */}
        <Particles />
        <Ground />
        <fog attach="fog" args={['#064e3b', 10, 25]} />
        
        {/* Store Markers */}
        {nearestStores.map((store) => (
          <StoreMarker 
            key={store.id} 
            store={store} 
            onClick={setSelectedStore}
            isSelected={selectedStore?.id === store.id}
          />
        ))}
      </Canvas>

      {/* Store Info Panel */}
      {selectedStore && (
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          className="absolute top-4 left-4 bg-white rounded-2xl shadow-2xl p-6 max-w-sm z-10"
        >
          <button
            onClick={() => setSelectedStore(null)}
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
          >
            ✕
          </button>
          
          <h3 className="text-2xl font-bold text-gray-900 mb-2" style={{ fontFamily: 'var(--font-bebas)' }}>
            {selectedStore.name}
          </h3>
          
          <div className="space-y-3 text-gray-700">
            {selectedStore.distance && (
              <div className="flex items-center gap-2 text-green-600 font-bold">
                <span>📏</span>
                <span>{selectedStore.distance.toFixed(1)} miles away</span>
              </div>
            )}
            <div className="flex items-center gap-2">
              <span className="text-green-600">📍</span>
              <span>{selectedStore.address}, Charlotte, NC</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-600">📞</span>
              <span>{selectedStore.phone}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-600">🕐</span>
              <span>Open: 8am - 10pm</span>
            </div>
          </div>

          <div className="mt-4 pt-4 border-t border-gray-200 space-y-2">
            <a
              href={`https://www.google.com/maps/dir/?api=1&destination=${selectedStore.lat},${selectedStore.lng}`}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full py-3 bg-green-600 hover:bg-green-700 text-black font-semibold rounded-full transition-colors text-center"
            >
              🗺️ Get Directions
            </a>
            <a
              href={`tel:${selectedStore.phone}`}
              className="block w-full py-3 bg-white border-2 border-green-600 text-black hover:bg-green-50 font-semibold rounded-full transition-colors text-center"
            >
              📞 Call Store
            </a>
          </div>
        </motion.div>
      )}

      {/* Nearest Stores List */}
      {nearestStores.length > 0 && (
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          className="absolute top-4 right-4 bg-white rounded-2xl shadow-2xl p-6 max-w-sm max-h-[80vh] overflow-y-auto z-10"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'var(--font-bebas)' }}>
            {userLocation ? 'NEAREST STORES' : 'ALL STORES'}
          </h3>
          
          {locationError && (
            <p className="text-sm text-amber-600 mb-4">{locationError}</p>
          )}

          <div className="space-y-3">
            {nearestStores.slice(0, 5).map((store, index) => (
              <motion.div
                key={store.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => setSelectedStore(store)}
                className="p-4 bg-gradient-to-br from-green-50 to-white rounded-xl border-2 border-green-200 hover:border-green-400 cursor-pointer transition-all hover:shadow-lg"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h4 className="font-bold text-gray-900">{store.name}</h4>
                    <p className="text-sm text-gray-600">{store.address}</p>
                  </div>
                  {store.distance && (
                    <div className="text-green-600 font-bold text-sm whitespace-nowrap ml-2">
                      {store.distance.toFixed(1)} mi
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}

      {/* Instructions */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/70 text-white px-6 py-3 rounded-full text-sm">
        🖱️ Drag to rotate • Scroll to zoom • Click markers for details
      </div>
    </div>
  );
}
