<svelte:head>
    <title>Afrianska • Home</title>
</svelte:head>

<script>

import Header from '@src/components/Header.svelte';
import HeroSection from '@src/routes/home/components/HeroSection.svelte';
import WhatWeDoSection from '@src/routes/home/components/WhatWeDoSection.svelte';
import OurProjectSection from '@src/routes/home/components/OurProjectSection.svelte';
import OurClientSection from '@src/routes/home/components/OurClientSection.svelte';
import Footer from '@src/components/Footer.svelte';
</script>

<Header />
<main>
    <HeroSection additionalSectionClasses="mb-44" />
    <WhatWeDoSection additionalSectionClasses="mb-40" />
    <OurProjectSection additionalSectionClasses="mb-48" />
    <OurClientSection />
</main>
<Footer footerAdditionalClasses="bg-cornflower-blue" />