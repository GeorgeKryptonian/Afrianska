<script>
    import bookmarks from '@images/icons/bookmarks.svg';
    import share from '@images/icons/share.svg';

    export let
        articleData = {
            imagePath: '',
            heading: 'Default Heading',
            description: 'Default Description',
            author: 'Default Author',
            date: 'Default Date',
            readingTime: 'Default Reading Time',
            id: 0,
        },
        sizeClasses = 'w-full',
        additionalHeadingClasses = 'text-[28px]',
        additionalArticleClasses = '';
</script>

<article class="{additionalArticleClasses} {sizeClasses} flex gap-5 text-midnight-blue">
    <img src={articleData.imagePath} alt="Unavailable image">
    <div class="space-y-4">
        <h3 class="{additionalHeadingClasses} font-galien">{articleData.heading}</h3>
        <p class="text-black/60">{articleData.description}</p>
        <div class="flex items-center justify-between max-w-[300px]">
            <div class="space-y-1">
                <span>{articleData.author}</span>
                <div class="opacity-40">
                    <span>{articleData.date},</span>
                    <span>{articleData.readingTime}</span>
                </div>
            </div>
            <div class="flex gap-x-8">
                <a href="#">
                    <img class="cursor-pointer hover:opacity-75" src={bookmarks} alt="Bookmarks Icon">
                </a>
                <a href="#">
                    <img class="cursor-pointer hover:opacity-75" src={share} alt="Share Icon">
                </a>
            </div>
        </div>
    </div>
</article>