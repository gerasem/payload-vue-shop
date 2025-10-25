<script setup lang="ts">
import Button from '@/components/form/Button.vue'

import { ref, useSlots } from 'vue'

const dialog = ref<HTMLDialogElement | null>(null)
defineProps<{
  title: string
}>()

const slots = useSlots()
const hasFooterSlot = !!slots.footer

const show = () => {
  dialog.value?.showModal()
}
const close = () => {
  dialog.value?.close()
}

const onClick = ($event: MouseEvent) => {
  if ($event.target === dialog.value) {
    dialog.value?.close()
  }
}

defineExpose({ show, close })
</script>

<template>
  <dialog
    class="modal is-active"
    ref="dialog"
    role="textbox"
    tabindex="0"
    @mousedown="onClick"
  >
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">{{ title }}</p>

        <Button
          aria-label="close"
          class="delete"
          icon="x-lg"
          @click="close()"
        ></Button>
      </header>

      <section class="modal-card-body">
        <slot />
      </section>

      <footer
        v-if="hasFooterSlot"
        class="modal-card-foot"
      >
        <div class="buttons">
          <button class="button is-success">Save changes</button>
          <button class="button">Cancel</button>
        </div>
      </footer>
    </div>
  </dialog>
</template>

<style lang="scss" scoped>
@forward 'bulma/sass/components/modal';

dialog {
  padding: 0;
  color: #333;
  border: 3px solid #aaa;
  opacity: 0;
  transform: scaleY(0.6);
  transition: all 0.2s allow-discrete;

  /*   Open state of the dialog  */
  &[open] {
    opacity: 1;
    transform: scaleY(1);
    border-radius: 7px;
  }
}

/*   Before-open state  */
/* Needs to be after the previous dialog[open] rule to take effect,
    as the specificity is the same */
@starting-style {
  dialog[open] {
    opacity: 0;
    transform: scaleY(0.6);
    border-radius: 7px;
  }
}

/* Transition the :backdrop when the dialog modal is promoted to the top layer */
dialog::backdrop {
  background-color: rgb(0 0 0 / 0%);
  transition:
    display 0.4s allow-discrete,
    overlay 0.4s allow-discrete,
    background-color 0.3s;
  /* Equivalent to
  transition: all 0.7s allow-discrete; */
}

dialog[open]::backdrop {
  background-color: rgb(0 0 0 / 25%);
}

/* This starting-style rule cannot be nested inside the above selector
because the nesting selector cannot represent pseudo-elements. */

@starting-style {
  dialog[open]::backdrop {
    background-color: rgb(0 0 0 / 0%);
  }
}

body:has(dialog[open]) {
  overflow: hidden;
}

dialog::backdrop {
  backdrop-filter: blur(2px);
}
</style>
