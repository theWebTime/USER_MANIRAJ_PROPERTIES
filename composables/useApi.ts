import axios from 'axios'

export const api = () => {
  const baseURL = useRuntimeConfig().public.API_BASE_URL;
//   const storeUser = useStoreUser()

  return axios.create({
    baseURL,
    headers: {
      Authorization: `Bearer dvdfvdfvdf`
    }
  })
}