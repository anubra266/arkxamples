<script setup>
import {
Checkbox,
CheckboxControl,
CheckboxInput,
CheckboxLabel
} from "@ark-ui/vue";
import { reactive, ref, watch } from "vue";

import CheckIcon from "./CheckIcon.vue";
import MinusIcon from "./MinusIcon.vue";

import "./styles.css";

const parentChecked = ref(false);
const someChecked = ref(false);
const childItems = reactive([false, false]);

watch(childItems, (items) => {
  parentChecked.value = items.every(Boolean);
  someChecked.value = items.some(Boolean) && !parentChecked.value;
});

watch(
  () => parentChecked.value,
  (parentVal) => {
    if (someChecked.value && !parentVal) return;
    childItems.map((_, idx) => {
      childItems[idx] = parentVal;
    });
    return;
  }
);
</script>

<template>
  <Checkbox
    v-model="parentChecked"
    :indeterminate="someChecked"
    v-slot="{ isChecked, isIndeterminate }"
  >
    <CheckboxInput />
    <CheckboxControl>
      <CheckIcon v-show="isChecked" />
      <MinusIcon v-show="isIndeterminate" />
    </CheckboxControl>
    <CheckboxLabel>Parent Checkbox</CheckboxLabel>
  </Checkbox>
  <div>
    <Checkbox v-model="childItems[0]" v-slot="{ isChecked }">
      <CheckboxInput />
      <CheckboxControl>
        <CheckIcon v-show="isChecked" />
      </CheckboxControl>
      <CheckboxLabel>Child One Checkbox</CheckboxLabel>
    </Checkbox>
    <Checkbox v-model="childItems[1]" v-slot="{ isChecked }">
      <CheckboxInput />
      <CheckboxControl>
        <CheckIcon v-show="isChecked" />
      </CheckboxControl>
      <CheckboxLabel>Child Two Checkbox</CheckboxLabel>
    </Checkbox>
  </div>
</template>
