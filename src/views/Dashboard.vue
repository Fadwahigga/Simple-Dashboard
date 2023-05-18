<template>
    <div class="w-screen h-screen flex text-white ">
        <!-- Sidebar -->
        <div class="w-52 h-screen bg-gray-900">
            <div class="h-14 bg-gray-900">
                <h1 class="font-bold text-xl mx-1">Admin Dashboard</h1>
            </div>
            <div class="h-full bg-gray-700 flex flex-col gap-4 p-4">
                <router-link to="/home"
                    class="inline-flex relative items-center p-2 w-full text-sm font-medium rounded-md border-gray-200 hover:bg-gray-200 hover:text-gray-800  transition duration-400 ease-in-out">
                    <svg aria-hidden="true" class="mr-2 w-6 h-6 fill-current" fill="currentColor"
                        viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd"
                            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                            clip-rule="evenodd"></path>
                    </svg>
                    Home
                </router-link>
                <router-link to="/profile"
                    class="inline-flex relative items-center p-2 w-full text-sm font-medium rounded-md border-gray-200 hover:bg-gray-200 hover:text-gray-800  transition duration-400 ease-in-out">
                    <svg aria-hidden="true" class="mr-2 w-6 h-6 fill-current" fill="currentColor"
                        viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z">
                        </path>
                    </svg>
                    Profile
                </router-link>
                <router-link to="/home"
                    class="inline-flex relative items-center p-2 w-full text-sm font-medium rounded-md border-gray-200 hover:bg-gray-200 hover:text-gray-800  transition duration-400 ease-in-out">
                    <svg aria-hidden="true" class="mr-2 w-6 h-6 fill-current" fill="currentColor"
                        viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd"
                            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                            clip-rule="evenodd"></path>
                    </svg>
                    Messages
                </router-link>
                <router-link to="/home"
                    class="inline-flex relative items-center p-2 w-full text-sm font-medium rounded-md border-gray-200 hover:bg-gray-200 hover:text-gray-800  transition duration-400 ease-in-out">
                    <svg aria-hidden="true" class="mr-2 w-6 h-6 fill-current" fill="currentColor"
                        viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd"
                            d="M2 9.5A3.5 3.5 0 005.5 13H9v2.586l-1.293-1.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 15.586V13h2.5a4.5 4.5 0 10-.616-8.958 4.002 4.002 0 10-7.753 1.977A3.5 3.5 0 002 9.5zm9 3.5H9V8a1 1 0 012 0v5z"
                            clip-rule="evenodd"></path>
                    </svg>
                    Download
                </router-link>

            </div>
        </div>
        <!-- main -->
        <div class="w-full h-full bg-gray-500">
            <div class="h-14 bg-gray-900">Header sidebar</div>
            <div class="h-full bg-white"></div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

