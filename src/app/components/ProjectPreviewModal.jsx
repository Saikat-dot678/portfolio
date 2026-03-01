"use client";

export default function ProjectPreviewModal({ video, description, onClose }) {
  return (
    <div className="fixed inset-0 bg-black/70 flex justify-center items-center z-50 p-4">
      <div className="bg-[#1f1f1f] w-full max-w-2xl rounded-xl relative text-white shadow-xl 
                      max-h-[90vh] overflow-y-auto">

        {/* Close button */}
        <button
          onClick={onClose}
          className="sticky top-0 right-0 float-right mr-4 mt-3 z-50 text-3xl font-bold
                     text-gray-300 hover:text-white"
        >
          ✕
        </button>

        {/* STRICT 16:9 container */}
        <div className="relative w-full pb-[56.25%] px-4 mt-2 rounded-lg overflow-hidden">
          <video
            src={video}
            controls
            className="
              absolute top-0 left-0 w-full h-full
              object-contain    /* ← TRUE FIX */
              rounded-lg
              bg-black          /* helps eliminate white background edges */
            "
          />
        </div>

        {/* Description */}
        <p className="text-gray-300 px-6 pb-6 mt-4 leading-relaxed text-base">
          {description}
        </p>
      </div>
    </div>
  );
}