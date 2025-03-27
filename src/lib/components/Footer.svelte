<script>
	const year = new Date().getFullYear();
</script>

<footer class="bg-gray-900 text-white py-16">
  <div class="container mx-auto px-6">
    <div class="grid grid-cols-1 md:grid-cols-4 gap-10">
      <!-- Column 1: Logo & About -->
      <div class="md:col-span-1">
        <div class="flex items-center mb-4">
          <span class="text-yellow-400 text-2xl mr-2">⚡</span>
          <span class="font-bold text-xl">SatQuest</span>
        </div>
        <p class="text-gray-400 mb-6 text-sm">
          The open source contribution marketplace powered by Bitcoin Lightning Network.
        </p>
        <div class="flex space-x-4">
          <a href="https://twitter.com" class="text-gray-400 hover:text-white transition" aria-label="Follow us on Twitter">
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
            </svg>
          </a>
          <a href="https://github.com" class="text-gray-400 hover:text-white transition" aria-label="Visit our GitHub">
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd" />
            </svg>
          </a>
          <a href="https://discord.com" class="text-gray-400 hover:text-white transition" aria-label="Join our Discord">
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fill-rule="evenodd" d="M18.393 5.99l.004.008c1.572.415 2.372 1.142 2.372 1.142s-1.246-2.032-4.247-2.14h-.379c-2.589 0-4.996 1.049-4.996 1.049s.787-.726 2.35-1.142l-.004-.004s-1.321-.267-2.788-.267c-1.468 0-2.919.271-2.919.271C6.213 7.64 6 10.119 6 10.119c0 3.76 1.725 6.858 1.725 6.858C9.348 18.0 11.433 18 11.433 18l.471-.642c-1.422-.404-2.125-1.251-2.125-1.251C11.645 17.2 14.35 17.2 17 16.107c0 0-.713.855-2.155 1.251l.472.642s2.085 0 3.708-1.024c0 0 1.725-3.098 1.725-6.857 0 0-.213-2.479-2.892-5.093 0 0-1.45-.271-2.918-.271-1.467 0-2.788.267-2.788.267zM10.01 13.945c.736 0 1.333-.643 1.333-1.429s-.597-1.428-1.333-1.428-1.332.642-1.332 1.428.596 1.429 1.332 1.429zm3.98 0c.736 0 1.332-.643 1.332-1.429s-.596-1.428-1.332-1.428-1.333.642-1.333 1.428.597 1.429 1.333 1.429z" clip-rule="evenodd" />
            </svg>
          </a>
        </div>
      </div>

      <!-- Column 2: Quick Links -->
      <div>
        <h3 class="font-semibold text-lg mb-4">Quick Links</h3>
        <ul class="space-y-2 text-sm">
          <li><a href="/explore" class="text-gray-400 hover:text-white transition">Browse Issues</a></li>
          <li><a href="/projects" class="text-gray-400 hover:text-white transition">Explore Projects</a></li>
          <li><a href="/how-it-works" class="text-gray-400 hover:text-white transition">How It Works</a></li>
          <li><a href="/blog" class="text-gray-400 hover:text-white transition">Blog</a></li>
          <li><a href="/faq" class="text-gray-400 hover:text-white transition">FAQs</a></li>
        </ul>
      </div>

      <!-- Column 3: For Developers -->
      <div>
        <h3 class="font-semibold text-lg mb-4">For Developers</h3>
        <ul class="space-y-2 text-sm">
          <li><a href="/signup" class="text-gray-400 hover:text-white transition">Join as Developer</a></li>
          <li><a href="/wallet" class="text-gray-400 hover:text-white transition">Connect Wallet</a></li>
          <li><a href="/leaderboard" class="text-gray-400 hover:text-white transition">Developer Leaderboard</a></li>
          <li><a href="/success-stories" class="text-gray-400 hover:text-white transition">Success Stories</a></li>
        </ul>
      </div>

      <!-- Column 4: For Projects -->
      <div>
        <h3 class="font-semibold text-lg mb-4">For Projects</h3>
        <ul class="space-y-2 text-sm">
          <li><a href="/projects/add" class="text-gray-400 hover:text-white transition">List Your Project</a></li>
          <li><a href="/pricing" class="text-gray-400 hover:text-white transition">Pricing</a></li>
          <li><a href="/case-studies" class="text-gray-400 hover:text-white transition">Case Studies</a></li>
          <li><a href="/contact" class="text-gray-400 hover:text-white transition">Contact Us</a></li>
        </ul>
      </div>
    </div>

    <!-- Bottom Section -->
    <div class="pt-8 mt-8 border-t border-gray-800 text-sm text-gray-400 flex flex-col md:flex-row justify-between">
      <div> {year} SatQuest. Built with by open source lovers.</div>
      <div class="mt-4 md:mt-0 space-x-4">
        <a href="/terms" class="hover:text-white transition">Terms of Service</a>
        <a href="/privacy" class="hover:text-white transition">Privacy Policy</a>
        <a href="/legal" class="hover:text-white transition">Legal</a>
      </div>
    </div>
  </div>
</footer>
