<script>
    import FeaturedProjects from "../components/FeaturedProjects.vue";
    import Home from "../components/Home.vue";
    import TheSocials from "../components/TheSocials.vue";
    export default {
      setup() {},
      components: { Home, TheSocials, FeaturedProjects },
    };
    </script>
    
    <template>
      <div class="flex flex-col gap-16 mb-16">
        <Home /> 
        <TheSocials />
        <hr class="bg-squgily bg-repeat border-0 h-[6px] opacity-25" />
      </div>
    </template>