<template>
    <div class="flex justify-between items-center">
      <div class="flex gap-1">
        <SocialIcon
          title="Github"
          link="https://github.com/taryb"
          icon="ant-design:github-filled"
        />
        <SocialIcon
          title="Twitter"
          link="https://twitter.com/"
          icon="ant-design:twitter-outlined"
        />
        <SocialIcon
          title="Instagram"
          link="https://www.instagram.com/"
          icon="ant-design:instagram-outlined"
        />
      </div>
      <ActionButton link="mailto:tarybounavong@gmail.com">Email Me</ActionButton>
    </div>
  </template>
  
  <script>
  import ActionButton from "./ui/ActionButton.vue";
  import SocialIcon from "./ui/SocialIcon.vue";

  
  export default {
    components: { SocialIcon, ActionButton },
  };
  </script>