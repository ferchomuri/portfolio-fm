import { motion } from "framer-motion";
import { Layout, Info } from "lucide-react";
import { fadeInUp, staggerContainer, VIEWPORT_ONCE } from "@/presentation/animations/MotionConfig";
import { ARCHITECTURE_PLAYGROUND_CONFIG } from "@/presentation/pages/architecture-playground/ArchitecturePlaygroundConfig";
import type {
  ArchitectureConnection,
  ArchitectureMode,
  ArchitectureModeOption,
  ArchitectureNode,
  ArchitectureStat,
} from "@/domain/types/architecture-playground";

export interface ArchitecturePlaygroundProps {
  readonly activeMode: ArchitectureMode;
  readonly activeNodeId: string;
  readonly modes: readonly ArchitectureModeOption[];
  readonly nodes: readonly ArchitectureNode[];
  readonly connections: readonly ArchitectureConnection[];
  readonly explanation: string;
  readonly stats: readonly ArchitectureStat[];
  readonly selectedNode: ArchitectureNode;
  readonly onSelectMode: (mode: ArchitectureMode) => void;
  readonly onSelectNode: (nodeId: string) => void;
}

export function ArchitecturePlayground({
  activeMode,
  activeNodeId,
  modes,
  nodes,
  connections,
  explanation,
  stats,
  selectedNode,
  onSelectMode,
  onSelectNode,
}: ArchitecturePlaygroundProps) {
  return (
    <section
      id={ARCHITECTURE_PLAYGROUND_CONFIG.SECTION_ID}
      className="relative w-full overflow-hidden px-6 py-24 md:px-12 bg-zinc-950/30"
    >
      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          variants={staggerContainer(0.12, 0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT_ONCE}
          className="mb-16 space-y-4"
        >
          <motion.div
            variants={fadeInUp}
            className="flex items-center gap-2 text-indigo-400 font-mono text-xs font-bold tracking-widest"
          >
            <Layout className="h-4 w-4" />
            <span>{ARCHITECTURE_PLAYGROUND_CONFIG.EYEBROW}</span>
          </motion.div>
          <motion.h2
            variants={fadeInUp}
            className="text-3xl font-extrabold tracking-tight text-zinc-100 sm:text-4xl"
          >
            {ARCHITECTURE_PLAYGROUND_CONFIG.TITLE}
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="max-w-2xl text-sm text-zinc-400 leading-relaxed font-sans"
          >
            {ARCHITECTURE_PLAYGROUND_CONFIG.DESCRIPTION}
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8 items-stretch">
          <div className="lg:col-span-7 flex flex-col justify-between rounded-2xl border border-zinc-800/40 bg-zinc-950 p-6 shadow-2xl relative min-h-[480px]">
            <div className="flex flex-wrap gap-2 border-b border-zinc-900 pb-4 z-20">
              {modes.map((mode) => {
                const isActive = activeMode === mode.id;
                return (
                  <button
                    key={mode.id}
                    type="button"
                    onClick={() => onSelectMode(mode.id)}
                    className={`relative flex min-h-11 items-center rounded-full px-4 py-2.5 font-mono text-[10px] font-bold tracking-wider transition-all duration-300 ${
                      isActive ? "text-indigo-400" : "text-zinc-500 hover:text-zinc-300"
                    }`}
                    data-cursor="pointer"
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activePlayMode"
                        className="absolute inset-0 rounded-full border border-indigo-500/25 bg-indigo-500/5"
                        transition={{ type: "spring", stiffness: 350, damping: 30 }}
                      />
                    )}
                    {mode.label.toUpperCase()}
                  </button>
                );
              })}
            </div>

            <div className="relative flex-1 w-full my-6 min-h-[300px]">
              <svg
                className="absolute inset-0 h-full w-full pointer-events-none"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {connections.map((conn, idx) => {
                  const ctrlX = (conn.from.x + conn.to.x) / 2;
                  const ctrlY = (conn.from.y + conn.to.y) / 2 - 4;
                  const pathD = `M ${conn.from.x} ${conn.from.y} Q ${ctrlX} ${ctrlY} ${conn.to.x} ${conn.to.y}`;
                  return (
                    <g key={idx}>
                      <motion.path
                        animate={{ d: pathD }}
                        transition={{ type: "spring", stiffness: 300, damping: 28 }}
                        fill="transparent"
                        stroke={conn.color}
                        strokeWidth="1.2"
                      />
                      <motion.path
                        animate={{
                          d: pathD,
                          strokeDashoffset: [0, -24],
                        }}
                        fill="transparent"
                        stroke={conn.color.replace("0.4", "0.9")}
                        strokeWidth="1.8"
                        strokeDasharray="4 8"
                        transition={{
                          d: { type: "spring", stiffness: 300, damping: 28 },
                          strokeDashoffset: { repeat: Infinity, duration: 1.5, ease: "linear" },
                        }}
                      />
                    </g>
                  );
                })}
              </svg>

              {nodes.map((node) => {
                const isActive = activeNodeId === node.id;
                const isIndigo = node.type === "indigo";
                const isEmerald = node.type === "emerald";

                return (
                  <motion.div
                    key={node.id}
                    layoutId={`node_${node.id}`}
                    style={{
                      position: "absolute",
                      left: `${node.x}%`,
                      top: `${node.y}%`,
                      transform: "translate(-50%, -50%)",
                    }}
                    onClick={() => onSelectNode(node.id)}
                    className={`z-10 flex h-14 min-[360px]:h-16 sm:h-20 w-24 min-[360px]:w-28 sm:w-36 cursor-pointer flex-col justify-center rounded-xl border p-2 sm:p-3 shadow-lg transition-all duration-300 relative ${
                      isActive
                        ? isIndigo
                          ? "border-indigo-500 bg-zinc-950 shadow-indigo-500/10"
                          : isEmerald
                            ? "border-emerald-500 bg-zinc-950 shadow-emerald-500/10"
                            : "border-zinc-300 bg-zinc-900"
                        : "border-zinc-900 bg-zinc-950 hover:border-zinc-800"
                    }`}
                    transition={{ type: "spring", stiffness: 300, damping: 28 }}
                  >
                    {isActive && (
                      <div className="absolute inset-0 pointer-events-none rounded-xl overflow-visible z-[-1]">
                        <motion.div
                          initial={{ opacity: 0.6, scale: 1 }}
                          animate={{ opacity: 0, scale: 1.15 }}
                          transition={{ repeat: Infinity, duration: 1.8, ease: "easeOut" }}
                          className={`absolute -inset-1 rounded-xl border ${
                            isIndigo
                              ? "border-indigo-500/30"
                              : isEmerald
                                ? "border-emerald-500/30"
                                : "border-zinc-400/30"
                          }`}
                        />
                        <motion.div
                          initial={{ opacity: 0.3, scale: 1 }}
                          animate={{ opacity: 0, scale: 1.3 }}
                          transition={{
                            repeat: Infinity,
                            duration: 1.8,
                            ease: "easeOut",
                            delay: 0.6,
                          }}
                          className={`absolute -inset-2 rounded-xl border ${
                            isIndigo
                              ? "border-indigo-500/15"
                              : isEmerald
                                ? "border-emerald-500/15"
                                : "border-zinc-400/15"
                          }`}
                        />
                      </div>
                    )}
                    <span className="font-mono text-[7px] min-[360px]:text-[8px] sm:text-[9px] text-zinc-500 font-bold uppercase">
                      {node.id}
                    </span>
                    <span className="mt-0.5 sm:mt-1 text-[9px] min-[360px]:text-[10px] sm:text-[11px] font-bold text-zinc-200 truncate">
                      {node.label}
                    </span>
                    <div className="mt-1 sm:mt-2 flex items-center gap-1">
                      <span
                        className={`h-1 sm:h-1.5 w-1 sm:w-1.5 rounded-full ${
                          isActive
                            ? isIndigo
                              ? "bg-indigo-400 animate-pulse"
                              : isEmerald
                                ? "bg-emerald-400 animate-pulse"
                                : "bg-zinc-300 animate-pulse"
                            : "bg-zinc-700"
                        }`}
                      />
                      <span className="font-sans text-[6px] min-[360px]:text-[7px] sm:text-[8px] text-zinc-500 truncate">
                        {node.role}
                      </span>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <div className="flex items-center gap-2 border-t border-zinc-900 pt-3 text-[9px] font-mono text-zinc-600">
              <Info className="h-3 w-3" />
              <span>{ARCHITECTURE_PLAYGROUND_CONFIG.CANVAS_HINT}</span>
            </div>
          </div>

          <div className="lg:col-span-5 flex flex-col justify-between rounded-2xl border border-zinc-800/40 bg-zinc-950 p-6 shadow-2xl space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-zinc-900 pb-3">
                <span className="font-mono text-xs font-bold text-zinc-300 uppercase">
                  {ARCHITECTURE_PLAYGROUND_CONFIG.SPECS_TITLE}
                </span>
                <span className="font-mono text-[9px] text-indigo-400 font-semibold bg-indigo-950/20 px-2.5 py-0.5 rounded-full border border-indigo-500/15">
                  {activeMode.toUpperCase()}
                </span>
              </div>
              <p className="text-xs text-zinc-400 leading-relaxed font-sans">{explanation}</p>
            </div>

            <div className="grid grid-cols-3 gap-2 border-y border-zinc-900 py-4 text-center">
              {stats.map((stat) => (
                <div key={stat.label} className="flex flex-col gap-1">
                  <span className="font-sans text-[8px] text-zinc-500 uppercase tracking-wider">
                    {stat.label}
                  </span>
                  <span className="font-mono text-[10px] font-bold text-zinc-200">{stat.val}</span>
                </div>
              ))}
            </div>

            <div className="rounded-xl border border-zinc-900 bg-black p-4 font-mono text-[10px] text-zinc-400 shadow-inner flex-1 flex flex-col justify-between">
              <div>
                <div className="mb-3 flex items-center justify-between border-b border-zinc-900 pb-2">
                  <span className="text-zinc-500">{ARCHITECTURE_PLAYGROUND_CONFIG.TELEMETRY_TITLE}</span>
                  <span className="text-indigo-400">{selectedNode.id.toUpperCase()}</span>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-zinc-500">Role:</span>
                    <span className="text-zinc-300 font-bold">{selectedNode.role}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-zinc-500">Status:</span>
                    <span className="text-emerald-400 font-bold flex items-center gap-1">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-ping" />
                      {ARCHITECTURE_PLAYGROUND_CONFIG.TELEMETRY_STATUS}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-zinc-500">X / Y Coordinate:</span>
                    <span className="text-zinc-500 font-bold">
                      {selectedNode.x}% / {selectedNode.y}%
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-4 border-t border-zinc-900 pt-3 text-[9px] text-zinc-600">
                {ARCHITECTURE_PLAYGROUND_CONFIG.TELEMETRY_FOOTER}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
