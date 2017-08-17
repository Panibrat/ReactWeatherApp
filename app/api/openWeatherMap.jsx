import axios from 'axios';
//ae1e26d3a511f5058a8fc9ff40ffe2ad
//http://api.openweathermap.org/data/2.5/find?q=London&units=metric&appid=ae1e26d3a511f5058a8fc9ff40ffe2ad
//http://api.openweathermap.org/data/2.5/find?q=London&units=metric&appid=ae1e26d3a511f5058a8fc9ff40ffe2ad

module.exports = {
    getTemp: function (location) {
        var encodedLocation = encodeURIComponent(location);
        var requestUrl = `http://api.openweathermap.org/data/2.5/find?q=${encodedLocation}&units=metric&appid=ae1e26d3a511f5058a8fc9ff40ffe2ad`
        console.log(requestUrl);
        return axios.get(requestUrl).then(function (res) {
            //debugger;
            //if (!res.data.cod && res.data.message) {
            if (!res.status == 200) {
                throw new Error('No info');
            } else {
                console.log('RES: ', res);
                //return res.data.main.temp;
                return res.data.list[0].main.temp;
            }
        }, function (res) {
            console.log('Err: ', res.error);
                throw new Error('2---->' + res.data.message);
        });
    }
}

/*

module.exports = {
    getTemp: function (location) {
        return new Promise(function(resolve, reject){
            //resolve(77);
            reject('test REJECT');
        })
    }
}*/
