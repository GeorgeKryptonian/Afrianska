<script>
    import { Router, Route } from "svelte-routing";
    import Home from "./routes/home/Home.svelte";
    import Blog from "./routes/blog/Blog.svelte";
    import Contact from "./routes/contact/Contact.svelte";
</script>

<div class="wrapper">
    <Router>
        <Route path="/Afrianska/" component={Home} />
        <Route path="/Afrianska/blog/" component={Blog} />
        <Route path="/Afrianska/contact/" component={Contact} />
    </Router>
</div>