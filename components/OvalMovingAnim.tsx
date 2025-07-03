"use client";

import { motion, useAnimationFrame } from "motion/react";
import { useRef } from "react";

interface Props {
  className?: string;
  r?: number;
  stroke?: string;
  strokeWidth?: number;
  opacity?: number;
  rx?: number;
  ry?: number;
  text?: string;
}

export default function OvalMovingAnim({
  className,
  r = 30,
  stroke = "#374151",
  strokeWidth = 1,
  opacity = 0.3,
  rx = 300,
  ry = 200,
  text = "RADIATE",
}: Props) {
  const circleRef = useRef<SVGCircleElement>(null);
  const pathRef = useRef<SVGPathElement>(null);

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

      {/* Chữ trắng hiển thị ở ngoài SVG hoặc trong DOM, không vẽ ở đây  */}

      {/* Hình tròn trắng; dùng blend-mode difference để lật màu khi đè lên chữ trắng */}
      <motion.circle
        ref={circleRef}
        r={r}
        fill="#ffffff"
        stroke="none"
        initial={false}
      />
    </svg>
  );
} 