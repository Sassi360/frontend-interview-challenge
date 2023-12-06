<template>
  <div class="inline-flex gap-x-2 items-center">
    <label :for="label" class="block text-sm font-medium leading-6 text-gray-900">{{ label }}</label>
    <input
      class="inline-flex flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
      type="checkbox" :checked="modelValue" @change="updateValue($event)" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    modelValue: {
      type: Boolean,
      required: true
    },
    label: String,
  },
  methods: {
    updateValue(event: Event) {
      this.$emit('update:modelValue', (event.target as HTMLInputElement).checked);
    }
  }
});
</script>
