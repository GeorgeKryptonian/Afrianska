<script>
    import loupe from '@images/icons/loupe.svg';

    export let
        sizeClasses = 'w-full h-14',
        additionalSectionClasses = '';
</script>

<section class="{additionalSectionClasses} px-6 md:px-24 xl:px-52">
    <form on:submit|preventDefault>
        <input class="{sizeClasses} bg-[#F4F4F4] px-[72px] bg-no-repeat bg-[left_24px_center] rounded-xl font-light placeholder-midnight-blue/60 tracking-wider" type="search" placeholder="Search Article" style="background-image: url({loupe})">
    </form>
</section>