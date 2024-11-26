import React from 'react';
import { X } from 'lucide-react';
import { HealthEvent } from '../types';

interface EventModalProps {
  event: HealthEvent;
  onClose: () => void;
}

const EventModal: React.FC<EventModalProps> = ({ event, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-xl max-w-md w-full p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
        >
          <X className="h-6 w-6" />
        </button>
        
        <div className="mt-2">
          <h3 className="text-xl font-semibold text-gray-900">{event.name}</h3>
          <p className="mt-2 text-sm text-gray-600">{event.date}</p>
          
          <div className="mt-4">
            <img
              src={event.imageUrl}
              alt={event.name}
              className="w-full h-48 object-cover rounded-lg"
            />
          </div>

          <p className="mt-4 text-sm text-gray-600">{event.description}</p>
          
          <div className="mt-6 flex justify-end">
            <button
              onClick={onClose}
              className="px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 transition-colors duration-200"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventModal;