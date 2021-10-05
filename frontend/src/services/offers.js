import axios from 'axios'

const BASE_URL = process.env.VUE_APP_OFFERS_API_ENDPOINT

export default {
  async getFilteredOffers(params = {}) {
    const response = await axios.get(`${BASE_URL}/api/v1/public/offers`, {
      method: 'get',
      params,
    })

    return response.data
  },
}
