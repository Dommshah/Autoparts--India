"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon, Monitor, Check, X } from "lucide-react";
import { useTheme } from "./ThemeProvider";
import { useEffect, useState, useRef, useSyncExternalStore } from "react";

const subscribeToNothing = () => () => undefined;
const getClientSnapshot = () => true;
const getServerSnapshot = () => false;

export default function ThemeSwitcher() {
  const isClient = useSyncExternalStore(subscribeToNothing, getClientSnapshot, getServerSnapshot);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { theme, setTheme, resolvedTheme } = useTheme();

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  const options = [
    { value: "light" as const, label: "Light", icon: Sun, desc: "Always light mode" },
    { value: "dark" as const, label: "Dark", icon: Moon, desc: "Always dark mode" },
    { value: "system" as const, label: "System", icon: Monitor, desc: "Match system preference" },
  ];

  if (!isClient) {
    return (
      <div className="relative">
        <button className="flex items-center gap-2 px-3 py-2 rounded-xl transition-colors hover:bg-surface" aria-hidden="true">
          <Sun size={20} className="text-primary" />
        </button>
      </div>
    );
  }

  const handleSelect = (value: "light" | "dark" | "system") => {
    setTheme(value);
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded-xl transition-colors hover:bg-surface"
        aria-label={`Theme: ${resolvedTheme}. Click to change.`}
        aria-expanded={isOpen}
        aria-haspopup="listbox"
      >
        {resolvedTheme === "dark" ? (
          <Moon size={20} className="text-primary" />
        ) : (
          <Sun size={20} className="text-primary" />
        )}
        {isOpen && <X size={16} className="text-muted" />}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            className="absolute right-0 top-full mt-2 w-48 bg-white dark:bg-slate-800 rounded-xl border border-border dark:border-border/50 shadow-xl py-2 overflow-hidden z-50"
            role="listbox"
            aria-label="Select theme"
          >
            {options.map((opt) => (
              <button
                key={opt.value}
                onClick={() => handleSelect(opt.value)}
                role="option"
                aria-selected={theme === opt.value}
                className={`w-full flex items-center gap-3 px-4 py-3 text-left transition-colors ${
                  theme === opt.value
                    ? "bg-primary/10 text-primary"
                    : "text-foreground hover:bg-surface"
                }`}
              >
                <opt.icon size={18} className="shrink-0" />
                <div className="flex-1 text-left">
                  <p className="font-medium text-sm">{opt.label}</p>
                  <p className="text-xs text-muted">{opt.desc}</p>
                </div>
                {theme === opt.value && <Check size={16} className="text-primary shrink-0" />}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}