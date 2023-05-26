<script>
    import { fly } from 'svelte/transition';
    import { Link } from 'svelte-routing';
    import headerLogo from '@images/icons/headerLogo.svg';
    import burger from '@images/icons/burger.svg';

    let isVisible = false;
    export let additionalHeaderClasses = '';
</script>

<header class="{additionalHeaderClasses} relative z-50 flex items-center justify-between p-5 sm:px-10 xl:px-20 xl:py-10">
    <img src={headerLogo} alt="Header Logo">
    <nav class="relative">
        {#if isVisible}
            <div transition:fly={{x: 16, duration: 300}} class="absolute top-10 right-0 flex w-max flex-col rounded-md p-4 text-center text-white shadow-lg bg-water-blue gap-y-4">
                <Link class="hover:opacity-75" to="/Afrianska/">Home</Link>
                <Link class="hover:opacity-75" to="/Afrianska/blog/">Blog</Link>
                <Link class="hover:opacity-75" to="/Afrianska/contact/">Contact Us</Link>
            </div>
        {/if}
        <img on:click={() => isVisible = !isVisible} class="cursor-pointer" src={burger} alt="Burger Icon">
    </nav>
</header>