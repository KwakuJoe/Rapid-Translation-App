<template>
    <!-- button -->

    <!-- Modal-->
    <TransitionRoot appear :show="languageStore.modal_display" as="template">
    <Dialog as="div" @close="closeModal" class="relative z-10">
      <TransitionChild
        as="template"
        enter="duration-300 ease-out"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="duration-200 ease-in"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div class="fixed inset-0 bg-black bg-opacity-25" />
      </TransitionChild>

      <div class="fixed inset-0 overflow-y-auto">
        <div
          class="flex min-h-full items-center justify-center p-4 text-center"
        >
          <TransitionChild
            as="template"
            enter="duration-300 ease-out"
            enter-from="opacity-0 scale-95"
            enter-to="opacity-100 scale-100"
            leave="duration-200 ease-in"
            leave-from="opacity-100 scale-100"
            leave-to="opacity-0 scale-95"
          >
            <DialogPanel
              class=" sm:w-full md:w-1/2 ring-1 ring-slate-300/40  lg:w-1/4 transform overflow-hidden rounded-2xl dark:bg-neutral-800 bg-white dark:bg-opacity-10 bg-opacity-10 backdrop-filter backdrop-blur-sm p-6 text-left align-middle shadow-xl transition-all"
            >

            <div class="flex flex-row items-center gap-x-3">
                <div class="h-16 w-16 mb-3 bg-white bg-opacity-10 rounded-full flex items-center justify-center">
                    <nuxt-img src="https://rapidapi.com/cdn/images?url=https://rapidapi-prod-apis.s3.amazonaws.com/dec1ce66-ec90-4b90-a81c-1c009e1cb90d.png" loading="lazy" class="h-10 w-10" />
                </div>
            </div>

              <DialogTitle
                class="text-xl font-medium"
              >
              Welcome to Rapid Translator
              </DialogTitle>

              <div class="mt-2">
                <p class="text-lg  my-4">Rapid Translator allow you translate multi texts in one fast query.</p>

                <p class="text-base my-3">
                    Note
                </p>

                <div class="flex flex-row items-start gap-x-5">
                   <Icon name="octicon:alert-24"   />
                    <div class="flex flex-col gap-y-2">
                        <p>We inform you that the max length is 8500 character.</p>
                        <p>Since Rapid Translator is on free mode, it accepts 50 request per day for total users</p>
                    </div>
                </div>
              </div>

              <div>
                <!-- Submit button -->
                <div class="flex items-center gap-x-4 justify-between">
                    <button @click="closeModal" class="w-full focus:outline-none mt-5 font-medium bg-white text-black py-2 rounded-md hover:bg-slate-200 text-lg">
                         Continue
                    </button>
                </div>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>
<script setup>
import {
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogPanel,
  DialogTitle,
} from '@headlessui/vue'

import {useLanguageStore} from '../stores/languages'
const languageStore = useLanguageStore()

// const isOpen = ref(false)

function closeModal() {
  languageStore.modal_display = false
}
// function openModal() {
//   isOpen.value = true
// }

</script>
<style >
    
</style>