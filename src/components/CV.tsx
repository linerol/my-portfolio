"use client"
import { motion } from "framer-motion";
import { Download, FileText } from "lucide-react";

export default function CV() {
  const handleDownload = () => {
    // Logique de téléchargement du CV
    console.log("Téléchargement du CV");
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: 0.7 }}
      className="w-full h-full flex flex-col items-center justify-center cursor-pointer"
      onClick={handleDownload}
    >
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="flex flex-col items-center gap-3 p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 hover:border-primary/30"
      >
        <div className="p-2 bg-success-gradient rounded-lg">
          <FileText className="w-5 h-5 text-white" />
        </div>
        
        <div className="text-center">
          <h3 className="text-sm font-semibold text-gray-800">CV</h3>
          <p className="text-xs text-gray-500">Télécharger</p>
        </div>

        <Download className="w-4 h-4 text-success" />
      </motion.div>
    </motion.div>
  );
} 