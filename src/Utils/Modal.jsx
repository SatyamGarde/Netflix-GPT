// import { X } from "react-feather"
import React from "react";
export default function Modal({ open: defaultOpen, onClose, children }) {
  return (
    // backdrop
    <div
      onClick={onClose}
      className={`
        fixed inset-0 flex justify-center items-center transition-colors
        ${open ? "visible bg-black/70" : "invisible"}
      `}
    >
      {/* modal */}
      <div
        onClick={(e) => e.stopPropagation()}
        className={`
          bg-black rounded-xl shadow p-6 transition-all
          ${open ? "scale-100 opacity-100" : "scale-125 opacity-0"}
        `}
        style={{ maxHeight: "95%", overflowY: "auto" }}
        
      >
      <style>{`
          .modal-content::-webkit-scrollbar {
            display: none;
          }
        `}</style>
        <button
          onClick={onClose}
          className="absolute top-2 right-2 p-1 rounded-full text-white bg-gray-500 hover:bg-gray-50 hover:text-gray-600 px-5 text-2xl"
        >
          X
        </button>
        {children}
      </div>
    </div>
  )
}