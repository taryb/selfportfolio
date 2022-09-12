<script>
    import FeaturedProjects from "../components/FeaturedProjects.vue";
    import Myself from "../components/Myself.vue";
    import TheSocials from "../components/TheSocials.vue";
    export default {
      setup() {},
      components: { Myself, TheSocials, FeaturedProjects },
    };
    </script>
    
    <template>
      <div class="flex flex-col gap-16 mb-16">
        <Myself />
        <TheSocials />
        <hr class="bg-squgily bg-repeat border-0 h-[6px] opacity-25" />
        <FeaturedProjects />
      </div>
    </template>