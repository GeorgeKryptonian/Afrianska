<script>
    let clientList = [
        {imagePath: '', link: '#', alt: 'Client Logo 1'},
        {imagePath: '', link: '#', alt: 'Client Logo 2'},
        {imagePath: '', link: '#', alt: 'Client Logo 3'},
        {imagePath: '', link: '#', alt: 'Client Logo 4'},
        {imagePath: '', link: '#', alt: 'Client Logo 5'},
        {imagePath: '', link: '#', alt: 'Client Logo 6'},
        {imagePath: '', link: '#', alt: 'Client Logo 7'},
    ]
</script>

<section class="p-6 text-white bg-cornflower-blue space-y-28 md:rounded-tl-[50px] md:px-24 md:pt-12 md:pb-16 lg:rounded-tl-[100px] xl:rounded-tl-[200px] xl:px-52 xl:pt-24 xl:pb-32">
    <div class="flex max-lg:flex-col max-lg:text-center max-lg:space-y-8 lg:space-x-24">
        <h2 class="text-4xl font-semibold leading-[46px] lg:w-2/3 xl:w-1/2">Our Beloved Client</h2>
        <p class="opacity-60">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
    </div>
    <div class="grid grid-cols-1 gap-px bg-white/40 text-center text-xl font-semibold sm:grid-cols-2 lg:grid-cols-4">
        {#each clientList as client}
            <a class="flex h-32 w-full items-center justify-center bg-contain bg-center bg-no-repeat bg-cornflower-blue" target="_blank" href={client.link} style="background-image: url({client.imagePath})">
                {#if !client.imagePath}
                    {client.alt}
                {/if}
            </a>
        {/each}
        <a class="flex justify-center items-center h-32 bg-[#3888c0]" href="#">More Client</a>
    </div>
</section>