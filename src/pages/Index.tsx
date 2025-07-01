import ComparisonMatrix from "@/components/ComparisonMatrix";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Page Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <img 
                src="/kube_logo.png" 
                alt="Kubeark Logo" 
                className="h-12 w-auto"
              />
              <div>
                <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
                  AI Matrix Explorer
                </h1>
                <p className="mt-1 text-sm md:text-lg text-gray-600">
                  Enterprise AI Platform Comparison & Analysis
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <ComparisonMatrix />
    </div>
  );
};

export default Index;
