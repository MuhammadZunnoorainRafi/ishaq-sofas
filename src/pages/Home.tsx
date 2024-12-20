function Home() {
  return (
    <div className=" space-y-6 p-6">
      <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition hover:scale-105 hover:shadow-xl">
        <img
          src="https://via.placeholder.com/400x300"
          alt="Nicole Sofa"
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <h2 className="text-lg font-semibold text-gray-800">NICOLE</h2>
          <p className="text-sm text-gray-500 mt-2">
            <span className="font-bold">Available Colors:</span> Plush
          </p>
          <p className="text-sm text-gray-500">
            <span className="font-bold">Fabrics Available:</span> Chenille
          </p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition hover:scale-105">
        <img
          src="https://via.placeholder.com/400x300"
          alt="Olympia Sofa"
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <h2 className="text-lg font-semibold text-gray-800">
            OLYMPIA / ASHWIN
          </h2>
          <p className="text-sm text-gray-500 mt-2">
            <span className="font-bold">Available Colors:</span> Plush
          </p>
          <p className="text-sm text-gray-500">
            <span className="font-bold">Fabrics Available:</span> Chenille
          </p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition hover:scale-105">
        <img
          src="https://via.placeholder.com/400x300"
          alt="Dino Sofa"
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <h2 className="text-lg font-semibold text-gray-800">DINO</h2>
          <p className="text-sm text-gray-500 mt-2">
            <span className="font-bold">Available Colors:</span> Jumbo Chord
          </p>
          <p className="text-sm text-gray-500">
            <span className="font-bold">Fabrics Available:</span> Grey Jumbo
            Chord
          </p>
        </div>
      </div>
      <div className="max-w-xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden flex">
        <div className="w-1/3 relative h-48 bg-gray-200">
          <div className="absolute inset-0 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-16 h-16 text-gray-400"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.158 5.159m-8.129-12.21a2.25 2.25 0 10-2.834 2.834L3.75 19.5h16.5m-16.5-19.5l16.5 16.5"
              />
            </svg>
          </div>
        </div>
        <div className="w-2/3 p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            Verona Sofa
          </h2>
          <p className="text-gray-600 text-lg font-bold mb-4">$350</p>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Place Order From</p>
            </div>
            <div className="flex space-x-4">
              <button className="rounded-full border border-gray-300 w-8 h-8 flex items-center justify-center hover:bg-gray-100">
                <span className="text-sm font-bold text-gray-600">F</span>
              </button>
              <button className="rounded-full border border-gray-300 w-8 h-8 flex items-center justify-center hover:bg-gray-100">
                <span className="text-sm font-bold text-gray-600">W</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden flex items-center">
        <div className="w-1/3 relative h-48 bg-gray-100 flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-20 h-20 text-gray-300"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.158 5.159m-8.129-12.21a2.25 2.25 0 10-2.834 2.834L3.75 19.5h16.5m-16.5-19.5l16.5 16.5"
            />
          </svg>
        </div>
        <div className="w-2/3 py-6 px-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-1">
            Verona Sofa
          </h2>
          <p className="text-gray-700 text-lg font-bold mb-3">$350</p>
          <div className="flex items-center justify-between">
            <p className="text-sm text-gray-500">Place Order From</p>
            <div className="flex space-x-3">
              <button className="rounded-full border border-gray-300 w-9 h-9 flex items-center justify-center text-gray-600 hover:bg-gray-200 transition duration-200">
                <span className="text-sm font-medium">F</span>
              </button>
              <button className="rounded-full border border-gray-300 w-9 h-9 flex items-center justify-center text-gray-600 hover:bg-gray-200 transition duration-200">
                <span className="text-sm font-medium">W</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
