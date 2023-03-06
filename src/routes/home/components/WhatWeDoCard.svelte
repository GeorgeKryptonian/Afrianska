<script>
    import cornflowerBlueArrow from '@images/icons/lightBlueArrow.svg';

    export let
        heading = 'Default Heading',
        description = 'Default Description',
        sizeClasses = 'w-96 h-max',
        learnMoreLink = '#',
        imagePath = '',
        additionalClasses = '';
</script>

<div class="{additionalClasses} {sizeClasses} p-12 shadow-2xl shadow-[#1070B1]/20 rounded-xl space-y-14">
    <img class="mx-auto" src={imagePath} alt="Unavailable card image">
    <div class="space-y-8">
        <div class="text-midnight-blue space-y-4">
            <h3 class="text-xl font-semibold">{heading}</h3>
            <p class="opacity-60">{description}</p>
        </div>
        <a href={learnMoreLink} class="flex font-semibold group space-x-6 text-cornflower-blue active:space-x-4">
            <span>Learn more</span>
            <img class="duration-300 group-hover:-rotate-180" src={cornflowerBlueArrow} alt="Cornflower Blue Arrow">
        </a>
    </div>
</div>