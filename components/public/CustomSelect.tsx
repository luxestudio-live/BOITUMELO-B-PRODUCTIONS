"use client";

import { useState, useRef, useEffect, useId } from "react";
import { ChevronDown, Check } from "lucide-react";

export interface SelectOption {
  value: string;
  label: string;
  sublabel?: string;
}

interface CustomSelectProps {
  id?: string;
  label?: string;
  value: string;
  onChange: (value: string) => void;
  options: SelectOption[];
  placeholder?: string;
  className?: string;
  required?: boolean;
}

export default function CustomSelect({
  id: externalId,
  label,
  value,
  onChange,
  options,
  placeholder = "Select an option",
  className = "",
  required = false,
}: CustomSelectProps) {
  const generatedId = useId();
  const selectId = externalId || generatedId;
  const [isOpen, setIsOpen] = useState(false);
  const [focusedIndex, setFocusedIndex] = useState(-1);
  const containerRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLUListElement>(null);

  const selectedOption = options.find((opt) => opt.value === value);

  // Close when clicking outside
  useEffect(() => {
    function handleClickOutside(e: MouseEvent | TouchEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, []);

  // Scroll focused option into view when navigating with keyboard
  useEffect(() => {
    if (isOpen && focusedIndex >= 0 && listRef.current) {
      const items = listRef.current.querySelectorAll("li");
      if (items[focusedIndex]) {
        items[focusedIndex].scrollIntoView({ block: "nearest" });
      }
    }
  }, [isOpen, focusedIndex]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") {
      setIsOpen(false);
      return;
    }

    if (!isOpen) {
      if (e.key === "Enter" || e.key === " " || e.key === "ArrowDown" || e.key === "ArrowUp") {
        e.preventDefault();
        setIsOpen(true);
        const currentIndex = options.findIndex((opt) => opt.value === value);
        setFocusedIndex(currentIndex >= 0 ? currentIndex : 0);
      }
      return;
    }

    if (e.key === "ArrowDown") {
      e.preventDefault();
      setFocusedIndex((prev) => (prev < options.length - 1 ? prev + 1 : 0));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setFocusedIndex((prev) => (prev > 0 ? prev - 1 : options.length - 1));
    } else if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      if (focusedIndex >= 0 && focusedIndex < options.length) {
        onChange(options[focusedIndex].value);
        setIsOpen(false);
      }
    } else if (e.key === "Tab") {
      setIsOpen(false);
    }
  };

  return (
    <div className={`relative w-full ${className}`} ref={containerRef}>
      {label && (
        <label
          htmlFor={selectId}
          id={`${selectId}-label`}
          className="block text-xs font-mono uppercase tracking-wider text-brand-teal font-medium mb-2"
        >
          {label} {required && <span className="text-brand-gold">*</span>}
        </label>
      )}

      {/* Trigger Button */}
      <button
        type="button"
        id={selectId}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-labelledby={label ? `${selectId}-label ${selectId}` : undefined}
        onClick={() => {
          setIsOpen(!isOpen);
          const currentIndex = options.findIndex((opt) => opt.value === value);
          setFocusedIndex(currentIndex >= 0 ? currentIndex : 0);
        }}
        onKeyDown={handleKeyDown}
        className={`w-full bg-[#F8F9FA] hover:bg-white focus:bg-white border rounded-sm px-4 py-3 text-left text-sm text-brand-teal transition-all flex items-center justify-between cursor-pointer focus:outline-none ${
          isOpen
            ? "border-brand-gold ring-1 ring-brand-gold/30 bg-white shadow-sm"
            : "border-brand-teal/20 focus:border-brand-gold focus:ring-1 focus:ring-brand-gold/20"
        }`}
      >
        <span className="truncate pr-3 font-normal">
          {selectedOption ? selectedOption.label : <span className="text-brand-teal/40">{placeholder}</span>}
        </span>
        <ChevronDown
          className={`w-4 h-4 text-brand-gold flex-shrink-0 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
          aria-hidden="true"
        />
      </button>

      {/* Hidden input for standard form submission if needed */}
      <input type="hidden" name={externalId || ""} value={value} />

      {/* Custom Dropdown Menu — strictly bounded to 100% width of the trigger */}
      {isOpen && (
        <div className="absolute top-[calc(100%+4px)] left-0 right-0 w-full z-50 bg-white border border-brand-teal/20 rounded-sm shadow-xl overflow-hidden animate-in fade-in-0 zoom-in-95 duration-150">
          <ul
            ref={listRef}
            role="listbox"
            aria-labelledby={label ? `${selectId}-label` : undefined}
            tabIndex={-1}
            className="max-h-60 overflow-y-auto py-1 divide-y divide-brand-teal/5 focus:outline-none"
          >
            {options.map((opt, index) => {
              const isSelected = opt.value === value;
              const isFocused = index === focusedIndex;

              return (
                <li
                  key={opt.value}
                  role="option"
                  aria-selected={isSelected}
                  onClick={() => {
                    onChange(opt.value);
                    setIsOpen(false);
                  }}
                  onMouseEnter={() => setFocusedIndex(index)}
                  className={`px-4 py-2.5 text-xs sm:text-sm cursor-pointer transition-colors flex items-center justify-between ${
                    isSelected
                      ? "bg-[#F6F2EA] text-brand-teal font-medium"
                      : isFocused
                      ? "bg-[#F6F2EA]/50 text-brand-teal"
                      : "text-brand-teal/85 hover:bg-[#F6F2EA]/40 hover:text-brand-teal"
                  }`}
                >
                  <div className="truncate pr-2">
                    <span className="block truncate">{opt.label}</span>
                    {opt.sublabel && (
                      <span className="block text-[11px] text-brand-teal/50 truncate font-mono mt-0.5">
                        {opt.sublabel}
                      </span>
                    )}
                  </div>
                  {isSelected && (
                    <Check className="w-3.5 h-3.5 text-brand-gold flex-shrink-0 ml-2" aria-hidden="true" />
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}
