<script setup lang="ts">
import WelcomeItem from './WelcomeItem.vue'
import IconFacebook from "@/components/icons/IconFacebook.vue";
import IconLinkedin from "@/components/icons/IconLinkedin.vue";
import IconInstagram from "@/components/icons/IconInstagram.vue";
</script>

<template>
  <WelcomeItem>
    <template #icon>
      <IconFacebook/>
    </template>
    <template #heading><a href="https://www.facebook.com/bysalkarki">Facebook</a> </template>

  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <IconLinkedin/>
    </template>
    <template #heading><a href="https://www.linkedin.com/in/bysal-karkey-817a8a187/">Linkedin</a> </template>
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <IconInstagram/>
    </template>
    <template #heading><a href="https://www.instagram.com/bysal_karki/">Instagram</a> </template>
  </WelcomeItem>
</template>
