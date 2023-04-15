
<template>
    
    <section class="container mx-auto my-auto">
        <div class="flex flex-col items-center justify-center px-6 py-8">
            <a href="#" class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                <img class="w-8 h-8 mr-2" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" alt="logo">
                Chatbot    
            </a>
            <div class="field_container">
                <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <h1 class="header">
                        Sign in to your account
                    </h1>
                    <form class="space-y-4 md:space-y-6" action="#" @submit.prevent="login">
                        <div>
                            <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                            <input type="email" name="email" id="email" class="email_input" placeholder="name@company.com" required="" v-model="loginData.email">
                        </div>
                        <div>
                            <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                            <input type="password" name="password" id="password" placeholder="••••••••" class="password_input" required="" v-model="loginData.password">
                        </div>
                        <div class="flex items-center justify-between">
                            <div class="flex items-start">
                                <div class="flex items-center h-5">
                                    <input id="remember" aria-describedby="remember" type="checkbox" class="remember_me_checkbox" required="">
                                </div>
                                <div class="ml-3 text-sm">
                                    <label for="remember" class="text-gray-500 dark:text-gray-300">Remember me</label>
                                </div>
                            </div>
                            <a href="#" class="forgot_password">Forgot password?</a>
                        </div>

                        <button type="submit" class="sign_in_button">Sign in</button>
                        
                        <p class="dont_have_account_yet">
                            Don’t have an account yet? <a href="#">Sign up</a>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    </section>
</template>

<script src="./Login.js">
</script>

<style lang="scss" src="./Login.scss" scoped></style>