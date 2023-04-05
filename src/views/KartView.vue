<template>
    <v-col align="center" justify="center">
        <v-col id="titleTextContainer" align="center" justify="center">
            <h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Karts</h1>
        </v-col>
        <v-row align="center" justify="center">
            <div id="kartCard" class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                    <img id="kartImg" class="rounded-t-lg" src="https://i.ibb.co/TLFXzmM/1.png" alt="" />
                </a>
                <div class="p-5">
                    <a href="#">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Go Kart</h5>
                    </a>
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Go Karts are the highest class of regional open-wheel single-seater racing karts.</p>
                    <button type="button" class="text-gray-900 bg-black hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 mr-2 mb-2">
                        <svg class="w-4 h-4 mr-2 -ml-1 text-[#626890]" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="ethereum" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="currentColor" d="M311.9 260.8L160 353.6 8 260.8 160 0l151.9 260.8zM160 383.4L8 290.6 160 512l152-221.4-152 92.8z"></path></svg>
                        <a id="whiteText">Pay with Ethereum</a>
                    </button>
                </div>
            </div>

            <div id="kartCard" class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                    <img id="kartImg" class="rounded-t-lg" src="https://i.ibb.co/44pCy0k/2.png" alt="" />
                </a>
                <div class="p-5">
                    <a href="#">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Indy Kart</h5>
                    </a>
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Indy Karts are the highest class of national open-wheel single-seater racing karts.</p>
                    <button type="button" class="text-gray-900 bg-black hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 mr-2 mb-2">
                        <svg class="w-4 h-4 mr-2 -ml-1 text-[#626890]" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="ethereum" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="currentColor" d="M311.9 260.8L160 353.6 8 260.8 160 0l151.9 260.8zM160 383.4L8 290.6 160 512l152-221.4-152 92.8z"></path></svg>
                        <a id="whiteText">Pay with Ethereum</a>
                    </button>
                </div>
            </div>

            <div id="kartCard" class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                    <img id="kartImg" class="rounded-t-lg" src="https://i.ibb.co/4N2ndMF/Untitled-design.png" alt="" />
                </a>
                <div class="p-5">
                    <a href="#">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Formula 1 Kart</h5>
                    </a>
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Formula 1 Karts are the highest class of international open-wheel single-seater racing.</p>
                    <button type="button" class="text-gray-900 bg-black hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 mr-2 mb-2">
                        <svg class="w-4 h-4 mr-2 -ml-1 text-[#626890]" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="ethereum" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="currentColor" d="M311.9 260.8L160 353.6 8 260.8 160 0l151.9 260.8zM160 383.4L8 290.6 160 512l152-221.4-152 92.8z"></path></svg>
                        <a id="whiteText">Pay with Ethereum</a>
                    </button>
                </div>
            </div>
        </v-row>

    </v-col>
</template>

<script>
export default {
    name: "myKart",

}
</script>

<style>
#titleTextContainer{
    margin-bottom: 2.5%;
}
#whiteText{
    color: white;
}
#kartCard{
    margin: 1%;
}

</style>