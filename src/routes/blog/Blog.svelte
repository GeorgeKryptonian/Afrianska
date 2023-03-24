<svelte:head>
    <title>Afrianska • Blog</title>
</svelte:head>

<script>
    import Header from '@src/components/Header.svelte';
    import SubheaderSection from '@src/components/SubheaderSection.svelte';
    import SearchArticleSection from '@src/routes/blog/components/SearchArticleSection.svelte';
    import PopularArticlesSection from '@src/routes/blog/components/PopularArticlesSection.svelte';
    import AllArticlesSection from '@src/routes/blog/components/AllArticlesSection.svelte';
    import Footer from '@src/components/Footer.svelte';
</script>

<Header />
<main>
    <SubheaderSection heading="Blog Afrianska" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." additionalSectionClasses="mb-14" />
    <SearchArticleSection additionalSectionClasses="mb-14" />
    <PopularArticlesSection additionalSectionClasses="mb-14" />
    <AllArticlesSection additionalSectionClasses="mb-24" />
</main>
<Footer />