<template>
    <div class="flex flex-col h-screen">
        <nav
            class="flex items-center justify-between flex-wrap bg-red-700 p-6"
        >
            <div class="flex items-center flex-shrink-0 text-white mr-6">
                <img src="../../../../public/files/images/download.png" class="mr-2" width="40" alt="" srcset="">
                <router-link to="/" class="font-normal text-xl tracking-tight"
                    >SPARTA / SPARTU</router-link
                >
            </div>
            <div class="block lg:hidden">
                <button
                    class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white"
                >
                    <svg
                        class="fill-current h-3 w-3"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <title>Menu</title>
                        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                    </svg>
                </button>
            </div>

            <div
                class="w-full block flex-grow lg:flex lg:items-center lg:w-auto"
            >
                <div class="text-sm lg:flex-grow">
                    <router-link
                        to="/faqs"
                        class="block mt-4 lg:inline-block lg:mt-0 text-gray-100 hover:text-white mr-4"
                        >FAQS</router-link
                    >
                    <router-link
                        to="/admin_login"
                        class="block mt-4 lg:inline-block lg:mt-0 text-gray-100 hover:text-white mr-4"
                        >{{auth ? 'Home' : 'Admin Login'}}</router-link
                    >
                    <router-link
                        v-if="auth"
                        to="/qanda"
                        class="block mt-4 lg:inline-block lg:mt-0 text-gray-100 hover:text-white mr-4"
                        >Add Qanda</router-link
                    >
                    
                </div>

                <div v-if="auth">
                    <button
                        type="button"
                        @click="logout"
                        class=" bg-red-700 hover:bg-red-800 text-slate-100 font-bold py-2 px-4 rounded mr-2;"
                    >
                        Logout
                    </button>
                </div>
                <div v-else></div>
            </div>
        </nav>

        <div class="flex-grow bg-slate-100">
            <RouterView />
        </div>
    </div>
</template>

<script src="./Home.js"></script>
