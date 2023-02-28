<script>
    import subheaderBackground from '@images/vectors/subheaderBackground.svg';

    export let
        heading = 'Default Heading',
        description = 'Default Description';
</script>

<section class="bg-cover bg-center bg-no-repeat p-6 text-center text-white space-y-4 md:px-20 lg:px-40 xl:px-80 xl:py-12" style="background-image: url({subheaderBackground})">
    <h1 class="font-semibold text-[44px]">{heading}</h1>
    <p class="text-xl opacity-40">{description}</p>
</section>