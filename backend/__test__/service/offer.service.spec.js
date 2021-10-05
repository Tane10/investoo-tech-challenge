const offerService = require('../../src/services/offer.service')

const buildOffer = ({
  type = 'crypto',
  name,
  coins = [],
  published = false,
  minDeposit = 0,
  starRating = 100,
  websiteUrl,
  dateFounded,
  emailSupport = false,
  headquarters,
  phoneSupport = false,
  paymentMethods = [],
  liveChatSupport = false,
  restrictedStates = [],
  withdrawalMethods = [],
  languagesSupported = [],
} = {}) => ({
  type,
  offer: {
    name,
    coins,
    published,
    minDeposit,
    starRating,
    websiteUrl,
    dateFounded,
    emailSupport,
    headquarters,
    phoneSupport,
    paymentMethods,
    liveChatSupport,
    restrictedStates,
    withdrawalMethods,
    languagesSupported,
  },
})

describe('Offers Service', () => {
  test('Gets filtered offers', async () => {
    await Promise.all(['test-1', 'test-2'].map((name) => buildOffer({ name })).map(offerService.createOffer))

    const offers = await offerService.getFiltered()
    expect(offers).toHaveLength(2)
  })
})
