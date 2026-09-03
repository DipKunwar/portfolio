"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  Terminal as TerminalIcon,
  X,
  Maximize2,
  Minimize2,
  CornerDownLeft,
  Sparkles,
  ExternalLink,
  Check,
} from "lucide-react";
import confetti from "canvas-confetti";

interface CommandOutput {
  id: string;
  type: "command" | "text" | "error" | "success" | "ascii" | "custom";
  content: React.ReactNode;
}

let logCounter = 0;
const getNextLogId = (prefix: string) => {
  logCounter += 1;
  return `${prefix}-${logCounter}`;
};

const ASCII_BANNER = `
 ██████╗ ██╗██████╗     ██╗  ██╗██╗   ██╗███╗   ██╗██╗    ██╗ █████╗ ██████╗ 
 ██╔══██╗██║██╔══██╗    ██║ ██╔╝██║   ██║████╗  ██║██║    ██║██╔══██╗██╔══██╗
 ██║  ██║██║██████╔╝    █████═╝ ██║   ██║██╔██╗ ██║██║ █╗ ██║███████║██████╔╝
 ██║  ██║██║██╔═══╝     ██╔═██╗ ██║   ██║██║╚██╗██║██║███╗██║██╔══██║██╔══██╗
 ██████╔╝██║██║         ██║  ██╗╚██████╔╝██║ ╚████║╚███╔███╔╝██║  ██║██║  ██║
 ╚═════╝ ╚═╝╚═╝         ╚═╝  ╚═╝ ╚═════╝ ╚═╝  ╚═══╝ ╚══╝╚══╝ ╚═╝  ╚═╝╚═╝  ╚═╝
`;

const COMMAND_LIST = [
  { cmd: "help", desc: "List all available interactive terminal commands" },
  { cmd: "about", desc: "Display bio, education, and credentials" },
  { cmd: "projects", desc: "Explore featured production projects & live links" },
  { cmd: "skills", desc: "View full-stack tech stack & creative toolset" },
  { cmd: "contact", desc: "Get contact email, socials, and location" },
  { cmd: "sudo hire-dip", desc: "⚡ Fast-track hire Dip Kunwar to your team" },
  { cmd: "matrix", desc: "Toggle cyberpunk matrix digital rain mode" },
  { cmd: "f1", desc: "Launch PADHUB F1 Live Telemetry in new tab" },
  { cmd: "stream", desc: "Launch STREAMVERSE Cinema in new tab" },
  { cmd: "pitch", desc: "Launch PITCHHUB Live Football in new tab" },
  { cmd: "repo", desc: "Open this portfolio's GitHub source code" },
  { cmd: "resume", desc: "Open and download Dip Kunwar's official PDF resume" },
  { cmd: "date", desc: "Show current time in Nepal (NPT)" },
  { cmd: "clear", desc: "Clear terminal buffer screen" },
  { cmd: "exit", desc: "Close terminal session" },
];

const createInitialLogs = (): CommandOutput[] => [
  {
    id: getNextLogId("init-ascii"),
    type: "ascii",
    content: (
      <pre className="text-[9px] sm:text-xs font-mono font-bold text-[#ccff00] leading-none select-none overflow-x-auto">
        {ASCII_BANNER}
      </pre>
    ),
  },
  {
    id: getNextLogId("init-welcome"),
    type: "text",
    content: (
      <div className="space-y-1 text-xs sm:text-sm font-mono text-zinc-300">
        <p className="text-white font-semibold">
          DipOS Interactive Terminal <span className="text-[#38bdf8]">v2.4</span> (x86_64-darwin-nepal)
        </p>
        <p className="text-zinc-400">
          Type <span className="text-[#ccff00] font-bold">&apos;help&apos;</span> to see all commands or click the quick pills below.
        </p>
      </div>
    ),
  },
];

export const TerminalModal: React.FC<{
  isOpen: boolean;
  onClose: () => void;
}> = ({ isOpen, onClose }) => {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState<number>(-1);
  const [isMaximized, setIsMaximized] = useState(false);
  const [isMatrixMode, setIsMatrixMode] = useState(false);
  const [logs, setLogs] = useState<CommandOutput[]>(createInitialLogs);

  const terminalEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto-scroll to bottom of logs
  useEffect(() => {
    if (isOpen) {
      terminalEndRef.current?.scrollIntoView({ behavior: "smooth" });
      inputRef.current?.focus();
    }
  }, [logs, isOpen]);

  // Global keyboard shortcut listener for Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  const executeCommand = (rawCommand: string) => {
    const trimmed = rawCommand.trim();
    if (!trimmed) return;

    // Add to history
    setHistory((prev) => [...prev, trimmed]);
    setHistoryIndex(-1);

    // Append executed command to logs
    const commandLog: CommandOutput = {
      id: getNextLogId("cmd"),
      type: "command",
      content: (
        <div className="flex items-center gap-2 font-mono text-xs sm:text-sm">
          <span className="text-[#ccff00] font-bold">dip@kunwar:~$</span>
          <span className="text-white font-medium">{trimmed}</span>
        </div>
      ),
    };

    const args = trimmed.split(" ");
    const command = args[0].toLowerCase();

    let responseLog: CommandOutput | null = null;

    switch (command) {
      case "help":
        responseLog = {
          id: getNextLogId("resp"),
          type: "custom",
          content: (
            <div className="space-y-2 font-mono text-xs sm:text-sm py-1">
              <p className="text-[#38bdf8] font-bold">AVAILABLE COMMANDS:</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-1.5 pt-1">
                {COMMAND_LIST.map((item) => (
                  <div key={item.cmd} className="flex items-baseline gap-2">
                    <button
                      onClick={() => executeCommand(item.cmd)}
                      className="text-[#ccff00] font-bold hover:underline text-left cursor-pointer"
                    >
                      {item.cmd}
                    </button>
                    <span className="text-zinc-500">•</span>
                    <span className="text-zinc-300 text-[11px] sm:text-xs">
                      {item.desc}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ),
        };
        break;

      case "about":
      case "whoami":
        responseLog = {
          id: getNextLogId("resp"),
          type: "custom",
          content: (
            <div className="space-y-2 font-mono text-xs sm:text-sm py-1">
              <div className="flex items-center gap-2">
                <span className="text-lg">👨‍💻</span>
                <span className="text-white font-bold text-base">Dip Kunwar</span>
                <span className="px-2 py-0.5 bg-[#ccff00]/10 border border-[#ccff00]/30 text-[#ccff00] text-[10px] rounded-full font-bold">
                  BSc.IT Student
                </span>
              </div>
              <p className="text-zinc-300 leading-relaxed">
                Full-Stack Developer currently studying BSc.IT at <span className="text-white font-semibold">ISMT College (University of Sunderland)</span>.
                Passionate about turning creative ideas into playful, high-performance web applications and interactive Three.js 3D experiences.
              </p>
              <p className="text-zinc-400 italic">
                &ldquo;With Great Power Comes Great Responsibility. Build interfaces that feel alive, responsive, and memorable.&rdquo;
              </p>
            </div>
          ),
        };
        break;

      case "projects":
        responseLog = {
          id: getNextLogId("resp"),
          type: "custom",
          content: (
            <div className="space-y-3 font-mono text-xs sm:text-sm py-1">
              <p className="text-[#38bdf8] font-bold">FEATURED PRODUCTION PROJECTS:</p>
              <div className="space-y-2">
                <div className="p-2.5 bg-black/40 border border-white/10 rounded-xl flex items-center justify-between">
                  <div>
                    <span className="text-[#ccff00] font-bold">1. PADHUB F1</span>
                    <p className="text-zinc-400 text-xs">Formula 1 Race Hub & Real-Time Telemetry Dashboard</p>
                  </div>
                  <a
                    href="https://padhub3.vercel.app/"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 px-3 py-1 bg-white/10 hover:bg-[#ccff00] hover:text-black rounded-lg text-xs font-bold transition-colors"
                  >
                    Launch <ExternalLink className="w-3 h-3" />
                  </a>
                </div>

                <div className="p-2.5 bg-black/40 border border-white/10 rounded-xl flex items-center justify-between">
                  <div>
                    <span className="text-[#fb923c] font-bold">2. STREAMVERSE</span>
                    <p className="text-zinc-400 text-xs">Modern Movies & Show Streaming Entertainment Platform</p>
                  </div>
                  <a
                    href="https://streamverse-coral.vercel.app/"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 px-3 py-1 bg-white/10 hover:bg-[#fb923c] hover:text-black rounded-lg text-xs font-bold transition-colors"
                  >
                    Launch <ExternalLink className="w-3 h-3" />
                  </a>
                </div>

                <div className="p-2.5 bg-black/40 border border-white/10 rounded-xl flex items-center justify-between">
                  <div>
                    <span className="text-[#4ade80] font-bold">3. PITCHHUB</span>
                    <p className="text-zinc-400 text-xs">Live Football Streaming, Fixtures & Match Center</p>
                  </div>
                  <a
                    href="https://pitchhub.vercel.app"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 px-3 py-1 bg-white/10 hover:bg-[#4ade80] hover:text-black rounded-lg text-xs font-bold transition-colors"
                  >
                    Launch <ExternalLink className="w-3 h-3" />
                  </a>
                </div>

                <div className="p-2.5 bg-black/40 border border-white/10 rounded-xl flex items-center justify-between">
                  <div>
                    <span className="text-[#a855f7] font-bold">4. GROOVY TUNES</span>
                    <p className="text-zinc-400 text-xs">Interactive 3D WebGL Audio Frequency Visualizer</p>
                  </div>
                  <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-lg text-xs font-bold">
                    Built-in 3D
                  </span>
                </div>
              </div>
            </div>
          ),
        };
        break;

      case "f1":
      case "padhub":
        window.open("https://padhub3.vercel.app/", "_blank");
        responseLog = {
          id: getNextLogId("resp"),
          type: "success",
          content: <p className="font-mono text-xs text-[#ccff00]">Opening PADHUB F1 in new browser tab...</p>,
        };
        break;

      case "stream":
      case "streamverse":
        window.open("https://streamverse-coral.vercel.app/", "_blank");
        responseLog = {
          id: getNextLogId("resp"),
          type: "success",
          content: <p className="font-mono text-xs text-[#fb923c]">Opening STREAMVERSE in new browser tab...</p>,
        };
        break;

      case "pitch":
      case "pitchhub":
        window.open("https://pitchhub.vercel.app", "_blank");
        responseLog = {
          id: getNextLogId("resp"),
          type: "success",
          content: <p className="font-mono text-xs text-[#4ade80]">Opening PITCHHUB in new browser tab...</p>,
        };
        break;

      case "skills":
        responseLog = {
          id: getNextLogId("resp"),
          type: "custom",
          content: (
            <div className="space-y-2 font-mono text-xs sm:text-sm py-1">
              <p className="text-[#38bdf8] font-bold">CORE TECHNICAL STACK:</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                <div className="p-2 bg-white/5 rounded-lg border border-white/5">
                  <span className="text-[#ccff00] font-bold block mb-1">Frontend & Architecture:</span>
                  <span className="text-zinc-300">Next.js 16, React 19, TypeScript, Tailwind CSS v4, Three.js, WebGL</span>
                </div>
                <div className="p-2 bg-white/5 rounded-lg border border-white/5">
                  <span className="text-[#38bdf8] font-bold block mb-1">Backend & Databases:</span>
                  <span className="text-zinc-300">Node.js, Python, PostgreSQL, REST APIs, WebSockets</span>
                </div>
                <div className="p-2 bg-white/5 rounded-lg border border-white/5">
                  <span className="text-[#f43f5e] font-bold block mb-1">Design & UI Tools:</span>
                  <span className="text-zinc-300">Photoshop, Figma, UI/UX Wireframing</span>
                </div>
                <div className="p-2 bg-white/5 rounded-lg border border-white/5">
                  <span className="text-[#eab308] font-bold block mb-1">DevOps & Tooling:</span>
                  <span className="text-zinc-300">Git, GitHub, Vercel, Linux, Turbopack, Cloudflare DNS</span>
                </div>
              </div>
            </div>
          ),
        };
        break;

      case "sudo":
        if (args.slice(1).join(" ").toLowerCase() === "hire-dip" || args[1]?.toLowerCase() === "hire") {
          // Trigger confetti!
          confetti({
            particleCount: 120,
            spread: 90,
            origin: { y: 0.6 },
            colors: ["#ccff00", "#38bdf8", "#8b5cf6", "#ffffff"],
          });
          navigator.clipboard?.writeText("kunwardipson89@gmail.com");

          responseLog = {
            id: getNextLogId("resp"),
            type: "custom",
            content: (
              <div className="p-3 bg-[#ccff00]/10 border border-[#ccff00]/40 rounded-xl space-y-2 font-mono text-xs sm:text-sm">
                <div className="flex items-center gap-2 text-[#ccff00] font-black text-sm sm:text-base">
                  <Sparkles className="w-5 h-5 fill-current" />
                  <span>[ACCESS GRANTED] CONGRATULATIONS! 🎉</span>
                </div>
                <p className="text-white leading-relaxed">
                  You just made a fantastic choice! Dip Kunwar is ready to build high-impact, smooth, and creative digital products for your engineering team.
                </p>
                <div className="flex items-center gap-2 text-zinc-300 text-xs">
                  <Check className="w-4 h-4 text-[#ccff00]" />
                  <span>Email copied to your clipboard: <span className="text-[#ccff00] font-bold">kunwardipson89@gmail.com</span></span>
                </div>
              </div>
            ),
          };
        } else {
          responseLog = {
            id: getNextLogId("resp"),
            type: "error",
            content: (
              <p className="font-mono text-xs text-red-400">
                sudo: {args.slice(1).join(" ")}: command not found. Did you mean <button onClick={() => executeCommand("sudo hire-dip")} className="underline text-[#ccff00]">&apos;sudo hire-dip&apos;</button>?
              </p>
            ),
          };
        }
        break;

      case "contact":
        responseLog = {
          id: getNextLogId("resp"),
          type: "custom",
          content: (
            <div className="space-y-2 font-mono text-xs sm:text-sm py-1">
              <p className="text-[#38bdf8] font-bold">CONTACT CHANNELS:</p>
              <ul className="space-y-1 text-zinc-300">
                <li>📧 Email: <a href="mailto:kunwardipson89@gmail.com" className="text-[#ccff00] hover:underline font-bold">kunwardipson89@gmail.com</a></li>
                <li>📍 Location: <span className="text-white">Nepal (NPT)</span></li>
                <li>📸 Instagram: <a href="https://instagram.com/dijsujdo" target="_blank" rel="noreferrer" className="text-pink-400 hover:underline">@dijsujdo</a></li>
                <li>🐙 GitHub: <a href="https://github.com/DipKunwar" target="_blank" rel="noreferrer" className="text-white hover:underline">@DipKunwar</a></li>
                <li>🌐 Official Domain: <a href="https://dipkunwar.com.np" target="_blank" rel="noreferrer" className="text-[#38bdf8] hover:underline">dipkunwar.com.np</a></li>
              </ul>
            </div>
          ),
        };
        break;

      case "matrix":
        setIsMatrixMode((prev) => !prev);
        responseLog = {
          id: getNextLogId("resp"),
          type: "success",
          content: (
            <p className="font-mono text-xs text-[#22c55e]">
              Matrix mode {isMatrixMode ? "DEACTIVATED" : "ACTIVATED"}. Entering the cyber mainframe...
            </p>
          ),
        };
        break;

      case "date":
        responseLog = {
          id: getNextLogId("resp"),
          type: "text",
          content: (
            <p className="font-mono text-xs text-zinc-300">
              Nepal Standard Time (NPT, GMT+5:45)
            </p>
          ),
        };
        break;

      case "repo":
        window.open("https://github.com/DipKunwar/portfolio", "_blank");
        responseLog = {
          id: getNextLogId("resp"),
          type: "success",
          content: <p className="font-mono text-xs text-[#38bdf8]">Opening GitHub repository in new tab...</p>,
        };
        break;

      case "resume":
      case "cv":
        window.open("/Dip_Kunwar_Resume.pdf", "_blank");
        responseLog = {
          id: getNextLogId("resp"),
          type: "success",
          content: (
            <p className="font-mono text-xs text-[#ccff00]">
              📄 Opening Dip Kunwar&apos;s Official Resume PDF in new tab... (<a href="/Dip_Kunwar_Resume.pdf" target="_blank" rel="noopener noreferrer" className="underline font-bold">Direct Link</a>)
            </p>
          ),
        };
        break;

      case "clear":
      case "cls":
        setLogs(createInitialLogs());
        setInput("");
        return;

      case "exit":
      case "quit":
        onClose();
        return;

      default:
        responseLog = {
          id: getNextLogId("resp"),
          type: "error",
          content: (
            <p className="font-mono text-xs text-red-400">
              Command not recognized: <span className="text-white">&apos;{trimmed}&apos;</span>. Type <button onClick={() => executeCommand("help")} className="underline text-[#ccff00]">&apos;help&apos;</button> for available commands.
            </p>
          ),
        };
        break;
    }

    setLogs((prev) => [...prev, commandLog, ...(responseLog ? [responseLog] : [])]);
    setInput("");
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      executeCommand(input);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (history.length > 0) {
        const nextIndex = historyIndex === -1 ? history.length - 1 : Math.max(0, historyIndex - 1);
        setHistoryIndex(nextIndex);
        setInput(history[nextIndex]);
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (historyIndex !== -1) {
        const nextIndex = historyIndex + 1;
        if (nextIndex >= history.length) {
          setHistoryIndex(-1);
          setInput("");
        } else {
          setHistoryIndex(nextIndex);
          setInput(history[nextIndex]);
        }
      }
    } else if (e.key === "Tab") {
      e.preventDefault();
      // Auto-complete match
      const match = COMMAND_LIST.find((c) => c.cmd.startsWith(input.toLowerCase()));
      if (match) {
        setInput(match.cmd);
      }
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      {/* Click outside to close backdrop */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Terminal Window Container */}
      <div
        className={`relative z-10 w-full transition-all duration-300 flex flex-col rounded-2xl border shadow-2xl overflow-hidden ${
          isMaximized ? "h-[94vh] max-w-7xl" : "h-[600px] max-w-3xl"
        } ${
          isMatrixMode
            ? "bg-[#031508] border-[#22c55e]/50 shadow-[0_0_50px_rgba(34,197,94,0.3)]"
            : "bg-[#0c0e17] border-white/15 shadow-[0_0_50px_rgba(0,0,0,0.8)]"
        }`}
      >
        {/* Terminal Header Bar */}
        <div className="flex items-center justify-between px-4 py-3 bg-[#131724] border-b border-white/10 select-none">
          <div className="flex items-center gap-2">
            {/* Window control dots */}
            <button
              onClick={onClose}
              className="w-3.5 h-3.5 rounded-full bg-[#ef4444] hover:opacity-80 transition-opacity"
              title="Close Terminal"
            />
            <button
              onClick={() => setIsMaximized((prev) => !prev)}
              className="w-3.5 h-3.5 rounded-full bg-[#eab308] hover:opacity-80 transition-opacity"
              title="Maximize"
            />
            <button
              onClick={() => setLogs([])}
              className="w-3.5 h-3.5 rounded-full bg-[#22c55e] hover:opacity-80 transition-opacity"
              title="Clear Buffer"
            />
            <span className="ml-2 font-mono text-xs font-semibold text-zinc-400 flex items-center gap-1.5">
              <TerminalIcon className="w-3.5 h-3.5 text-[#ccff00]" />
              <span>dip@kunwar: ~ (zsh)</span>
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsMaximized((prev) => !prev)}
              className="p-1.5 text-zinc-400 hover:text-white rounded-lg hover:bg-white/5 transition-colors hidden sm:block"
              aria-label="Toggle Fullscreen"
            >
              {isMaximized ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
            </button>
            <button
              onClick={onClose}
              className="p-1.5 text-zinc-400 hover:text-white rounded-lg hover:bg-white/5 transition-colors"
              aria-label="Close Terminal"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Scrollable Terminal Output Area */}
        <div className="flex-1 p-4 sm:p-6 overflow-y-auto space-y-3 font-mono scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent">
          {logs.map((log) => (
            <div key={log.id} className="leading-relaxed">
              {log.content}
            </div>
          ))}
          <div ref={terminalEndRef} />
        </div>

        {/* Quick Suggestion Chips */}
        <div className="px-4 py-2 bg-black/40 border-t border-white/5 flex items-center gap-2 overflow-x-auto no-scrollbar select-none text-[11px] font-mono">
          <span className="text-zinc-500 whitespace-nowrap">Quick:</span>
          {["help", "projects", "skills", "sudo hire-dip", "contact", "clear"].map((cmd) => (
            <button
              key={cmd}
              onClick={() => executeCommand(cmd)}
              className="px-2.5 py-1 rounded-md bg-white/5 hover:bg-[#ccff00] hover:text-black text-zinc-300 transition-colors whitespace-nowrap border border-white/5 hover:border-[#ccff00]"
            >
              {cmd}
            </button>
          ))}
        </div>

        {/* Command Input Bar */}
        <div className="p-3 sm:p-4 bg-[#090b12] border-t border-white/10 flex items-center gap-3">
          <div className="flex items-center gap-1 font-mono text-xs sm:text-sm text-[#ccff00] font-bold select-none">
            <span>dip@kunwar:~$</span>
          </div>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type a command (e.g. 'help', 'projects', 'sudo hire-dip')..."
            className="flex-1 bg-transparent text-white font-mono text-xs sm:text-sm focus:outline-none placeholder:text-zinc-600 caret-[#ccff00]"
            autoFocus
          />
          <button
            onClick={() => executeCommand(input)}
            className="p-1.5 rounded-lg bg-[#ccff00] text-black hover:bg-[#d9ff33] transition-colors"
            title="Execute (Enter)"
          >
            <CornerDownLeft className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
