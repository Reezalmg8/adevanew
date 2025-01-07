import React from 'react';
import { Button } from "@/components/ui/button";
import { X } from 'lucide-react';
import Image from 'next/image';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  serviceName: string;
  serviceDescription: string;
  pricing: { duration: string; member: string; nonMember: string }[];
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, serviceName, serviceDescription, pricing }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-white rounded-lg p-8 max-w-3xl w-full mx-auto shadow-2xl transform transition-all duration-300 ease-in-out">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-serif font-bold text-[#6F5541]">{serviceName}</h2>
          <button onClick={onClose} className="text-[#6F5541] hover:text-[#A99074]">
            <X size={24} />
          </button>
        </div>
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/2">
            <Image
              src={`/images/${serviceName.toLowerCase().replace(/ /g, '-')}.jpg`}
              alt={serviceName}
              width={400}
              height={300}
              className="rounded-lg object-cover w-full h-64"
            />
          </div>
          <div className="md:w-1/2">
            <p className="text-[#6F5541] mb-6">{serviceDescription}</p>
            <h3 className="font-bold text-[#6F5541] mb-2">Pricing:</h3>
            <div className="bg-[#F8E3DA] rounded-lg p-4 mb-6">
              {pricing.map((price, index) => (
                <div key={index} className="flex justify-between items-center py-2 border-b border-[#A99074] last:border-b-0">
                  <span className="font-medium text-[#6F5541]">{price.duration}</span>
                  <div>
                    <span className="text-[#6F5541]">Member: {price.member}</span>
                    <span className="text-[#A99074] ml-2">Non-Member: {price.nonMember}</span>
                  </div>
                </div>
              ))}
            </div>
            <Button
              onClick={() => window.open('https://adevaspa.setmore.com', '_blank')}
              className="w-full bg-[#6F5541] text-white hover:bg-[#A99074]"
            >
              Book Now
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;

