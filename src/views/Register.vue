<template>
    <div class="flex justify-center items-center justify-items-center h-screen p-6">
        <section class="md:w-4/12 shadow-2xl p-3">
            <div class="text-2xl font-bold">
                Register
            </div>
            <form @submit.prevent="register">
                <div class="p-2">
                    <label for="firstName" class="block">First Name</label>
                    <input type="text" name="" id="firstName" placeholder="Enter first name" v-model="user.first_name"
                        class="border-2 ring-1 rounded-md p-2 w-full"
                    >
                </div>
                <div class="p-2">
                    <label for="lastName" class="block">Last Name</label>
                    <input type="text" name="" id="lastName" placeholder="Enter last name" v-model="user.last_name"
                        class="border-2 ring-1 rounded-md p-2 w-full"
                    >
                </div>
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
                Already have an account? Login <router-link to="/login" class="text-blue-800">here</router-link>
            </div>
        </section>
    </div>
</template>

<script setup>
    import { reactive, ref } from "vue";
    import { useStore } from "vuex"
    import { useRouter } from "vue-router"

    let store = useStore();
    let router = useRouter();

    const user = reactive({
        first_name: '',
        last_name: '',
        email: '',
        password: '',
    })

    let submitting = ref(false)

    const register = () => {
        submitting.value = true;
        store.dispatch("auth/register", user).then(
            () => {
                router.push("/dashboard");
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
</script>

<style>

</style>