<script setup lang="ts">
// import { useQuery } from '@vue/apollo-composable'
import { useGetMeQuery } from '@/graphql/generated/hooks'

// const { result, loading, error } = useQuery(GET_ROUTES)


const { result, loading, error } = useGetMeQuery()

// 타입 변환
const me = computed(() => result.value?.me)
</script>

<template>
  <div>
    <div v-if="loading">로딩 중...</div>
    <div v-else-if="error">에러: {{ error.message }}</div>
    <!-- <div v-else class="grid gap-4">
      <div v-for="route in routes" :key="route.id" class="border p-4 rounded">
        <h2 class="text-xl font-bold">{{ route.title }}</h2>
        <p>{{ route.description }}</p>
      </div>
    </div> -->
    <div>{{ me?.email }}</div>
    <div>{{ result?.me?.id }}</div>
  </div>
</template>
