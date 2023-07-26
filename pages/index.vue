<template>
 <UContainer>
    <div class="flex flex-col h-screen">
    
        <div class="flex flex-row items-center gap-x-3 my-8">
            <nuxt-img src="https://rapidapi.com/cdn/images?url=https://rapidapi-prod-apis.s3.amazonaws.com/dec1ce66-ec90-4b90-a81c-1c009e1cb90d.png" loading="lazy" class="h-10 w-10" />
            <div class="flex flex-col grow">
                <p class="md:text-3xl text-lg font-medium">Rapid Translate Multi Traduction</p>
                <p class="text-gray-400">By oussama sibari </p>
            </div>
            <ThemeToggleIcon/>
            <NoticeModal/>
        </div>

     <div class="grow">
        <div class="flex md:flex-row flex-col items-center w-full ring-1 ring-slate-300/40 py-3 px-2 rounded-t-md gap-x-5">
            <div class="flex flex-col w-full items-start borderb ">
                <FromDropdown/>
                <!-- Input Event name Event text --> 
                <textarea @input="typing"  ref="el" class="w-full bg-none mt-3 bg-transparent focus:outline-none placeholder:text-3xl text-3xl" name="" placeholder="Type to translate" id="" rows="10"></textarea>

            </div>
            <UIcon  class="md:text-5xl" name="i-heroicons-arrow-path-rounded-square"/>
            <div class="flex flex-col w-full items-start">
                <div class="flex w-full items-center justify-between">
                    <ToDropdown/>
                <UIcon v-if="languageStore.is_loading" name="i-heroicons-arrow-path"/>
                </div>
                <!-- Input Event name Event text --> 
                <textarea readonly class="w-full bg-none mt-3 bg-transparent focus:outline-none placeholder:text-3xl text-3xl" name=""  id="" rows="10">{{ languageStore.output_text  }}</textarea>
            </div>
        </div>
    </div>

    <!-- developed by -->
    <p class="text-gray-400 text-opacity-50 text-xs text-center">Nuxt 3, vue 3, Tailwind, Nuxt UI, Rapid Translate Multi Traduction (A Rapid Api)</p>
    <nuxt-link to="https://www.linkedin.com/in/josephampah/"><p class="text-gray-400 hover:text-green-700 text-opacity-50 text-xs text-center mb-5">Developed Kwaku Joseph</p></nuxt-link>
    </div>
 </UContainer>
<!-- ArrowPath -->
 <!-- notification -->
 <UNotifications />

</template>
<script setup lang="ts">
// import autosize from 'autosize'
import {useLanguageStore} from '../stores/languages'
const languageStore = useLanguageStore()


// text area binding
    function typing(event:any) {
        languageStore.input_text = event.target.value
    }

onMounted(() => {
    languageStore.translate()
    languageStore.modal_display = true
})
</script>
<style>
    
</style>