const axios = require('axios')
axios.get('https://www.freeforexapi.com/api/live?pairs=USDMXN') .then(msg => {
  console.log(msg.data.rates.USDMXN.rate)
})
.catch(err => {
  console.log(err)
});