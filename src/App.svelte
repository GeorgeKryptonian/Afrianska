<script>
    import { Router, Route } from 'svelte-routing';
    import Home from '@src/routes/home/Home.svelte';
    import Blog from '@src/routes/blog/Blog.svelte';
    import Contact from '@src/routes/contact/Contact.svelte';
</script>

<div class="wrapper font-gilroy tracking-wider">
    <Router>
        <Route path="/Afrianska/" component={Home} />
        <Route path="/Afrianska/blog/" component={Blog} />
        <Route path="/Afrianska/contact/" component={Contact} />
    </Router>
</div>