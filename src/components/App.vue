<template>
    <navbar
        :pages="pages"
        :activePages="activePage"
        :nav-link-click="navLinkClick"
    >
    </navbar>

    <page-viewer
        :page="pages[activePage]"
    ></page-viewer>
</template>

<script>
import PageViewer from './PageViewer.vue'
import Navbar from './Navbar.vue'

export default {
    components: {
        PageViewer,
        Navbar
    },
    data() {
        return {
            activePage: 0,
            pages: [
                {
                    link: {text: 'Home', url: 'index.html'},
                    pageTitle:'Home Page',
                    content:'This is the home content'
                },
                {
                    link: {text: 'About', url: 'about.html'},
                    pageTitle:'About Page',
                    content:'This is the about content'
                },
                {
                    link: {text: 'Contact', url: 'contact.html'},
                    pageTitle:'Contact Page',
                    content:'This is the contact content'
                }
            ]
        };
    },
    methods : {
        navLinkClick(index) {
            // The below CtoP function definition was previously bound to the child attribute ...
            // ... however you can pull it out and define it down here in the methods option ...
            // ... which is advisable because method definitions can be lengthy and then the ...
            // ... definition is still bound to the attribute, just by the method name here now.
            //:nav-link-click="(index) => activePage = index"

            this.activePage = index
        }
    }
}
</script>

<!-- Adding the 'scoped' attribute limits the scope of the defined styles to this component -->
<style scoped>

</style>