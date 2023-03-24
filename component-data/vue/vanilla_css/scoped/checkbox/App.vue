<script setup>
import {
Checkbox,
CheckboxControl,
CheckboxInput,
CheckboxLabel
} from "@ark-ui/vue";
import { computed, reactive } from "vue";

import CheckIcon from "./CheckIcon.vue";
import MinusIcon from "./MinusIcon.vue";

import "./styles.css";

const checkedItems = reactive([false, false]);

const allChecked = computed(() => checkedItems.every(Boolean));
const someChecked = computed(() => checkedItems.some(Boolean)) && !allChecked;
</script>

<template>
  <Checkbox
    @change="
      (checked) => {
        checkedItems[0] = checked;
        checkedItems[1] = checked;
      }
    "
    v-model="allChecked"
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
    <Checkbox v-model="checkedItems[0]" v-slot="{ isChecked }">
      <CheckboxInput />
      <CheckboxControl>
        <CheckIcon v-show="isChecked" />
      </CheckboxControl>
      <CheckboxLabel>Child Checkbox 1</CheckboxLabel>
    </Checkbox>
    <Checkbox v-model="checkedItems[1]" v-slot="{ isChecked }">
      <CheckboxInput />
      <CheckboxControl>
        <CheckIcon v-show="isChecked" />
      </CheckboxControl>
      <CheckboxLabel>Child Checkbox 2</CheckboxLabel>
    </Checkbox>
  </div>
</template>
