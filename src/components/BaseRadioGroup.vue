<template>
  <component
    v-for="option in options"
    :key="option.value"
    :is="vertical ? 'div' : 'span'"
    :class="{
      horizontal: !vertical
    }"
  >
    <BaseRadio
      :label="option.label"
      :value="option.value"
      :modelValue="modelValue"
      :name="name"
      @update:modelValue="$emit('update:modelValue', $event)"
    />
  </component>
</template>

<script>
export default {
  props: {
    options: {
      type: Array,
      required: true
    },
    modelValue: {
      type: [String, Number],
      required: true
    },
    vertical: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped>
.horizontal {
  display: inline-block;
  margin-right: 10px;
}
</style>