import { Camera, Mesh, Plane, Program, Renderer, Texture, Transform } from 'ogl';
import { useEffect, useRef } from 'react';
import './CircularGallery.css';

const roomData = [
  { image: '/images/room/superior1.webp', text: 'Superior Room' },
  { image: '/images/room/sup2.avif', text: 'Superior Room' },
  { image: '/images/room/sup3.avif', text: 'Superior Room' },
  { image: '/images/room/delux/del1.avif', text: 'Deluxe Room' },
  { image: '/images/room/delux/del2.avif', text: 'Deluxe Room' },
  { image: '/images/room/delux/del3.avif', text: 'Deluxe Room' },
  { image: '/images/room/superior1.webp', text: 'Business Class Room' },
  { image: '/images/room/sup2.avif', text: 'Executive Suite' },
  { image: '/images/room/sup3.avif', text: 'Presidential Suite' },
];

export default function CircularRooms() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const renderer = new Renderer({ dpr: 2, alpha: true });
    const gl = renderer.gl;
    containerRef.current.appendChild(gl.canvas);

    const camera = new Camera(gl);
    camera.position.z = 5;

    const scene = new Transform();
    const geometry = new Plane(gl, { widthSegments: 30, heightSegments: 30 });

    const medias = [];
    let screen = {}, viewport = {};
    const scroll = { current: 0, target: 0, last: 0 };

    const resize = () => {
      screen.width = containerRef.current.offsetWidth;
      screen.height = containerRef.current.offsetHeight;

      renderer.setSize(screen.width, screen.height);
      camera.perspective({ aspect: screen.width / screen.height });

      const fov = (camera.fov * Math.PI) / 180;
      const height = 2 * Math.tan(fov / 2) * camera.position.z;
      const width = height * camera.aspect;
      viewport.width = width;
      viewport.height = height;

      medias.forEach((media, i) => {
        media.mesh.scale.x = viewport.width * 0.25;
        media.mesh.scale.y = viewport.height * 0.5;
        media.mesh.position.x = i * (media.mesh.scale.x + 0.5);
      });
    };

    let loaded = 0;
    roomData.forEach((item, i) => {
      const texture = new Texture(gl);
      const img = new Image();
      img.src = item.image;
      img.crossOrigin = 'anonymous';
      img.onload = () => {
        texture.image = img;

        const program = new Program(gl, {
          vertex: `
            attribute vec2 uv;
            attribute vec3 position;
            uniform mat4 modelViewMatrix;
            uniform mat4 projectionMatrix;
            varying vec2 vUv;
            void main() {
              vUv = uv;
              gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
            }
          `,
          fragment: `
            precision highp float;
            varying vec2 vUv;
            uniform sampler2D tMap;
            void main() {
              gl_FragColor = texture2D(tMap, vUv);
            }
          `,
          uniforms: {
            tMap: { value: texture },
          },
          transparent: true,
        });

        const mesh = new Mesh(gl, { geometry, program });
        mesh.setParent(scene);
        medias.push({ mesh });

        loaded++;
        if (loaded === roomData.length) {
          resize();
          requestAnimationFrame(update);
        }
      };
    });

    const update = () => {
      scroll.current += (scroll.target - scroll.current) * 0.1;

      medias.forEach((m, i) => {
        const baseX = i * (m.mesh.scale.x + 0.5);
        m.mesh.position.x = baseX - scroll.current;
      });

      renderer.render({ scene, camera });
      scroll.last = scroll.current;
      requestAnimationFrame(update);
    };

    const onWheel = (e) => {
      scroll.target += e.deltaY * 0.01;
    };

    window.addEventListener('resize', resize);
    window.addEventListener('wheel', onWheel);

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('wheel', onWheel);
      if (gl && gl.canvas && gl.canvas.parentNode) {
        gl.canvas.parentNode.removeChild(gl.canvas);
      }
    };
  }, []);

  return <div className="circular-gallery" ref={containerRef}></div>;
}