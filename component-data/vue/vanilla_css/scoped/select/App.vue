<script setup>
import {
  Select,
  SelectContent,
  SelectOption,
  SelectOptionGroup,
  SelectOptionGroupLabel,
  SelectPositioner,
  SelectTrigger,
} from "@ark-ui/vue";

import SelectIcon from "./SelectIcon.vue";
import "./styles.css";
</script>

<template>
  <Select :positioning="{ gutter: 4 }" v-slot="{ selectedOption, isOpen }">
    <SelectTrigger>
      <button>
        <span v-if="selectedOption?.label">{{ selectedOption?.label }}</span>
        <span v-else>Select option</span>
        <SelectIcon :isOpen="isOpen" />
      </button>
    </SelectTrigger>
    <Teleport to="body">
      <SelectPositioner>
        <SelectContent>
          <SelectOption value="react" label="React" />
          <SelectOption value="solid" label="Solid" />
          <SelectOption value="vue" label="Vue" />

          <SelectOptionGroup>
            <SelectOptionGroupLabel>Styling</SelectOptionGroupLabel>
            <SelectOption value="css" label="CSS" />
            <SelectOption value="css-panda" label="CSS Panda" />
            <SelectOption value="tailwind" label="Tailwind" />
          </SelectOptionGroup>
        </SelectContent>
      </SelectPositioner>
    </Teleport>
  </Select>
</template>
