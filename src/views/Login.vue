<template>
    <div class="flex justify-center items-center justify-items-center h-screen p-6">
        <section class="md:w-4/12 shadow-2xl p-3">
            <div class="text-2xl font-bold">
                Login
            </div>
            <form @submit.prevent="login">
                <div class="p-2">
                    <label for="email" class="block">Email</label>
                    <input type="text" name="" id="email" placeholder="Enter email" v-model="user.email"
                        class="border-2 ring-1 rounded-md p-2 w-full"
                    >
                </div>
                <div class="p-2">
                    <label for="password" class="block">Password</label>
                    <input type="password" name="" id="password" placeholder="Enter password" v-model="user.password"
                        class="border-2 ring-1 rounded-md p-2 w-full"
                    >
                </div>
                <div class="p-2">
                    <input type="submit" :value="submitting ? `Please wait` : `Submit`"
                    class="bg-blue-800 p-2 rounded-md text-white cursor-pointer">
                </div>
            </form>
            <div class="text-center">
                Don't have an account? Register <router-link to="/register" class="text-blue-800">here</router-link>
            </div>
        </section>
    </div>
</template>

<script setup>
    import { reactive, ref, computed } from "vue";
    import { useStore } from "vuex"
    import { useRouter } from "vue-router"

    let store = useStore();
    let router = useRouter();

    const user = reactive({
        email: '',
        password: '',
    })

    let submitting = ref(false)

    const login = () => {
        submitting.value = true;
        store.dispatch("auth/login", user).then(
            () => {
                alert('The login was successful');
                setTimeout(() => {
                    router.push("/dashboard");
                }, 200);
            },
            (error) => {
                console.log(error);
                submitting.value = false;
            //   this.message =
            //     (error.response &&
            //       error.response.data &&
            //       error.response.data.message) ||
            //     error.message ||
            //     error.toString();
            }
        );
    }

    const loggedIn = computed( () => store.state?.auth?.user)

    let redirect = loggedIn.value ? 'dashboard' : 'login'
    router.push(`/${redirect}`);

</script>

<style>

</style>