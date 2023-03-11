<script>
    export let
        heading = 'Default Heading',
        description = 'Default Description',
        sizeClasses = 'w-full h-full',
        learnMoreLink = '#',
        imagePath = '',
        backgroundImagePath = '',
        additionalCardClasses = '',
        additionalPaddingClasses = 'px-8 py-6',
        additionalGradientClasses = 'bg-gradient-to-br from-[#1565C0]/60 to-[#42A5F5]/40',
        additionalImageClasses = '';
</script>

<div class="{additionalCardClasses} {sizeClasses} max-sm:text-center relative bg-cover bg-center bg-no-repeat rounded-xl group transition-all duration-300 hover:translate-y-1 hover:translate-x-1" style="background-image: url({backgroundImagePath})">
    <div class="{additionalPaddingClasses} {additionalGradientClasses} w-full h-full rounded-xl">
        {#if imagePath}
            <img class="{additionalImageClasses}" src={imagePath} alt="Unavailable card image">
        {/if}
        <div class="text-white duration-300 text-midnight-blue space-y-4 group-hover:translate-y-1">
            <h3 class="font-medium text-[28px]">{heading}</h3>
            <p class="opacity-80">{description}</p>
        </div>
    </div>
</div>