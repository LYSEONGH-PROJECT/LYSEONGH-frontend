import { useEffect } from 'react';
import { X, Check } from 'lucide-react';

export default function Modal({ isOpen, onClose }) {

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Background overlay */}
      <div 
        className="fixed inset-0 bg-black/50 bg-opacity-50 transition-opacity"
        onClick={onClose}
      />

      {/* Modal container */}
      <div 
        className="relative bg-white rounded-lg shadow-xl w-full max-w-md transform transition-all duration-200 ease-out"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute right-4 cursor-pointer top-4 p-1 text-gray-400 hover:text-gray-600 transition-colors rounded-full hover:bg-gray-100"
        >
          <X size={20} />
        </button>

        {/* Modal content */}
        <div className="p-8 text-center">
          {/* Success icon */}
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
              <Check size={32} className="text-green-600" />
            </div>
          </div>
          
          {/* Title */}
          <h3 
            id="modal-title"
            className="text-2xl font-bold text-gray-900 mb-4"
          >
            Message Sent Successfully!
          </h3>
          
          {/* Description */}
          <p className="text-gray-600 text-base leading-relaxed mb-8">
            Thank you for contacting LYSEONGH. We have received your message and will get back to you shortly.
          </p>
        </div>
      </div>
    </div>
  );
}