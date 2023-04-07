<svelte:head>
    <title>Afrianska • Contact Us</title>
</svelte:head>

<script>
    import Header from '@src/components/Header.svelte';
    import SubheaderSection from '@src/components/SubheaderSection.svelte';
    import ContactSection from "@src/routes/contact/components/ContactSection.svelte";
    import MapSection from '@src/routes/contact/components/MapSection.svelte';
    import Footer from '@src/components/Footer.svelte';
</script>

<Header />
<main>
    <SubheaderSection heading="Contact Us" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." additionalSectionClasses="mb-14" />
    <ContactSection additionalSectionClasses="mb-24" />
    <MapSection additionalSectionClasses="mb-24" />
</main>
<Footer />