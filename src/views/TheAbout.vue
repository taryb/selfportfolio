<template>
    <div class="flex flex-col gap-8">
      <h1
        class="text-sm md:text-base leading-relaxed slg:text-lg lg:leading-loose"
      >
        Hello! My name is Tary. I enjoy learning new things and taking on challenges. 
        I have spent most of my life freelancing software and troubleshooting hardware. I've always wanted to 
        build and maintain my own website.
    </h1>
      <p
        class="text-sm md:text-base leading-relaxed slg:text-lg lg:leading-loose"
      >
        
      I graduated out of CSU Sacramento with a Bachelor degree in Computer Engineering (2017).
        I've spent most of my career working as a optics technician for a startup company since 2018.
        I spent most of my time here using Python 2.7 & Python 3 to write codes for product analytics.
        
      </p>
      Some of my skills include:
      <ul>
        <li>Python 2.7 and 3</li>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        
        </ul>


      <p
        class="text-sm md:text-base leading-relaxed slg:text-lg lg:leading-loose"
      >
        You can find my projects on my
        <LinkBtn link="https://github.com/taryb">Github</LinkBtn> or on my
        <LinkBtn link="/">Portfolio</LinkBtn> page. 
      </p>

      <hr class="bg-squgily bg-repeat border-0 h-[6px] opacity-25 my-6" />
      <div class="flex flex-col gap-5">
        <h3 class="font-theme_bold text-head_text text-3xl">Work</h3>
        <div class="flex flex-col gap-8 py-4">
          <a
            class="flex flex-col gap-1 sm:flex-row flex-nowrap justify-between items-start sm:gap-6"
            v-for="work in works"
            :key="work.id"
            :href="work.link"
          >
            <span class="font-theme_bold text-head_text">{{ work.name }}</span>
            <span class="flex-[1_1_auto]"></span>
            <span class="sm:text-right text-sm sm:text-base">{{
              work.position
            }}</span>
            <span class="text-sm sm:text-base"
              >{{ work.from }} - {{ work.to }}</span
            >
          </a>
        </div>
      </div>
    </div>
  </template>
  <script>
  import { useWorkStore } from "../store/workStore";
  
  export default {
    setup() {
      const workStore = useWorkStore();
      const works = workStore.getAllWorks;
  
      return { works };
    },
  };
  </script>