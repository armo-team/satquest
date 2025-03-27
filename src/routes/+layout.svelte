<script>
    import Footer from '$lib/components/Footer.svelte';
	import '../app.css';
	import HeroSection from '$lib/components/HeroSection.svelte';
	import FeaturesSection from '$lib/components/FeaturesSection.svelte';
	import HowItWorks from '$lib/components/HowItWorks.svelte';
	import CallToAction from '$lib/components/CallToAction.svelte';
</script>

<main class="font-sans bg-white text-gray-900">
	<HeroSection />
	<FeaturesSection />
	<HowItWorks />
	<CallToAction />
	<slot />
</main>

<Footer />
