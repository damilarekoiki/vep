<template>
    <div>
        
    </div>
</template>

<script setup>
    import { computed } from "vue"
    import {useStore} from "vuex";
    import { useRouter } from 'vue-router'

    let store = useStore();
    let router = useRouter();

    const loggedIn = computed( () => store.state?.auth?.user)
    
    let redirect = loggedIn.value ? 'dashboard' : 'login'
    router.push(`/${redirect}`);
</script>

<style>

</style>