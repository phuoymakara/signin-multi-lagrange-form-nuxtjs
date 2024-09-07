<template>
    <header class="w-full bg-slate-100 border-b border-[#ddd]">
      <nav class="md:w-[80%] lg:w-[80%] w-full mx-auto p-4">
       <div class="flex justify-end gap-x-4 text-white">
         <button 
         v-if="locale === 'kh'"
        @click="setLocale('en')"
        class="flex p-3 py-1 bg-slate-500 gap-x-2 rounded-sm">
        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 32 24"><g fill="none"><path fill="#2E42A5" fill-rule="evenodd" d="M0 0v24h32V0z" clip-rule="evenodd"/><mask id="flagpackGbUkm0" width="32" height="24" x="0" y="0" maskUnits="userSpaceOnUse" style="mask-type:luminance"><path fill="#fff" fill-rule="evenodd" d="M0 0v24h32V0z" clip-rule="evenodd"/></mask><g mask="url(#flagpackGbUkm0)"><path fill="#fff" d="m-3.563 22.285l7.042 2.979l28.68-22.026l3.715-4.426l-7.53-.995l-11.698 9.491l-9.416 6.396z"/><path fill="#F50100" d="M-2.6 24.372L.989 26.1L34.54-1.599h-5.037z"/><path fill="#fff" d="m35.563 22.285l-7.042 2.979L-.159 3.238l-3.715-4.426l7.53-.995l11.698 9.491l9.416 6.396z"/><path fill="#F50100" d="m35.323 23.783l-3.588 1.728l-14.286-11.86l-4.236-1.324l-17.445-13.5H.806l17.434 13.18l4.631 1.588z"/><mask id="flagpackGbUkm1" fill="#fff"><path fill-rule="evenodd" d="M19.778-2h-7.556V8H-1.972v8h14.194v10h7.556V16h14.25V8h-14.25z" clip-rule="evenodd"/></mask><path fill="#F50100" fill-rule="evenodd" d="M19.778-2h-7.556V8H-1.972v8h14.194v10h7.556V16h14.25V8h-14.25z" clip-rule="evenodd"/><path fill="#fff" d="M12.222-2v-2h-2v2zm7.556 0h2v-2h-2zM12.222 8v2h2V8zM-1.972 8V6h-2v2zm0 8h-2v2h2zm14.194 0h2v-2h-2zm0 10h-2v2h2zm7.556 0v2h2v-2zm0-10v-2h-2v2zm14.25 0v2h2v-2zm0-8h2V6h-2zm-14.25 0h-2v2h2zm-7.556-8h7.556v-4h-7.556zm2 8V-2h-4V8zm-16.194 2h14.194V6H-1.972zm2 6V8h-4v8zm12.194-2H-1.972v4h14.194zm2 12V16h-4v10zm5.556-2h-7.556v4h7.556zm-2-8v10h4V16zm16.25-2h-14.25v4h14.25zm-2-6v8h4V8zm-12.25 2h14.25V6h-14.25zm-2-12V8h4V-2z" mask="url(#flagpackGbUkm1)"/></g></g></svg>
        EN</button>
        <button 
        v-else
        @click="setLocale('kh')"
        class="flex p-3 py-1 gap-x-2 rounded-sm bg-slate-500">
        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 36 36"><path fill="#032EA1" d="M36 27a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V9a4 4 0 0 1 4-4h28a4 4 0 0 1 4 4z"/><path fill="#E01E24" d="M0 10.572h36v14.855H0z"/><path fill="#FFF" d="M27.021 22.897v-.902h-.542v-.901h-.496v-.586h-.226v-.451h-.438l-.238-.341v-1.599l.271-.271v-1.488l-.226.203v-.474h-.181v.226h-.359v-.723l-.429.384l.136-.485l-.249-1.116h-.136s-.111-.474-.337-.474c0 0 .09-.292-.091-.292s-.136.225-.136.225s-.315.136-.315.473l-.18-.022l-.271 1.307l.191.384l-.44-.384v.993H19.94v-.902l-.136.135v.316h-.315v-.316l.226-.203v-.428l-.182.191l-.271-.372v-.316l-.157.157l-.046-.27l.226-.36l-.034-.293l-.258.315v-.27l.113-.248l-.519-1.309l-.124-.362l-.191-.022v-.181s-.136-.315-.316-.315s-.315.315-.315.315v.181l-.191.022l-.125.362l-.518 1.309l.113.248v.27l-.259-.315l-.035.293l.226.36l-.044.27l-.158-.157v.316l-.27.372l-.181-.191v.428l.226.203v.316h-.315v-.316l-.136-.135v.902H13.58v-.993l-.44.384l.191-.384l-.271-1.307l-.181.022c0-.337-.315-.473-.315-.473s.045-.225-.136-.225c-.18 0-.09.292-.09.292c-.226 0-.338.474-.338.474h-.135l-.248 1.116l.135.485l-.428-.384v.722h-.361v-.226h-.181v.474l-.225-.203v1.488l.27.271v1.599l-.239.341h-.348v.451h-.314v.586h-.452v.901h-.495v.902h-.497l-.045.991h19.035l.045-.991h-.496z"/><path fill="#DB7F86" d="M11.596 17.869v1.735h-.813l-.194.378h1.007v3.907h.342v-6.02zm13.731 2.113l-.178-.378h-.736v-1.735h-.338v6.02h.338v-3.907zm-8.222-2.113v1.735h-3.692v-1.745h-.33v6.02h.33v-3.897h3.692v3.907h.353v-6.02zm5.406 0v1.735h-3.599v-1.735h-.349v6.02h.349v-3.907h3.599v3.907h.427v-6.02z"/></svg>
        KH
        </button>
       </div>
      </nav>  
    </header>
</template>

<script setup>
const { locale, setLocale } = useI18n()
//console.log('locales',locale?._value)
</script>