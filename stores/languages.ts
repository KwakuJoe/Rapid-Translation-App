import { defineStore } from 'pinia'

  export const useLanguageStore = defineStore('language', () => {
    const input_text = ref<String>('Hello World')
    const from_language = ref<String>('en')
    const to_language = ref<String>('es')
    const output_text = ref<any>('')
    const is_loading = ref<boolean>(false)

    // for modal display
    const modal_display = ref<boolean>(false)


    async function translate() {

      const toast = useToast()



        const { data, pending} = await useFetch('https://rapid-translate-multi-traduction.p.rapidapi.com/t', {
            method:'post',
            watch:[input_text],
            onRequest({ request, options }) {
              // Set the request headers
              options.headers = options.headers || {
                'content-type': 'application/json',
                'X-RapidAPI-Key': '237bd2a1efmsh12c6c558b8a0ac5p186483jsnc1257f094d13',
                'X-RapidAPI-Host': 'rapid-translate-multi-traduction.p.rapidapi.com'
              }
              options.body = {
                "from": from_language.value,
                "to": to_language.value,
                "q": input_text.value
              }
                    // set loading state to true
                is_loading.value = true

            },
            onRequestError({ request, options, error }) {
              // Handle the request errors
              console.log(error.message);
              toast.add({
                id: 'request_error',
                title: '): Oops!, Error try to translate your request, please try again',
                description: `${error}`,
                timeout: 0,
              })
              
              is_loading.value = false
            },

            onResponse({ request, response, options }) {
              // Process the response data
            //   localStorage.setItem('token', response._data.token)
            // console.log(response._data)
            output_text.value = response._data

            is_loading.value = false
            },

            onResponseError({ request, response, options, error }) {
              is_loading.value = false
              // Handle the response errors
              console.log(response._data)
              toast.add({
                id: 'request_error',
                title: '): Oops!, Error try to translate your request, please try again',
                description: `${response._data.message}`,
                timeout: 0,
              })
            }
          })

          output_text.value = data.value
          // is_loading.value = pending.value

    }
  
    return { input_text, modal_display, output_text, is_loading, from_language, to_language, translate }
  })