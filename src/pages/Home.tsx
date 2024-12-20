import { FaFacebookMessenger, FaWhatsapp } from 'react-icons/fa';
import { sofaData } from '../lib/contants';
import { SofaType } from '../lib/types';

function Home() {
  return (
    <div className=" space-y-6 p-6">
      {sofaData.map((val: SofaType) => (
        <div
          key={val.id}
          className=" bg-white hover:cursor-pointer rounded-lg shadow-sm hover:shadow-md transition-all border border-slate-200 border-opacity-0 hover:border-opacity-100 overflow-hidden flex items-center"
        >
          <div className="w-[40%]">
            <img
              src={val.image}
              alt={val.name}
              className="w-full h-36 sm:h-48 object-cover"
            />
          </div>
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
                {/* <button className="rounded-full border border-gray-300 w-9 h-9 flex items-center justify-center text-gray-600 hover:bg-gray-200 transition duration-200">
                  <span className="text-sm font-medium">F</span>
                </button> */}
                <FaFacebookMessenger size={20} />
                <FaWhatsapp size={20} />
                {/* <button className="rounded-full border border-gray-300 w-9 h-9 flex items-center justify-center text-gray-600 hover:bg-gray-200 transition duration-200">
                  <span className="text-sm font-medium">W</span>
                </button> */}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Home;
