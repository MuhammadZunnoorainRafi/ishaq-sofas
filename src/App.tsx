import { Outlet } from 'react-router';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="flex flex-col min-h-screen justify-between bg-gray-100">
      <Navbar />
      <main className="mb-auto pt-20 ">
        <div className="max-w-6xl mx-auto">
          <Outlet />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
