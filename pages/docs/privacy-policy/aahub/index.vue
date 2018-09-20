<template>
  <div>
    <PrivacyPolicyForAAHub />
  </div>
</template>

<script>
import PrivacyPolicyForAAHub from "~/components/pages/PrivacyPolicyForAAHub.vue";

export default {
  components: {
    PrivacyPolicyForAAHub
  },
  head() {
    return {
      title: "プライバシーポリシー | AAHub",
      meta: [
        {
          name: "robots",
          content: "noindex,nofollow"
        }
      ]
    };
  },
};
</script>

<style scoped>
</style>
