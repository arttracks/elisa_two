

<!-- ###################   HTML   ################### -->
<template>
  <div>
    <template v-for="(citation) in values">
      <input 
        class="input is-small citation" 
        @input="updateCitations"
        :value="citation" >
    </template>
    <input 
      class="input is-small citation" id="blank-citation-field" 
      @input="updateCitations"
      placeholder="Citation or source" >
  </div>
</template>

<!-- ################### JAVACRIPT ################### -->
<script>
export default {
  data: function() {
    return {
      lastUpdatedText: null,
      justUpdated: false
    };
  },
  props: ["values", "setter"],
  components: {},
  updated: function() {
    if (!this.justUpdated) {
      return;
    }
    const inputs = document.body.querySelectorAll("input.citation");
    if (inputs.length == 1) {
      inputs[0].focus();
    } else {
      for (const i of inputs) {
        if (i.value === this.lastUpdatedText) {
          i.focus();
        }
      }
    }
    this.justUpdated = false;
  },
  methods: {
    updateCitations: function(e) {
      const matches = document.body.querySelectorAll("input.citation");
      let values = [];
      for (const m of matches) {
        if (m.value.length) {
          values.push(m.value);
        }
      }
      this.setter(values);
      document.getElementById("blank-citation-field").value = "";
      this.lastUpdatedText = e.data;
      this.justUpdated = true;
    }
  }
};
</script>


<!-- ###################    CSS    ################### -->
<style lang="scss">

</style>
