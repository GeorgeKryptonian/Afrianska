<script>
    import Article from '@src/routes/blog/components/Article.svelte';
    import villa from '@images/photos/villa.jpg';
    import penAndNotebooks from '@images/photos/penAndNotebooks.jpg';
    import mexicanHouse from '@images/photos/mexicanHouse.jpg';
    import macsUser from '@images/photos/macsUser.jpg';

    let popularArticles = [
        {
            imagePath: villa,
            heading: 'Feugiat sodales at nullam tellus.',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mi posuere nibh tempor fringilla porta pellentesque ipsum.',
            author: 'Samatha Leuthex',
            date: 'May 5',
            readingTime: '3 min read',
            id: 1,
        },
        {
            imagePath: penAndNotebooks,
            heading: 'Porta proin tellus sed pulvinar odio eu pulvinar.',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
            author: 'Samatha Leuthex',
            date: 'May 5',
            readingTime: '3 min read',
            id: 2,
        },
        {
            imagePath: mexicanHouse,
            heading: 'Non quam tortor, proin eu egestas scelerisque purus.',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
            author: 'Samatha Leuthex',
            date: 'May 5',
            readingTime: '3 min read',
            id: 3,
        },
        {
            imagePath: macsUser,
            heading: 'Amet amet sed pharetra risus sit eget interdum.',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
            author: 'Samatha Leuthex',
            date: 'May 5',
            readingTime: '3 min read',
            id: 4,
        },
    ];
    export let additionalSectionClasses = '';
</script>

<section class="{additionalSectionClasses} px-6 md:px-24 xl:px-52">
    <div class="border-b border-b-black/20 pb-6">
        <h2 class="mb-8 text-xl font-semibold uppercase text-water-blue/80">Popular</h2>
        <div class="mb-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {#each popularArticles.slice(0, 4) as article (article.id)}
                <Article articleData={article} additionalHeadingClasses={(article.id === 1) ? 'text-[28px] sm:text-5xl' : 'text-[28px]'} additionalArticleClasses={(article.id === 1) ? 'flex-col col-span-full lg:flex-row-reverse sm:mb-3' : (article.id === 4) ? 'flex-col max-lg:hidden' : 'flex-col'} />
            {/each}
        </div>
        <a class="text-right font-semibold uppercase text-water-blue/80 hover:opacity-75" href="#">
            <p>See All Popular Article</p>
        </a>
    </div>
</section>