"use client";

import { useMemo } from "react";
import { motion } from "framer-motion";

type Node = { x: number; y: number; r: number; delay: number };

function seededNodes(count: number): Node[] {
  const nodes: Node[] = [];
  let seed = 42;
  function rand() {
    seed = (seed * 9301 + 49297) % 233280;
    return seed / 233280;
  }
  for (let i = 0; i < count; i++) {
    nodes.push({
      x: rand() * 100,
      y: rand() * 100,
      r: 1.4 + rand() * 2.2,
      delay: rand() * 3,
    });
  }
  return nodes;
}

export function NetworkField({ className }: { className?: string }) {
  const nodes = useMemo(() => seededNodes(22), []);

  const edges = useMemo(() => {
    const list: [Node, Node][] = [];
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const dx = nodes[i].x - nodes[j].x;
        const dy = nodes[i].y - nodes[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 22) list.push([nodes[i], nodes[j]]);
      }
    }
    return list;
  }, [nodes]);

  return (
    <svg
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      className={className}
      aria-hidden="true"
    >
      {edges.map(([a, b], i) => (
        <motion.line
          key={i}
          x1={a.x}
          y1={a.y}
          x2={b.x}
          y2={b.y}
          stroke="var(--accent)"
          strokeWidth={0.08}
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0.35, 0.15] }}
          transition={{ duration: 3, delay: i * 0.02, repeat: Infinity, repeatType: "reverse" }}
        />
      ))}
      {nodes.map((n, i) => (
        <motion.circle
          key={i}
          cx={n.x}
          cy={n.y}
          r={n.r * 0.3}
          fill="var(--accent)"
          initial={{ opacity: 0.2, cy: n.y }}
          animate={{ opacity: [0.2, 0.9, 0.2], cy: [n.y, n.y - 1.5, n.y] }}
          transition={{ duration: 4 + n.delay, repeat: Infinity, ease: "easeInOut", delay: n.delay }}
        />
      ))}
    </svg>
  );
}
