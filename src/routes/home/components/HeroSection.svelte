<script>
    import Button from '@src/components/Button.svelte';
    import heroIllustration from '@images/vectors/heroIllustration.svg';
</script>

<section class="relative flex flex-col max-xl:space-y-16 max-xl:text-center py-14 px-6 md:px-24 xl:pb-52 xl:px-52 bg-gradient-to-t from-[#98C3E8]/20">
    <div class="space-y-16 xl:w-[51%]">
        <div class="text-midnight-blue space-y-8">
            <h1 class="max-sm:text-[54px] text-[64px] font-galien max-sm:leading-[64px] leading-[74px]">New Automation Tool for Your Home</h1>
            <p class="opacity-60">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus tristique vulputate ultrices ut mauris tellus at. Posuere sollicitudin odio tellus elit.</p>
        </div>
        <Button text="See Our Project" additionalClasses="shadow-xl shadow-cornflower-blue/20 text-white" />
    </div>
    <img class="top-0 right-6 max-sm:hidden xl:absolute" src={heroIllustration} alt="Hero Illustration">
</section>