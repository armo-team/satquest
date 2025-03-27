<section class="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white py-24 overflow-hidden">
  <!-- Background pattern/grid effect -->
  <div class="absolute inset-0 bg-grid-pattern opacity-10"></div>
  
  <!-- Lightning bolt decorations -->
  <div class="absolute top-20 left-10 text-yellow-400 text-6xl opacity-20">⚡</div>
  <div class="absolute bottom-20 right-10 text-yellow-400 text-6xl opacity-20">⚡</div>
  
  <div class="container mx-auto px-6 relative z-10">
    <div class="flex flex-col md:flex-row items-center justify-between gap-12">
      <!-- Left side content -->
      <div class="text-left md:w-1/2">
        <div class="inline-block bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-semibold mb-6">
          Powered by Bitcoin Lightning Network ⚡
        </div>
        <h1 class="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          Contribute to <span class="text-yellow-400">Open Source</span>, 
          <br>Get Paid in <span class="text-yellow-400">Bitcoin</span>
        </h1>
        <p class="text-lg md:text-xl text-gray-300 mb-8 max-w-xl">
          SatQuest connects developers with exciting open source projects that reward contributions with instant Bitcoin payments over Lightning.
        </p>
        <div class="flex flex-wrap gap-4">
          <a href="/explore" class="bg-yellow-400 text-black px-8 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition shadow-lg hover:shadow-xl transform hover:-translate-y-1">
            Explore Issues
          </a>
          <a href="/projects" class="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-black transition shadow-lg hover:shadow-xl transform hover:-translate-y-1">
            List Your Project
          </a>
        </div>
        
        <!-- Stats -->
        <div class="flex flex-wrap mt-12 gap-8">
          <div>
            <p class="text-3xl font-bold text-yellow-400">250+</p>
            <p class="text-sm text-gray-400">Active Issues</p>
          </div>
          <div>
            <p class="text-3xl font-bold text-yellow-400">1,200+</p>
            <p class="text-sm text-gray-400">Developers</p>
          </div>
          <div>
            <p class="text-3xl font-bold text-yellow-400">18M</p>
            <p class="text-sm text-gray-400">Sats Paid</p>
          </div>
        </div>
      </div>
      
      <!-- Right side illustration/mockup -->
      <div class="md:w-1/2 flex justify-center">
        <div class="relative w-full max-w-md">
          <!-- Simulated app interface with tailwind -->
          <div class="bg-gray-800 rounded-xl shadow-2xl overflow-hidden border border-gray-700">
            <div class="bg-gray-900 p-4 border-b border-gray-700 flex items-center justify-between">
              <div class="flex items-center space-x-2">
                <div class="h-3 w-3 rounded-full bg-red-500"></div>
                <div class="h-3 w-3 rounded-full bg-yellow-500"></div>
                <div class="h-3 w-3 rounded-full bg-green-500"></div>
              </div>
              <div class="text-xs text-gray-400">SatQuest</div>
            </div>
            <div class="p-4 space-y-3">
              <div class="bg-gray-700 p-3 rounded-lg flex items-center">
                <div class="mr-3 text-yellow-400 text-lg">⚡</div>
                <div>
                  <div class="text-sm font-medium">Fix pagination in user dashboard</div>
                  <div class="text-xs text-gray-400">21,000 sats • React • 3 days ago</div>
                </div>
              </div>
              <div class="bg-gray-700 p-3 rounded-lg flex items-center">
                <div class="mr-3 text-yellow-400 text-lg">⚡</div>
                <div>
                  <div class="text-sm font-medium">Implement dark mode toggle</div>
                  <div class="text-xs text-gray-400">15,000 sats • Vue • 1 day ago</div>
                </div>
              </div>
              <div class="bg-gray-700 p-3 rounded-lg flex items-center">
                <div class="mr-3 text-yellow-400 text-lg">⚡</div>
                <div>
                  <div class="text-sm font-medium">Add TypeScript support</div>
                  <div class="text-xs text-gray-400">30,000 sats • Node.js • 5 days ago</div>
                </div>
              </div>
            </div>
          </div>
          <!-- Decorative effects -->
          <div class="absolute -bottom-6 -right-6 bg-yellow-400 h-20 w-20 rounded-full opacity-30 blur-xl"></div>
          <div class="absolute -top-6 -left-6 bg-blue-500 h-20 w-20 rounded-full opacity-30 blur-xl"></div>
        </div>
      </div>
    </div>
  </div>
</section>

<style>
  /* Grid pattern background */
  .bg-grid-pattern {
    background-image: 
      linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px),
      linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px);
    background-size: 20px 20px;
  }
</style>