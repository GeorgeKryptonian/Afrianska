<script>
    import choosingContactOptions from '@images/vectors/choosingContactOptions.svg';
    import phone from '@images/icons/phone.svg';
    import globe from '@images/icons/globe.svg';
    import mail from '@images/icons/mail.svg';
</script>

<div class="w-full contactDetails space-y-16 lg:w-1/3">
    <img class="mx-auto" src={choosingContactOptions} alt="Choosing Contact Options">
    <div class="grid gap-10 sm:max-lg:grid-cols-2">
        <div class="col-span-full space-y-6">
            <h2 class="mb-8 text-xl font-semibold uppercase">Address</h2>
            <p class="opacity-60">Id convallis placerat sit sed duis id amet volutpat quam a, pharetra.</p>
        </div>
        <div class="break-all space-y-6">
            <h2 class="mb-8 text-xl font-semibold uppercase">Phone</h2>
            <div class="opacity-60 space-y-4">
                <a class="flex items-start gap-4" href="tel:+6281273134321">
                    <img src={phone} alt="Phone">
                    <span>+62-812-7313-4321</span>
                </a>
                <a class="flex items-start gap-4" href="tel:+628170001234">
                    <img src={phone} alt="Phone">
                    <span>+62-817-000-1234</span>
                </a>
            </div>
        </div>
        <div class="break-all space-y-6">
            <h2 class="mb-8 text-xl font-semibold uppercase">Online Service</h2>
            <div class="opacity-60 space-y-4">
                <a class="flex items-start gap-4" href="https://www.youtube.com/watch?v=avCWDDox1nE" target="_blank">
                    <img src={globe} alt="Globe">
                    <span>www.afrianska.com</span>
                </a>
                <a class="flex items-start gap-4" href="mailto:hello.afrian@gmail.com">
                    <img src={mail} alt="Mail">
                    <span>hello.afrian@gmail.com</span>
                </a>
            </div>
        </div>
    </div>
</div>