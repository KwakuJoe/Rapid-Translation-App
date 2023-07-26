<template>
    <!-- pop -->
   <Popover class="relative w-full" v-slot="{ open  }">
        <PopoverButton class="border-none focus:outline-none w-full">
           <div class="flex flex-row grow items-center gap-x-2 py-2 px-2 rounded-md hover:bg-slate-400 hover:bg-opacity-5">
               <!-- text -->
               <UIcon :class="{ 'rotate-180 transform': open }" name="i-heroicons-chevron-down" />
               <p class="text-sm m-0 font-medium p-0 ">{{ selectedLanguage }}</p>
           </div>
        </PopoverButton>

       <PopoverPanel class="absolute z-10 mt-2 rounded-md  h-80 overflow-y-auto bg-white dark:bg-neutral-900  ring-1 ring-slate-300/20 rounded-m">
            <!-- Search input -->
           <input v-model="searchQuery" class=" h-8 w-full bg-white dark:bg-neutral-900 ring-1 ring-slate-300/40  px-1 focus:outline-0"
            type="text" placeholder="Search language">
           <!-- body/ result -->
         
            <div @click="onTimeZoneSelect(language.code, language.country)" v-for="(language, index) in searchedLanguages" :key="index" 
            class="cursor-pointer flex flex-row justify-between items-center gap-x-2  py-1 px-2  hover:bg-slate-200 hover:bg-opacity-20">
                <p class="text-sm m-0 font-medium p-0">{{ language.country }}</p>
            </div>
       </PopoverPanel>
   </Popover> 
</template>
<script setup lang="ts">
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/vue'
import {useLanguageStore} from '../stores/languages'
const languageStore = useLanguageStore()

// searh query
const searchQuery = ref("");

// These are just for the demo purposes
const languages = [
{code: 'en', country:'English'},
{code: 'af', country:'Afrikaans'},
{code: 'sq', country:'Albanian'},
{code: 'am', country:'Amharic'},
{code: 'ar', country:'Arabic'},
{code: 'hy', country:'Armenian'},
{code: 'ba', country:'Bashkir'},
{code: 'eu', country:'Basque'},
{code: 'be', country:'Belarusian'},
{code: 'bb', country:'Bengali'},
{code: 'bs', country:'Bosnian'},
{code: 'bg', country:'Bulgarian'},
{code: 'my', country:'Burmese'},
{code: 'ca', country:'Catalan'},
{code: 'ceb', country:'Cebuano'},
{code: 'ny', country:'Chichewa'},
{code: 'zh-CN', country:'Chinese (Simplified)'},
{code: 'zh-TW', country:'Chinese (Traditional)'},
{code: 'co', country:'Corsican'},
{code: 'hr', country:'Croatian'},
{code: 'cs', country:'Czech'},
{code: 'da', country:'Danish'},
{code: 'nl', country:'Dutch'},
{code: 'eo', country:'Esperanto'},
{code: 'et', country:'Estonian'},
{code: 'fi', country:'Finnish'},
{code: 'fr', country:'French'},
{code: 'fy', country:'Frisian'},
{code: 'gl', country:'Galician'},
{code: 'ka', country:'Georgian'},
{code: 'de', country:'German'},
{code: 'el', country:'Greek'},
{code: 'gu', country:'Gujarati'},
{code: 'ht', country:'Haitian Creole'},
{code: 'ha', country:'Hausa'},
{code: 'haw', country:'Hawaiian'},
{code: 'iw', country:'Hebrew'},
{code: 'mrj', country:'Hill Mari'},
{code: 'hi', country:'Hindi'},
{code: 'hmn', country:'Hmong'},
{code: 'hu', country:'Hungarian'},
{code: 'is', country:'Icelandic'},
{code: 'ig', country:'IcelaIgbondic'},
{code: 'id', country:'Indonesian'},
{code: 'ga', country:'Irish'},
{code: 'it', country:'Italian'},
{code: 'ja', country:'Japanese'},
{code: 'jw', country:'Javanese'},
{code: 'kn', country:'Kannada'},
{code: 'kk', country:'Kazakh'},
{code: 'km', country:'Khmer'},
{code: 'ko', country:'Korean'},
{code: 'ku', country:'Kurdish'},
{code: 'ky', country:'Kyrgyz'},
{code: 'lo', country:'Lao'},
{code: 'la', country:'Latin'},
{code: 'lv', country:'Latvian'},
{code: 'lt', country:'Lithuanian'},
{code: 'lb', country:'Luxembourgish'},
{code: 'mk', country:'Macedonian'},
{code: 'mg', country:'Malagasy'},
{code: 'ms', country:'Malay'},
{code: 'ml', country:'Malayalam'},
{code: 'mt', country:'Maltese'},
{code: 'mi', country:'Maori'},
{code: 'mr', country:'Marathi'},
{code: 'mhr', country:'Mari'},
{code: 'mn', country:'Mongolian'},
{code: 'me', country:'Nepali'},
{code: 'no', country:'Norwegian'},
{code: 'ps', country:'Pashto'},
{code: 'pap', country:'Papiamento'},
{code: 'fa', country:'Persian'},
{code: 'pl', country:'Polish'},
{code: 'pt', country:'Portuguese'},
{code: 'pa', country:'Punjabi'},
{code: 'ro', country:'Romanian'},
{code: 'ru', country:'Russian'},
{code: 'sm', country:'Samoan'},
{code: 'gd', country:'Scots Gaelic'},
{code: 'sr', country:'Serbian'},
{code: 'st', country:'Sesotho'},
{code: 'sn', country:'Shona'},
{code: 'sd', country:'Sindhi'},
{code: 'si', country:'Sinhala'},
{code: 'sk', country:'Slovak'},
{code: 'sl', country:'Slovenian'},
{code: 'so', country:'Somali'},
{code: 'es', country:'Spanish'},
{code: 'su', country:'Sundanese'},
{code: 'sw', country:'Swahili'},
{code: 'sv', country:'Swedish'},
{code: 'tl', country:'Tagalog Filipino'},
{code: 'tg', country:'Tajiko'},
{code: 'ta', country:'Tamil'},
{code: 'tt', country:'Tatar'},
{code: 'te', country:'Telugu'},
{code: 'th', country:'Thai'},
{code: 'tr', country:'Turkish'},
{code: 'udm', country:'Udmurt'},
{code: 'uk', country:'Ukrainian'},
{code: 'ur', country:'Urdu'},
{code: 'uz', country:'Uzbek'},
{code: 'vi', country:'Vietnamese'},
{code: 'cy', country:'Welsh'},
{code: 'xh', country:'Xhosa'},
{code: 'yi', country:'Yiddish'},
{code: 'yi', country:'Yiddish'},
{code: 'yo', country:'Yoruba'},
{code: 'zu', country:'YorZuluuba'},

];

// search computed
const searchedLanguages = computed(() => {
      return languages.filter((language) => {
        return (
            language.country
            .toLowerCase()
            .indexOf(searchQuery.value.toLowerCase()) != -1
        );
      });
});

const selectedLanguage = ref<String>(languages[0].country)

const onTimeZoneSelect = (code:String, country:string) =>{
    selectedLanguage.value = country
    languageStore.from_language = code.toString()
    console.log(code)
}

</script>
<style >
   
</style>