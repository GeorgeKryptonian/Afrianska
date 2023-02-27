<script>
    import { Link } from 'svelte-routing';
    import headerLogo from '@images/icons/headerLogo.svg';
    import burger from '@images/icons/burger.svg';

    let isHidden = true;
</script>

<header class="flex items-center justify-between p-5 sm:px-10 xl:px-20 xl:py-10">
    <img src={headerLogo} alt="Header Logo">
    <nav class="relative">
        <div class:hidden={isHidden} class="absolute top-10 right-0 flex w-max flex-col rounded-md p-4 text-center text-white shadow-lg bg-water-blue space-y-4">
            <Link class="hover:opacity-75" to="/Afrianska/">Home</Link>
            <Link class="hover:opacity-75" to="/Afrianska/blog/">Blog</Link>
            <Link class="hover:opacity-75" to="/Afrianska/contact/">Contact Us</Link>
        </div>
        <img on:click={() => isHidden = !isHidden} class="cursor-pointer" src={burger} alt="Burger Icon">
    </nav>
</header>