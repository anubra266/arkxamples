<script setup>
import {
  Checkbox,
  CheckboxControl,
  CheckboxInput,
  CheckboxLabel,
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
    class="rootStyles"
    @change="
      (checked) => {
        checkedItems[0] = checked;
        checkedItems[1] = checked;
      }
    "
    v-model:checked="allChecked"
    v-model:indeterminate="someChecked"
    v-slot="{ isChecked, isIndeterminate }"
  >
    <CheckboxInput class="inputStyles" />
    <CheckboxControl class="controlStyles">
      <CheckIcon v-if="isChecked" />
      <MinusIcon v-if="isIndeterminate" />
    </CheckboxControl>
    <CheckboxLabel class="labelStyles">Parent Checkbox</CheckboxLabel>
  </Checkbox>
  <div>
    <Checkbox
      class="rootStyles"
      v-model:checked="checkedItems[0]"
      v-slot="{ isChecked }"
    >
      <CheckboxInput class="inputStyles" />
      <CheckboxControl class="controlStyles">
        <CheckIcon v-if="isChecked" />
      </CheckboxControl>
      <CheckboxLabel class="labelStyles">Child Checkbox 1</CheckboxLabel>
    </Checkbox>
    <Checkbox
      class="rootStyles"
      v-model:checked="checkedItems[1]"
      v-slot="{ isChecked }"
    >
      <CheckboxInput class="inputStyles" />
      <CheckboxControl class="controlStyles">
        <CheckIcon v-if="isChecked" />
      </CheckboxControl>
      <CheckboxLabel class="labelStyles">Child Checkbox 2</CheckboxLabel>
    </Checkbox>
  </div>
</template>
