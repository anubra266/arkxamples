<script setup>
import {
  Popover,
  PopoverArrow,
  PopoverArrowTip,
  PopoverCloseTrigger,
  PopoverContent,
  PopoverDescription,
  PopoverPositioner,
  PopoverTitle,
  PopoverTrigger,
} from "@ark-ui/vue";

import "./styles.css";
</script>

<template>
  <Popover>
    <PopoverTrigger>
      <button class="button button_secondary button_size__md">Open</button>
    </PopoverTrigger>
    <PopoverPositioner>
      <PopoverArrow>
        <PopoverArrowTip />
      </PopoverArrow>
      <PopoverContent>
        <div class="stack content">
          <div class="stack">
            <PopoverTitle>Favorite Cake</PopoverTitle>
            <PopoverDescription>
              Dessert jelly beans pudding chocolate pie pastry danish chocolate
              pie.
            </PopoverDescription>
          </div>
          <input class="input" />
          <div class="stack row actions">
            <PopoverCloseTrigger>
              <button class="button button_link button_size__sm">
                Dismiss
              </button>
            </PopoverCloseTrigger>
            <button class="button button_link button_size__sm active">
              Show
            </button>
          </div>
        </div>
      </PopoverContent>
    </PopoverPositioner>
  </Popover>
</template>
