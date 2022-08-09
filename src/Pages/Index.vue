<template>
  <div class="page-index">
    <textarea
      name="input-links"
      cols="30"
      rows="10"
      v-model="links"
    ></textarea>

    <br />
    <br />
    <button @click="openLinks()">Open links with tabs!</button>

  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PageIndex',
  props: { },
  data() {
    return {
      links: '',
    };
  },
  methods: {
    openLinks() {
      const links = this.links.trim().split(/\s+/);

      links
        .map((link) => link.trim())
        .filter((link) => link.length > 0)
        .forEach((link) => window.open(link, '_blank'));
    },
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 { margin: 40px 0 0; }
ul { list-style-type: none; padding: 0; }
li { display: inline-block; margin: 0 10px; }
a { color: #42b983; }
</style>
