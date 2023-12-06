<template>
  <div >
    <label :for="label" class="block mb-2 text-sm text-gray-700 font-medium ">{{ label }}</label>
    <input
      class="py-3 px-4 block w-full border-grey-200 border rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
      :type="type" :value="modelValue" @input="updateValue" :placeholder="placeholder" :id="label" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    modelValue: {
      type: [String, Number],
      required: true
    },
    placeholder: String,
    label: String,
    type: String
  },
  methods: {
    updateValue(event: Event) {
      const value = this.type === 'number' ? Number((event.target as HTMLInputElement).value) : (event.target as HTMLInputElement).value;
      this.$emit('update:modelValue', value);
    }
  }
});
</script>

