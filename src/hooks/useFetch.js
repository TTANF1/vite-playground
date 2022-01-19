import { ref } from 'vue'

export function useFetch(url) {
  const data = ref(null)
  const error = ref(null)
  const isPending = ref(true)

  axios({
    url,
    method: 'get', // or 'post'
    params: {}, // or data: {}
  })
    .then(res => (data.value = res.data))
    .error(err => (error.value = err))
    .finally(() => (isPending.value = false))

  return {
    data,
    error,
    isPending,
  }
}
