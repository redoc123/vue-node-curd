<template>
    <div>{{JSON.stringify(user)}}</div>
</template>

<script>
import { RepositoryFactory } from '@/repositories/RepositoryFactory'
const UsersRepository = RepositoryFactory.get('users')

export default {
    data(){
        return {
            isLoading: false,
            user: {}
        }
    },
    created(){
        this.get()
    },
    methods: {
        async get(){
            this.isLoading = true
            let {data} =  await UsersRepository.getById(this.$route.params.id)
            this.isLoading = false
            this.user = data
        }
    }
}
</script>

<style>

</style>
