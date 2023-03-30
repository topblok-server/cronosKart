<template>
    <v-col align="center" justify="center">
            <v-col id="titleTextContainer" align="center" justify="center">
            <h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">$VRSE</h1>
            </v-col>

            <div id="innercontainer">
            <p class="text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <div class="inline-flex items-center justify-center w-full">
                <hr class="w-64 h-1 my-8 bg-gray-200 border-0 rounded dark:bg-gray-700">
                <div class="absolute px-4 -translate-x-1/2 bg-white left-1/2 dark:bg-gray-900">
                    <svg aria-hidden="true" class="w-5 h-5 text-gray-700 dark:text-gray-300" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor"/></svg>
                </div>
            </div>
            <p class="text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>

            <v-col id="vrseContainer" align="center" justify="center">
                <div id="dexscreener-embed">
                    <iframe src="https://dexscreener.com/cronos/0xcD2e6b295B19Ce9d4d476b2B24D5b65a778b09b6?embed=1&theme=dark"></iframe>
                </div>
            </v-col>
    </v-col>
</template>

<script>
export default {

}
</script>

<style>
#vrseContainer{
    margin: auto;
    width: 100%
}
#innercontainer{
    width: 50%;
}
#titleTextContainer{
    margin-bottom: 2.5%;
}
#dexscreener-embed iframe{
    aspect-ratio: 16/9;
    width: 50%;
}
</style>