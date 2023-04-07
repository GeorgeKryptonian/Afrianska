<script>
    import ContactDetails from '@src/routes/contact/components/ContactDetails.svelte';
    import ContactForm from '@src/routes/contact/components/ContactForm.svelte';

    export let additionalSectionClasses = '';
</script>

<section class="{additionalSectionClasses} flex gap-y-16 justify-between max-lg:flex-col items-center px-6 md:px-24 xl:px-52 text-midnight-blue">
    <ContactDetails />
    <ContactForm />
</section>