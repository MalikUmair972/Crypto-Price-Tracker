async function cryptoApi() {
    const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum&vs_currencies=usd')
    const data = await response.json()
    console.log(data)

    document.getElementById('bit').textContent = `Bitcoin: $${data.bitcoin.usd}`
    document.getElementById('eth').textContent = `Ethereum: $${data.ethereum.usd}`
}
cryptoApi()