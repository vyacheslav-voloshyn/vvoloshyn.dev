import { motion } from 'framer-motion';
import { FiCode, FiUser } from 'react-icons/fi';

import { useView } from '@/lib/context/ViewContext';

const ViewToggle = () => {
  const { viewMode, toggleView } = useView();

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={toggleView}
      className="fixed right-4 top-4 z-50 flex items-center gap-2 rounded-lg border border-blue-400/20 bg-gradient-to-r from-blue-600 to-blue-700 px-4 py-2 text-white shadow-lg backdrop-blur-sm transition-all duration-200 hover:from-blue-700 hover:to-blue-800"
    >
      {viewMode === 'portfolio' ? (
        <>
          <FiCode className="h-5 w-5" />
          <span>Launch IDE</span>
        </>
      ) : (
        <>
          <FiUser className="h-5 w-5" />
          <span>View Portfolio</span>
        </>
      )}
    </motion.button>
  );
};

export default ViewToggle;
