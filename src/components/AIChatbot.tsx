import React from 'react';
import { MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const AIChatbot: React.FC = () => {
  const navigate = useNavigate();

  const handleChatClick = () => {
    navigate('/chat');
  };

  return (
    <motion.button
      onClick={handleChatClick}
      className="fixed bottom-4 right-4 z-50 w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 rounded-full shadow-xl transition-all duration-300 text-white"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 1 }}
      title="Chat with AI Assistant"
    >
      <MessageCircle className="w-5 h-5 mx-auto" />
    </motion.button>
  );
};

export default AIChatbot;
