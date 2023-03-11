<script>
    import WhatWeDoCard from '@src/routes/home/components/WhatWeDoCard.svelte';
    import techAtHome from '@images/vectors/techAtHome.svg';
    import betterOnlineBusiness from '@images/vectors/betterOnlineBusiness.svg';
    import tailoredDigitalProduct from '@images/vectors/tailoredDigitalProduct.svg';

    export let additionalSectionClasses = '';
</script>

<section class="{additionalSectionClasses} px-6 md:px-24 xl:px-52">
    <div class="grid gap-y-24">
        <h2 class="max-lg:text-center text-4xl font-semibold text-royal-blue leading-[46px] lg:max-xl:w-96 lg:absolute xl:w-[26%]">What we do to help our client grow in digital era</h2>
        <div class="grid w-full grid-cols-1 justify-center gap-16 justify-self-center lg:w-max lg:grid-cols-2 lg:grid-rows-2 lg:justify-self-end xl:gap-24">
            <WhatWeDoCard imagePath={techAtHome} heading="Bring Technology To Your Comfrotable Home" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." additionalCardClasses="max-lg:w-full" />
            <WhatWeDoCard imagePath={betterOnlineBusiness} heading="Make Your business To Be Better Famous In Internet" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." additionalCardClasses="lg:row-span-full self-center max-lg:w-full" />
            <WhatWeDoCard imagePath={tailoredDigitalProduct} heading="Build Your Digital Product That Suitable For Your Need" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." additionalCardClasses="max-lg:w-full" />
        </div>
    </div>
</section>