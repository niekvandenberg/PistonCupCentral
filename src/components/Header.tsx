import { useState } from "react";

export function Header() {
  const [showInstructions, setShowInstructions] = useState(false);

  return (
    <>
      <div className="border-b-4 border-primary pb-2 flex items-center justify-between">
        <div>
          <h2 className="font-display text-4xl text-primary transition-all duration-300 hover:tracking-wider cursor-default">
            Piston cup central
          </h2>
          <p className="font-sans text-xl text-gray-700">
            Pick your race track
          </p>
        </div>

        <button
          onClick={() => setShowInstructions(true)}
          className="w-9 h-9 rounded-full flex items-center justify-center hover:border-primary hover:text-primary transition-all duration-200 cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
            />
          </svg>
        </button>
      </div>

      {showInstructions && (
        <div
          className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center backdrop-blur-sm"
          onClick={() => setShowInstructions(false)}
        >
          <div
            className="bg-white rounded-2xl p-8 max-w-md w-full mx-6 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-display text-3xl text-primary">
                How to play
              </h2>
              <button
                onClick={() => setShowInstructions(false)}
                className="text-gray-400 hover:text-gray-700 text-4xl leading-none cursor-pointer transition-colors duration-200"
              >
                ×
              </button>
            </div>

            <ol className="space-y-4">
              {[
                {
                  step: "1",
                  text: "Pick a race track from the list on the right.",
                },
                {
                  step: "2",
                  text: "Download the Piston Cup Central app on your phone.",
                },
                {
                  step: "3",
                  text: "Scan the QR code with the app to load the track.",
                },
                { step: "4", text: "Place the AR track on a flat surface." },
                { step: "5", text: "Hit the gas and race to the finish!" },
              ].map(({ step, text }) => (
                <li key={step} className="flex items-start gap-4">
                  <span className="bg-primary text-white font-display text-sm w-7 h-7 rounded-full flex items-center justify-center shrink-0">
                    {step}
                  </span>
                  <p className="text-gray-700 pt-0.5">{text}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      )}
    </>
  );
}
