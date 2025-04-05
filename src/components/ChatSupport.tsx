import React from 'react';
import { MessageCircle } from 'lucide-react';

const ChatSupport = () => {
  const whatsappNumber = '919390502825'; // Include country code (91 for India)
  const whatsappUrl = `https://wa.me/${whatsappNumber}`;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition duration-150 flex items-center justify-center"
      >
        <MessageCircle className="h-6 w-6" />
      </a>
    </div>
  );
};

export default ChatSupport;