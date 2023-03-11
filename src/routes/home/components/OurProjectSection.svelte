<script>
    import OurProjectCard from '@src/routes/home/components/OurProjectCard.svelte';
    import smartHomeInstallation from '@images/photos/smartHomeInstallation.jpg';
    import sparkliteApp from '@images/photos/sparkliteApp.jpg';
    import carRapetitionApp from '@images/photos/carRapetitionApp.jpg';
    import circleBurst from '@images/vectors/circleBurst.svg';

    export let additionalSectionClasses = '';
</script>

<section class="{additionalSectionClasses} px-6 md:px-24 xl:px-52">
    <div class="grid gap-y-24">
        <div class="flex max-lg:flex-col max-lg:text-center max-lg:gap-y-8 text-midnight-blue lg:gap-x-24">
            <h2 class="text-4xl font-semibold leading-[46px] lg:w-2/3 xl:w-1/2">Our Finished Project</h2>
            <p class="opacity-60">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
        </div>
        <div class="grid sm:grid-rows-[repeat(3,_217px)] md:grid-rows-[repeat(3,_317px)] lg:grid-cols-2 lg:grid-rows-[repeat(2,_417px)] gap-16 xl:gap-24">
            <OurProjectCard heading="Smart Home Installation" description="In Muarakana Housing Estate" backgroundImagePath={smartHomeInstallation} imagePath={circleBurst} additionalCardClasses="col-span-full md:text-right" additionalImageClasses="absolute left-0 bottom-0 hidden lg:block" additionalPaddingClasses="lg:p-12 px-8 py-6" additionalGradientClasses="bg-gradient-to-r from-midnight-blue to-midnight-blue/40" />
            <OurProjectCard heading="Sparklite App" description="Marketplace" backgroundImagePath={sparkliteApp} />
            <OurProjectCard heading="Car-Rapetition App" description="Board" backgroundImagePath={carRapetitionApp} />
        </div>
    </div>
</section>