<template>
    <div class="w-screen h-screen flex text-white ">
        <!-- Sidebar -->
        <div class="w-52 h-screen bg-gray-900">
            <div class="h-14 bg-gray-900">
                <h1 class="font-bold text-xl mx-1">Admin Dashboard</h1>
            </div>
            <div class="h-full bg-gray-700 flex flex-col gap-2 p-4">
                 <router-link to="/home"
                    class="inline-flex relative items-center p-2 w-full text-sm font-medium rounded-md border-gray-200 hover:bg-gray-200 hover:text-gray-800  transition duration-400 ease-in-out">
                    <svg aria-hidden="true" class="mr-2 w-[25px] h-[25px] fill-current" fill="currentColor"
                        viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd"
                            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                            clip-rule="evenodd"></path>
                    </svg>
                    Home
                </router-link>
                <router-link to="/home"
                    class="inline-flex relative items-center p-2 w-full text-sm font-medium rounded-md border-gray-200 hover:bg-gray-200 hover:text-gray-800  transition duration-400 ease-in-out">
                    <svg aria-hidden="true" class="mr-2 w-[25px] h-[25px] fill-current" fill="currentColor"
                        viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd"
                            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                            clip-rule="evenodd"></path>
                    </svg>
                    Profile
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

