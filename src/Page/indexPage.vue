<template>
    <button @click="onTrans(1)">base页</button>
</template>

<script setup>
import router from '@/router.js'
const onTrans = (num) => {
    switch (num) {
        case 1:
            router.push({
                name: 'base'
            })
    }
}
</script>

<style scoped>

</style>