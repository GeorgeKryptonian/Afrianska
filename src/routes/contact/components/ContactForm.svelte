<script>
    import Button from '@src/components/Button.svelte';
</script>

<div class="rounded-xl p-7 sm:p-14 space-y-12 lg:max-w-md xl:max-w-lg w-full shadow-2xl shadow-[#1070B1]/20">
    <h2 class="text-xl font-semibold uppercase">Send Us Message</h2>
    <form class="space-y-16" on:submit|preventDefault method="post" action="#">
        <div class="space-y-8">
            <div class="flex flex-col gap-2">
                <label class="opacity-80" for="fullName">Full Name</label>
                <input class="rounded-xl border px-10 py-5 font-light border-water-blue/40 placeholder-midnight-blue/20" id="fullName" type="text" placeholder="Your Name" required>
            </div>
            <div class="flex flex-col gap-2">
                <label class="opacity-80" for="email">Email</label>
                <input class="rounded-xl border px-10 py-5 font-light border-water-blue/40 placeholder-midnight-blue/20" id="email" type="email" placeholder="Your Email" required>
            </div>
            <div class="flex flex-col gap-2">
                <label class="opacity-80" for="message">Message</label>
                <textarea class="rounded-xl border px-10 py-5 font-light border-water-blue/40 placeholder-midnight-blue/20" id="message" rows="4" placeholder="Your Message" required></textarea>
            </div>
        </div>
        <Button text="SUBMIT" sizeClasses="h-[72px] w-full" additionalButtonClasses="shadow-xl shadow-[#1070B1]/20 text-white font-semibold" />
    </form>
</div>