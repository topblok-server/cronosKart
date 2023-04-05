<template>
    <v-col align="center" justify="center">
            <v-col id="titleTextContainer" align="center" justify="center">
            <h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">$VRSE</h1>
            </v-col>

            <div id="innercontainer">
            <p class="text-gray-500 dark:text-gray-400">TopBlok Digital acts as the caretaker for VRSE, serving as a foundation upon which VRSE holders can build, without being an overseer. <br><br>

                The foundation supports decentralized and community-led governance, with a focus on becoming more decentralized over time. Its responsibilities include administering the decisions made by the VRSE Community, overseeing day-to-day operations, managing finances, project management, and providing support to ensure that the community's ideas can be realized.</p>
            <div class="inline-flex items-center justify-center w-full">
                <hr class="w-64 h-1 my-8 bg-gray-200 border-0 rounded dark:bg-gray-700">
                <div class="absolute px-4 -translate-x-1/2 bg-white left-1/2 dark:bg-gray-900">
                    <svg aria-hidden="true" class="w-5 h-5 text-gray-700 dark:text-gray-300" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor"/></svg>
                </div>
            </div>
            <p class="text-gray-500 dark:text-gray-400">The aim of TopBlok Digital is to foster the equitable and inclusive growth and development of the VRSE ecosystem. It also provides infrastructure for VRSE holders to work together through transparent and unrestricted governance processes.</p>
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