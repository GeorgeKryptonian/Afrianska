<script>
    import footerLogo from '@images/icons/footerLogo.svg';

    export let footerAdditionalClasses = '';
    let footerLists = {
        'About Us': [
            {text: 'About', link: '#'},
            {text: 'What We Do', link: '#'},
            {text: 'Project', link: '#'},
            {text: 'How It Work With Us', link: '#'},
        ],
        'Follow Us': [
            {text: 'Instagram', link: '#'},
            {text: 'Facebook',  link: '#'},
            {text: 'LinkedIn', link: '#'},
            {text: 'YouTube', link: '#'},
        ],
    }
</script>

<footer class="{footerAdditionalClasses} md:pr-12 xl:pr-24 text-white">
    <div class="max-md:p-6 bg-royal-blue md:rounded-tr-[50px] md:pt-12 md:pr-32 md:pb-8 lg:rounded-tr-[100px] xl:rounded-tr-[200px] xl:pt-24 xl:pr-48 xl:pb-16">
        <div class="flex max-lg:flex-col items-center max-md:text-center max-lg:space-y-8 md:max-lg:items-start md:pl-28 lg:justify-between xl:pl-56">
            <div class="space-y-8 lg:w-3/5">
                <h2 class="text-4xl font-semibold">Interested to work with our team?</h2>
                <p class="opacity-60">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
            </div>
            <button class="h-14 w-56 rounded-xl bg-cornflower-blue">Let’s Talk</button>
        </div>
        <hr class="my-24 opacity-40">
        <div class="space-y-16 md:pl-[107px] xl:pl-[214px]">
            <div class="flex max-lg:flex-col max-lg:space-y-20 lg:space-x-16 xl:space-x-36">
                <address class="not-italic space-y-8 lg:w-1/3">
                    <div class="flex items-center font-semibold space-x-4 text-[28px]">
                        <img src={footerLogo} alt="Footer Logo">
                        <span>Afrianska</span>
                    </div>
                    <div class="space-y-6">
                        <p class="flex"><span class="mr-4 font-semibold">A.</span>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                        <p class="flex"><span class="mr-4 font-semibold">T.</span>+62-812-7313-4321</p>
                        <p class="flex"><span class="mr-4 font-semibold">E.</span>hello.afrian@gmail.com</p>
                    </div>
                </address>
                <div class="flex max-sm:flex-col max-sm:space-y-20 sm:max-lg:space-x-[25%] lg:space-x-20">
                    {#each Object.keys(footerLists) as listKey}
                        <dl class="space-y-8">
                            <dt class="text-xl font-semibold">{listKey}</dt>
                            <div class="space-y-4">
                                {#each footerLists[listKey] as listItem}
                                    <dd><a class="hover:opacity-75" href={listItem.link}>{listItem.text}</a></dd>
                                {/each}
                            </div>
                        </dl>
                    {/each}
                </div>
            </div>
            <p class="opacity-40">2019 © Afrianska. All rights reserved.</p>
        </div>
    </div>
</footer>