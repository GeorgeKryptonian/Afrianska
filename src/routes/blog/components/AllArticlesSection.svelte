<script>
    import Article from '@src/routes/blog/components/Article.svelte';
    import waterBlueArrow from '@images/icons/waterBlueArrow.svg';
    import carSteeringWheel from '@images/photos/carSteeringWheel.jpg';
    import colorfulRectangles from '@images/photos/colorfulRectangles.jpg';
    import palmWithCone from '@images/photos/palmWithCone.jpg';
    import camera from '@images/photos/camera.jpg';
    import macOnDesk from '@images/photos/macOnDesk.jpg';

    const toSeparate = (array, size) => {
        return array.map((item, index) => {
            if ((index % size) === 0) {
                return array.slice(index, index + size);
            }
        }).filter((item) => Array.isArray(item));
    };

    let
        allArticles = [
            {
                imagePath: carSteeringWheel,
                heading: 'Massa eu in laoreet enim augue vulputate nunc.',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lectus quisque magna in nisl nibh bibendum ipsum, elit duis. Donec.',
                author: 'Samatha Leuthex',
                date: 'May 5',
                readingTime: '3 min read',
                id: 1,
            },
            {
                imagePath: colorfulRectangles,
                heading: 'Feugiat a euismod arcu feugiat posuere morbi.',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lectus quisque magna in nisl nibh bibendum ipsum, elit duis. Donec.',
                author: 'Samatha Leuthex',
                date: 'May 5',
                readingTime: '3 min read',
                id: 2,
            },
            {
                imagePath: palmWithCone,
                heading: 'Sociis purus pellentesque faucibus vitae et felis.',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lectus quisque magna in nisl nibh bibendum ipsum, elit duis. Donec.',
                author: 'Samatha Leuthex',
                date: 'May 5',
                readingTime: '3 min read',
                id: 3,
            },
            {
                imagePath: camera,
                heading: 'Cursus feugiat mi pellentesque mauris sed eu.',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lectus quisque magna in nisl nibh bibendum ipsum, elit duis. Donec.',
                author: 'Samatha Leuthex',
                date: 'May 5',
                readingTime: '3 min read',
                id: 4,
            },
            {
                imagePath: macOnDesk,
                heading: 'A morbi arcu curabitur etiam fringilla augue.',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lectus quisque magna in nisl nibh bibendum ipsum, elit duis. Donec.',
                author: 'Samatha Leuthex',
                date: 'May 5',
                readingTime: '3 min read',
                id: 5,
            },

            //? For illustration
            {
                imagePath: 'https://loremflickr.com/300/200',
                heading: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lectus quisque magna in nisl nibh bibendum ipsum, elit duis. Donec.',
                author: 'Clark Kent',
                date: 'May 6',
                readingTime: '4 min read',
                id: 6,
            },
            {
                imagePath: 'https://picsum.photos/300/200',
                heading: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lectus quisque magna in nisl nibh bibendum ipsum, elit duis. Donec.',
                author: 'Clark Kent',
                date: 'May 6',
                readingTime: '4 min read',
                id: 7,
            },
            {
                imagePath: 'https://loremflickr.com/300/200',
                heading: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lectus quisque magna in nisl nibh bibendum ipsum, elit duis. Donec.',
                author: 'Clark Kent',
                date: 'May 6',
                readingTime: '4 min read',
                id: 8,
            },
            {
                imagePath: 'https://picsum.photos/300/200',
                heading: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lectus quisque magna in nisl nibh bibendum ipsum, elit duis. Donec.',
                author: 'Clark Kent',
                date: 'May 6',
                readingTime: '4 min read',
                id: 9,
            },
            {
                imagePath: 'https://loremflickr.com/300/200',
                heading: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lectus quisque magna in nisl nibh bibendum ipsum, elit duis. Donec.',
                author: 'Clark Kent',
                date: 'May 6',
                readingTime: '4 min read',
                id: 10,
            },
            {
                imagePath: 'https://via.placeholder.com/300x200',
                heading: 'Suspendisse aliquet, lacus a tempor feugiat, nunc.',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lectus quisque magna in nisl nibh bibendum ipsum, elit duis. Donec.',
                author: 'Lois Lane',
                date: 'May 7',
                readingTime: '5 min read',
                id: 11,
            },
            {
                imagePath: 'https://placebeard.it/300x200',
                heading: 'Suspendisse aliquet, lacus a tempor feugiat, nunc.',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lectus quisque magna in nisl nibh bibendum ipsum, elit duis. Donec.',
                author: 'Lois Lane',
                date: 'May 7',
                readingTime: '5 min read',
                id: 12,
            },
            {
                imagePath: 'https://via.placeholder.com/300x200',
                heading: ' Suspendisse aliquet, lacus a tempor feugiat, nunc.',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lectus quisque magna in nisl nibh bibendum ipsum, elit duis. Donec.',
                author: 'Lois Lane',
                date: 'May 7',
                readingTime: '5 min read',
                id: 13,
            },
            {
                imagePath: 'https://placebeard.it/300x200',
                heading: 'Suspendisse aliquet, lacus a tempor feugiat, nunc.',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lectus quisque magna in nisl nibh bibendum ipsum, elit duis. Donec.',
                author: 'Lois Lane',
                date: 'May 7',
                readingTime: '5 min read',
                id: 14,
            },
            {
                imagePath: 'https://via.placeholder.com/300x200',
                heading: 'Suspendisse aliquet, lacus a tempor feugiat, nunc.',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lectus quisque magna in nisl nibh bibendum ipsum, elit duis. Donec.',
                author: 'Lois Lane',
                date: 'May 7',
                readingTime: '5 min read',
                id: 15,
            },
        ],
        indexOfTheRenderedArray = 0;
    $: allSeparatedArticles = toSeparate(allArticles, 5);

    export let additionalSectionClasses = '';
</script>

<section class="{additionalSectionClasses} px-6 md:px-24 xl:px-52">
    <h2 class="mb-8 text-xl font-semibold uppercase text-water-blue/80">All Article</h2>
    <div class="mb-14 grid grid-cols-1 gap-8">
        {#each allSeparatedArticles[indexOfTheRenderedArray] as article (article.id)}
            <Article articleData={article} additionalArticleClasses="max-md:flex-col" />
        {/each}
    </div>
    <div class="grid grid-cols-2 opacity-80 text-water-blue">
        <div class="justify-self-start">
            {#if !(indexOfTheRenderedArray === 0)}
                <button on:click={() => ((indexOfTheRenderedArray - 1) >= 0) ? indexOfTheRenderedArray-- : ''} class="flex gap-x-4 font-semibold tracking-wider transition-all duration-300 active:gap-x-3">
                    <img class="rotate-180" src={waterBlueArrow} alt="Water Blue Arrow">
                    <span>New Post</span>
                </button>
            {/if}
        </div>
        <div class="justify-self-end">
            {#if !(indexOfTheRenderedArray === allSeparatedArticles.length - 1)}
                <button on:click={() => ((indexOfTheRenderedArray + 1) < allSeparatedArticles.length) ? indexOfTheRenderedArray++ : ''} class="flex gap-x-4 font-semibold tracking-wider transition-all duration-300 active:gap-x-3">
                    <span>Old Post</span>
                    <img src={waterBlueArrow} alt="Water Blue Arrow">
                </button>
            {/if}
        </div>
    </div>
</section>