import React, { useState } from "react";
import { flutterPreview } from "../../data/portfolio.js";

export default function FlutterProjectPreview() {
  const [activeScreen, setActiveScreen] = useState(0);
  const selectedScreen = flutterPreview.screens[activeScreen];

  return (
    <div className="mb-10 border-b border-[var(--line)] pb-10">
      <div className="mb-5 flex flex-wrap items-end justify-between gap-3">
        <div>
          <p className="mb-2 text-[10px] font-bold uppercase tracking-[2px] text-[var(--accent-soft)]">Flutter app preview</p>
          <h4 className="text-xl font-semibold">Foodie — a closer look</h4>
        </div>
        <p className="text-xs text-[var(--muted)]">Watch the demo or browse the screens</p>
      </div>

      <div className="grid gap-5 rounded-2xl border border-[var(--line)] bg-[var(--panel)] p-4 sm:p-5 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
        <div className="grid min-h-[300px] place-items-center overflow-hidden rounded-xl bg-[#090909]">
          {selectedScreen ? (
            <img
              className="max-h-[min(72vh,620px)] w-full object-contain"
              src={selectedScreen.image}
              alt={`${selectedScreen.title} screen of the Foodie Flutter app`}
            />
          ) : (
            <video
              className="max-h-[min(72vh,620px)] w-full object-contain"
              src={flutterPreview.video}
              poster={flutterPreview.screens[0].image}
              controls
              playsInline
              preload="none"
              aria-label="Foodie Flutter app demo"
            />
          )}
        </div>

        <div className="flex min-w-0 flex-col">
          <p className="mb-3 text-xs leading-relaxed text-[var(--muted)]">
            {selectedScreen
              ? `Screen ${activeScreen + 1} of ${flutterPreview.screens.length} · ${selectedScreen.title}`
              : "App walkthrough · Select any screen below for a closer look"}
          </p>
          <div
            aria-label="Flutter app preview gallery"
            className="grid max-h-[min(72vh,620px)] grid-cols-3 gap-2 overflow-y-auto pr-1 sm:grid-cols-4"
          >
            <button
              type="button"
              onClick={() => setActiveScreen(null)}
              aria-pressed={activeScreen === null}
              className={`group overflow-hidden rounded-lg border text-left transition ${
                activeScreen === null
                  ? "border-[var(--accent)] ring-1 ring-[var(--accent)]"
                  : "border-[var(--line)] hover:border-[var(--accent-soft)]"
              }`}
            >
              <span className="grid aspect-[9/16] place-items-center bg-[#171614] px-2 text-center text-xs font-medium text-[var(--text)]">
                ▶<span className="mt-1 block">Watch demo</span>
              </span>
            </button>
            {flutterPreview.screens.map((screen, index) => (
              <button
                key={screen.title}
                type="button"
                onClick={() => setActiveScreen(index)}
                aria-label={`View ${screen.title} screen`}
                aria-pressed={activeScreen === index}
                className={`group overflow-hidden rounded-lg border text-left transition ${
                  activeScreen === index
                    ? "border-[var(--accent)] ring-1 ring-[var(--accent)]"
                    : "border-[var(--line)] hover:border-[var(--accent-soft)]"
                }`}
              >
                <img
                  className="aspect-[9/16] w-full bg-[#090909] object-contain transition duration-300 group-hover:scale-[1.03]"
                  src={screen.image}
                  alt=""
                  loading="lazy"
                />
                <span className="block truncate px-2 py-1.5 text-[10px] text-[var(--muted)]">
                  {String(index + 1).padStart(2, "0")} · {screen.title}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
