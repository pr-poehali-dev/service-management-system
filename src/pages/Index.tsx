
import Dashboard from '@/components/Dashboard';
import Navigation from '@/components/Navigation';

const Index = () => {
  return (
    <div className="flex h-screen bg-gray-100 overflow-hidden">
      <Navigation />
      <div className="flex-1 overflow-y-auto">
        <header className="bg-white border-b border-gray-200 p-4 flex justify-between items-center">
          <div className="flex items-center">
            <h2 className="text-lg font-medium">Панель управления</h2>
          </div>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <button className="p-2 rounded-full hover:bg-gray-100">
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">3</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-600">
                  <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                  <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
                </svg>
              </button>
            </div>
            <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center text-white font-medium cursor-pointer">
              АД
            </div>
          </div>
        </header>

        <main>
          <Dashboard />
        </main>
      </div>
    </div>
  );
};

export default Index;
