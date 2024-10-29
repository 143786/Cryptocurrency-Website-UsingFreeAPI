"use strict";

let settings = {
  async: true,
  scrossDomain: true,
  url: "https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,DGC&tsyms=USD&api_key=5e680125c76bc23a2606b7f4891982481c39dc6dac5cc4ad33ddeb861dc106d1",
  method: "GET",
  headers: {},
};
$.ajax(settings).done(function (response) {
  console.log(response);
});
