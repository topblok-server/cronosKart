<template>
<nav id="nav" class="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
        <div class="container flex flex-wrap items-center justify-between mx-auto">
            <div class="flex items-center md:order-2">
                <div class="container flex flex-wrap items-center justify-between mx-auto">
                    <a href="/" class="flex items-center">
                        <img src="https://images.nintendolife.com/3cc5ada6e2600/you-know-his-name.large.jpg" class="h-6 mr-3 sm:h-9" alt="Logo" />
                        <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">cronosKart</span>
                    </a>
                    <div class="flex items-center md:order-2">
                        <!--MAIN MOBILE MENU  -->
                        <v-menu offset-y>
                            <template v-slot:activator="{ on, attrs }">
                                <button v-bind="attrs" v-on="on" data-collapse-toggle="mobile-menu-2" type="button" class="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-2" aria-expanded="false">
                                    <span class="sr-only">Open main menu</span>
                                    <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                                </button>
                            </template>
                            <v-list>
                                <v-list-item>
                                    <v-list-item-title><a href="/" class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Home</a></v-list-item-title>
                                </v-list-item>
                                <v-list-item>
                                    <v-list-item-title><a href="/about" class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</a></v-list-item-title>
                                </v-list-item>
                                <v-list-item>
                                    <v-list-item-title><a href="/roadmap" class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Road Map</a></v-list-item-title>
                                </v-list-item>
                                <v-list-item>
                                    <v-list-item-title><a href="/karts" class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Karts</a></v-list-item-title>
                                </v-list-item>
                                <v-list-item>
                                    <v-tooltip left>
                                        <template v-slot:activator="{ on, attrs }">
                                            <v-btn v-bind="attrs" v-on="on" disabled outlined text tile>Play<v-icon right dark>mdi-play</v-icon></v-btn>
                                        </template>
                                        <span>Coming Soon</span>
                                    </v-tooltip>
                                </v-list-item>
                                <v-list-item>
                                    <v-list-item-title><a href="/vrse" class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">VRSE</a></v-list-item-title>
                                </v-list-item>
                            </v-list>
                        </v-menu>
                    </div>
                    <!-- MAIN MENU -->
                    <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="mobile-menu-2">
                        <ul class="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                            <li>
                                <a href="/" class="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white" aria-current="page">Home</a>
                            </li>
                            <li>
                                <a href="/about" class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</a>
                            </li>
                            <li>
                                <a href="/roadmap" class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Road Map</a>
                            </li>
                            <li>
                                <a href="/karts" class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Karts</a>
                            </li>
                            <li>
                                <v-tooltip bottom>
                                    <template v-slot:activator="{ on, attrs }">
                                        <v-btn v-bind="attrs" v-on="on" outlined text tile>Play<v-icon right dark>mdi-play</v-icon></v-btn>
                                    </template>
                                    <span>Coming Soon</span>
                                </v-tooltip>
                            </li>
                            <li>
                                <a href="/vrse" class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">VRSE</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <!--USER MENU  -->
                <v-btn href="/account" v-if="!loggedIn" outlined text tile>Sign In<v-icon right dark>mdi-account</v-icon></v-btn>
                <v-menu v-if="loggedIn" offset-y>
                    <template v-slot:activator="{ on, attrs }">
                        <button v-bind="attrs" v-on="on" type="button" class="mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
                            <span class="sr-only">Open user menu</span>
                            <img class="w-8 h-8 rounded-full" :src=loginInfo[3] alt="user photo">
                        </button>
                    </template>
                    <div class="px-4 py-3">
                        <span class="block text-sm text-gray-900 dark:text-white">{{ loginInfo[1] }}</span>
                        <span class="block text-sm font-medium text-gray-500 truncate dark:text-gray-400">{{ visibleWallet }}</span>
                    </div>
                    <v-list>
                        <v-list-item>
                            <v-list-item-title><a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Settings</a></v-list-item-title>
                        </v-list-item>
                        <v-list-item>
                            <v-list-item-title><a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Earnings</a></v-list-item-title>
                        </v-list-item>
                        <v-list-item>
                            <v-list-item-title><a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Dashboard</a></v-list-item-title>
                        </v-list-item>
                        <v-list-item>
                            <v-list-item-title @click="logoutUser"><a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</a></v-list-item-title>
                        </v-list-item>
                    </v-list>
                </v-menu>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    name: "navbar",

    data: () => ({
        loginInfo: '',
        visibleWallet: '',
    }),

    created() {
        if($cookies.isKey('loginToken') == true){
            this.loginInfo = $cookies.get('loginToken')
            var length = this.loginInfo[2].length
            var endLength = length - 4;
            var part1 = this.loginInfo[2].substring(0,4)
            var part2 = this.loginInfo[2].substring(endLength, length);
            this.visibleWallet = part1 + '...' + part2;
        }
    },

    methods: {
        logoutUser(){
            $cookies.remove('loginToken')
            location.replace('/');
        },
    },

    props: {
        loggedIn: false,
    },

}
</script>

<style>
#nav{
    margin: auto;
}
</style>