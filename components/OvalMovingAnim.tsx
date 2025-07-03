"use client";

import { motion, useAnimationFrame } from "motion/react";
import { useRef, useState, useEffect } from "react";

interface Props {
  className?: string;
  r?: number; // bán kính hình tròn
  stroke?: string;
  strokeWidth?: number;
  opacity?: number;
  rx?: number; // bán trục lớn của path elip
  ry?: number; // bán trục nhỏ của path elip
}

export default function OvalMovingAnim({
  className,
  r = 30,
  stroke = "#374151",
  strokeWidth = 1,
  opacity = 0.3,
  rx = 100,
  ry = 50,
}: Props) {
  const circleRef = useRef<SVGCircleElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const [pathBounds, setPathBounds] = useState({ width: 0, height: 0 });

  useEffect(() => {
    if (pathRef.current) {
      const bbox = pathRef.current.getBBox();
      setPathBounds({ width: bbox.width, height: bbox.height });
    }
  }, []);

  useAnimationFrame((time: number) => {
    if (circleRef.current && pathRef.current) {
      const pathLength = pathRef.current.getTotalLength();
      const progress = (time / 5000) % 1;
      const point = pathRef.current.getPointAtLength(progress * pathLength);
      circleRef.current.setAttribute("cx", point.x.toString());
      circleRef.current.setAttribute("cy", point.y.toString());
    }
  });

  const svgWidth = rx * 2 + 100;
  const svgHeight = ry * 2 + 100;

  return (
    <svg
      className={className}
      width={svgWidth}
      height={svgHeight}
      viewBox={`0 0 ${svgWidth} ${svgHeight}`}
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        pointerEvents: "none",
      }}
    >
      {/* Path elip lớn */}
      <path
        ref={pathRef}
        d={`M ${svgWidth / 2},${svgHeight / 2 - ry} a ${rx},${ry} 0 1,0 0.1,0`}
        stroke={stroke}
        strokeWidth={strokeWidth}
        fill="none"
        opacity={opacity}
      />
      <motion.circle
        ref={circleRef}
        r={r}
        fill="none"
        stroke={stroke}
        strokeWidth={strokeWidth}
        opacity={opacity}
        initial={false}
      />
    </svg>
  );
} 