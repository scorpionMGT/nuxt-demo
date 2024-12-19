<template>
<div>
  home
</div>
</template>

<script lang="ts" setup>
import { useUserStore } from '~/stores/index'

const userInfo = useUserStore().userInfo
console.log('userInfo', userInfo)
</script>
<style lang='scss' scoped>


</style>