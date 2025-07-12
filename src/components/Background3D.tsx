import React, { useRef, useEffect } from 'react';
import Sketch from 'react-p5';
import p5Types from 'p5';

const Background3D: React.FC = () => {
  const scrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      scrollY.current = window.scrollY;
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  let time = 0;

  const setup = (p5: p5Types, canvasParentRef: Element) => {
    p5.createCanvas(p5.windowWidth, p5.windowHeight).parent(canvasParentRef);
  };

  const draw = (p5: p5Types) => {
    p5.background(0, 0, 0, 0);
    time += 0.001;
    
    // Draw extremely subtle floating dots
    p5.noStroke();
    
    for (let i = 0; i < 15; i++) {
      const x = p5.noise(i * 0.5, time) * p5.width;
      const y = p5.noise(i * 0.5 + 100, time * 0.5) * p5.height - scrollY.current * 0.05;
      const size = 1;
      const alpha = p5.sin(time + i) * 3 + 5; // 2-8 alpha range
      
      p5.fill(102, 126, 234, alpha);
      p5.circle(x, y, size);
    }
    
    // Draw one very subtle flowing line
    p5.noFill();
    p5.stroke(102, 126, 234, 5);
    p5.strokeWeight(0.5);
    p5.beginShape();
    
    for (let x = 0; x < p5.width; x += 50) {
      const y = p5.height / 2 + p5.sin(x * 0.001 + time) * 100 - scrollY.current * 0.1;
      p5.curveVertex(x, y);
    }
    
    p5.endShape();
  };

  const windowResized = (p5: p5Types) => {
    p5.resizeCanvas(p5.windowWidth, p5.windowHeight);
  };

  return (
    <div className="fixed inset-0 pointer-events-none" style={{ zIndex: 10 }}>
      <Sketch setup={setup} draw={draw} windowResized={windowResized} />
    </div>
  );
};

export default Background3D;
