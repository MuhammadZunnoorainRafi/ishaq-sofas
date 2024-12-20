import { FaFacebookMessenger, FaWhatsapp } from 'react-icons/fa';
import { sofaData } from '../lib/contants';
import { AnimatePresence, motion } from 'framer-motion';

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: 'easeInOut' },
  },
  exit: {
    opacity: 0,
    y: -50,
    transition: { duration: 0.8, ease: 'easeInOut' },
  },
  hover: {
    scale: 1.01,
    transition: { type: 'spring', stiffness: 300 }, // Spring effect
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.15)',
  },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.5 },
  },
};

function Home() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-6 p-6"
    >
      <AnimatePresence>
        {sofaData.map((val) => (
          <motion.div
            key={val.id}
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            whileHover="hover" // Apply hover animation
            className="bg-white hover:cursor-pointer rounded-lg shadow-sm hover:shadow-md border border-slate-200 border-opacity-0 hover:border-opacity-100 overflow-hidden flex items-center"
          >
            <motion.div whileHover="hover" className="w-[40%]">
              <img
                src={val.image}
                alt={val.name}
                className="w-full h-36 sm:h-48 object-cover"
              />
            </motion.div>
            <div className="w-[60%] py-3 px-4 sm:py-6 sm:px-8">
              <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mb-1">
                {val.name}
              </h2>
              <p className="text-gray-700 text-base sm:text-lg font-bold mb-3">
                ${val.price}
              </p>
              <div className="flex items-center justify-between">
                <p className="text-sm text-gray-500">Place Order From</p>
                <div className="flex space-x-[7px] sm:space-x-3">
                  <FaFacebookMessenger size={20} />
                  <FaWhatsapp size={20} />
                  {/* <button className="rounded-full border border-gray-300 w-9 h-9 flex items-center justify-center text-gray-600 hover:bg-gray-200 transition duration-200">
              <span className="text-sm font-medium">W</span>
            </button> */}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
    </motion.div>
  );
}

export default Home;
