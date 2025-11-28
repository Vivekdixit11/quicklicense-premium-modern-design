"use client";

import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function WhatsAppButton() {
  return (
    <motion.a
      href="https://wa.me/919891614601"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#23A8DD] hover:bg-[#083E6B] rounded-full shadow-lg flex items-center justify-center smooth-transition group"
    >
      <MessageCircle className="w-7 h-7 text-white" />
      <span className="absolute right-full mr-3 px-4 py-2 bg-[#23A8DD] text-white text-sm font-medium rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 smooth-transition pointer-events-none">
        Chat with us on WhatsApp
      </span>
    </motion.a>
  );
}

