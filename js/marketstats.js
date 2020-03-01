window.onload = function() {
    const http_avex = new XMLHttpRequest();
    const url_avex = 'https://avex.exchange/publicdata/price/?primary=aio&secondary=btc';
    http_avex.open("GET", url_avex);
    http_avex.send();

    const http_btc = new XMLHttpRequest();
    const url_btc = 'https://blockchain.info/ticker';
    http_btc.open("GET", url_btc);

    http_avex.onreadystatechange = (e) => {
        if (http_avex.readyState == 4 && http_avex.status == 200) {
            res = JSON.parse(http_avex.responseText);
            if (res.status == "success") {
                btcprice = res.price;
                document.getElementById("vol").innerText = res.volume_primary;
                document.getElementById("pricebtc").innerText = btcprice;
                document.getElementById("graph").src = "https://avex.exchange/chart/?primary=aio&secondary=btc";
                http_btc.send();
            }
        }
    }

    http_btc.onreadystatechange = (e) => {
        if (http_btc.readyState == 4 && http_btc.status == 200) {
            res = JSON.parse(http_btc.responseText);
            document.getElementById("pricegbp").innerText = res.GBP.buy * btcprice;
        }
    }
}
