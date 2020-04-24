var chart = {
    init: function () {
        this.initData();
    },
    initData: function () {
        this.initBar();
        this.initLine();
        this.initPie();
        this.initArea();
    },
    initBar: function () {

        var countrys = ["YUG", "UZB", "USA", "URS", "TCH", "SWE", "SVK", "SUI", "SLO", "RUS", "POL", "NZL", "NOR", "NED", "LUX", "LIE", "KAZ", "JPN", "ITA", "GER", "GDR", "GBR", "FRG", "FRA", "FIN", "EUN", "EUA", "EST", "ESP", "CZE", "CRO", "CHN", "CAN", "BUL", "BLR", "AUT", "AUS", "UKR", "PRK", "KOR", "HUN", "BEL", "LAT", "DEN", "ROU"];
        var skiingData = ["7", "1", "98", "116", "22", "146", "1", "101", "17", "60", "13", "1", "297", "1", "2", "9", "4", "35", "94", "108", "24", "1", "18", "80", "206", "13", "9", "7", "2", "15", "10", "8", "40", "1", "6", "198", "10", "0", "0", "0", "0", "0", "0", "0", "0"];
        var skatingData = ["0", "0", "179", "104", "5", "20", "0", "3", "0", "79", "13", "0", "83", "121", "0", "0", "2", "28", "31", "54", "43", "11", "8", "18", "26", "13", "7", "0", "0", "5", "0", "69", "159", "3", "1", "31", "5", "3", "2", "87", "12", "4", "0", "0", "0"];
        var lugeData = ["0", "0", "9", "7", "0", "0", "0", "0", "0", "6", "0", "0", "0", "0", "0", "0", "0", "0", "24", "42", "37", "0", "14", "0", "0", "0", "5", "0", "0", "0", "0", "0", "0", "0", "0", "27", "0", "0", "0", "0", "0", "0", "9", "0", "0"];
        var iceData = ["0", "0", "269", "168", "131", "218", "0", "50", "0", "46", "0", "0", "0", "0", "0", "0", "0", "0", "0", "10", "0", "24", "18", "0", "181", "23", "0", "0", "0", "47", "0", "0", "351", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0"];
        var curlingData = ["0", "0", "5", "0", "0", "33", "0", "25", "0", "0", "0", "0", "15", "0", "0", "0", "0", "0", "0", "0", "0", "23", "0", "6", "5", "0", "0", "0", "0", "0", "0", "5", "50", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "5", "0"];
        var bobsleighData = ["0", "0", "93", "8", "0", "0", "0", "101", "0", "15", "0", "0", "0", "0", "0", "0", "0", "0", "33", "66", "38", "20", "22", "4", "0", "0", "0", "0", "0", "0", "0", "0", "22", "0", "0", "13", "0", "0", "0", "0", "0", "9", "6", "0", "2"];
        var biathlonData = ["0", "0", "0", "37", "0", "16", "4", "5", "1", "57", "1", "0", "62", "0", "0", "0", "1", "0", "10", "80", "20", "0", "14", "44", "16", "11", "0", "0", "0", "8", "1", "0", "3", "2", "8", "11", "0", "8", "0", "0", "0", "0", "0", "0", "0"];
        var barChartData = {
            labels: countrys,
            datasets: [{
                label: 'Skiing',
                backgroundColor: window.chartColors.red,
                stack: 'Stack 0',
                data: skiingData
            }, {
                label: 'Skating',
                backgroundColor: window.chartColors.blue,
                stack: 'Stack 0',
                data: skatingData
            }, {
                label: 'Luge',
                backgroundColor: window.chartColors.green,
                stack: 'Stack 1',
                data: lugeData
            }, {
                label: 'Ice Hockey',
                backgroundColor: window.chartColors.yellow,
                stack: 'Stack 1',
                data: iceData
            }, {
                label: 'Curling',
                backgroundColor: window.chartColors.blue,
                stack: 'Stack 1',
                data: curlingData
            }, {
                label: 'Bobsleigh',
                backgroundColor: window.chartColors.purple,
                stack: 'Stack 1',
                data: bobsleighData
            }, {
                label: 'Biathlon',
                backgroundColor: window.chartColors.grey,
                stack: 'Stack 1',
                data: biathlonData
            }]

        };
        window.onload = function () {
            var ctx = document.getElementById('countryTotalRecordBar').getContext('2d');
            window.myBar = new Chart(ctx, {
                type: 'bar',
                data: barChartData,
                options: {
                    title: {
                        display: true,
                        text: 'Country Sport'
                    },
                    tooltips: {
                        mode: 'index',
                        intersect: false
                    },
                    responsive: true,
                    scales: {
                        xAxes: [{
                            stacked: true,
                        }],
                        yAxes: [{
                            stacked: true
                        }]
                    }
                }
            });
        };
    },
    initLine: function () {
        var countrys = ["AUS", "AUT", "BEL", "BLR", "BUL", "CAN", "CHN", "CRO", "CZE", "DEN", "ESP", "EST", "EUA", "EUN", "FIN", "FRA", "FRG", "GBR", "GDR", "GER", "HUN", "ITA", "JPN", "KAZ", "KOR", "LAT", "LIE", "LUX", "NED", "NOR", "NZL", "POL", "PRK", "ROU", "RUS", "SLO", "SUI", "SVK", "SWE", "TCH", "UKR", "URS", "USA", "UZB", "YUG"];
        var records = ["15", "280", "13", "15", "6", "625", "82", "11", "75", "5", "2", "7", "21", "60", "434", "152", "94", "79", "162", "360", "12", "192", "63", "7", "87", "15", "9", "2", "122", "457", "1", "27", "2", "2", "263", "18", "285", "5", "433", "158", "11", "440", "653", "1", "7",];
        var config = {
            type: 'line',
            data: {
                labels: countrys,
                datasets: [{
                    label: 'Number',
                    backgroundColor: window.chartColors.red,
                    borderColor: window.chartColors.red,
                    data: records,
                    fill: false,
                }]
            },
            options: {
                responsive: true,
                title: {
                    display: true,
                    text: 'Country Medal'
                },
                tooltips: {
                    mode: 'index',
                    intersect: false,
                },
                hover: {
                    mode: 'nearest',
                    intersect: true
                },
                scales: {
                    xAxes: [{
                        display: true,
                        scaleLabel: {
                            display: true,
                            labelString: 'Number'
                        }
                    }],
                    yAxes: [{
                        display: true,
                        scaleLabel: {
                            display: true,
                            labelString: 'Country'
                        }
                    }]
                }
            }
        };
        var ctx = document.getElementById('countryTotalRecord').getContext('2d');
        window.myLine = new Chart(ctx, config);
    },
    initPie: function () {
        var sports = ["Biathlon", "Bobsleigh", "Curling", "Ice Hockey", "Luge", "Skating", "Skiing"];
        var records = ["420", "452", "172", "1536", "180", "1229", "1781"];
        var configPie = {
            type: 'pie',
            data: {
                datasets: [{
                    data: records,
                    backgroundColor: [
                        window.chartColors.red,
                        window.chartColors.orange,
                        window.chartColors.yellow,
                        window.chartColors.green,
                        window.chartColors.blue,
                        window.chartColors.purple,
                        window.chartColors.grey,
                    ],
                }],
                labels: sports
            },
            options: {
                responsive: true
            }
        };

        var ctxPie = document.getElementById('countryTotalRecordPie').getContext('2d');
        window.myPie = new Chart(ctxPie, configPie);
    },
    initArea: function () {
        var countrys = ["AUS", "AUT", "BEL", "BLR", "BUL", "CAN", "CHN", "CRO", "CZE", "DEN", "ESP", "EST", "EUA", "EUN", "FIN", "FRA", "FRG", "GBR", "GDR", "GER", "HUN", "ITA", "JPN", "KAZ", "KOR", "LAT", "LIE", "LUX", "NED", "NOR", "NZL", "POL", "PRK", "ROU", "RUS", "SLO", "SUI", "SVK", "SWE", "TCH", "UKR", "URS", "USA", "UZB", "YUG"];
        var silverData = ["5", "79", "2", "6", "1", "315", "16", "4", "28", "", "1", "4", "8", "36", "66", "36", "23", "34", "58", "137", "", "58", "17", "1", "51", "", "2", "", "42", "159", "", "6", "", "", "94", "2", "76", "2", "127", "2", "5", "250", "167", "1", ""];
        var goldData = ["3", "98", "4", "4", "2", "203", "30", "6", "12", "5", "", "2", "8", "10", "147", "35", "24", "11", "50", "126", "4", "57", "22", "3", "26", "8", "2", "2", "38", "171", "1", "10", "1", "", "90", "4", "77", "2", "129", "80", "1", "97", "319", "", "6"];
        var bronzeData = ["7", "103", "7", "5", "3", "107", "36", "1", "35", "", "1", "1", "5", "14", "221", "81", "47", "34", "54", "97", "8", "77", "24", "3", "10", "7", "5", "", "42", "127", "", "11", "1", "2", "79", "12", "132", "1", "177", "76", "5", "93", "167", "", "1"];

        var options = {
            type: 'line',
            data: {
                labels: countrys,
                datasets: [{
                    backgroundColor: window.chartColors.red,
                    borderColor: window.chartColors.red,
                    data: goldData,
                    label: 'Gold'
                }, {
                    backgroundColor: window.chartColors.orange,
                    borderColor: window.chartColors.orange,
                    data: silverData,
                    label: 'Silver',
                    fill: '-1'
                }, {
                    backgroundColor: window.chartColors.yellow,
                    borderColor: window.chartColors.yellow,
                    data: bronzeData,
                    label: 'Bronze',
                    fill: 1
                }]
            },
            maintainAspectRatio: false,
            spanGaps: false,
            elements: {
                line: {
                    tension: 0.000001
                }
            },
            scales: {
                yAxes: [{
                    stacked: true
                }]
            },
            plugins: {
                filler: {
                    propagate: false
                },
                'samples-filler-analyser': {
                    target: 'chart-analyser'
                }
            }
        };

        var ctx = document.getElementById('countryTotalRecordLine').getContext('2d');
        window.areaLine = new Chart(ctx, options);
    }
}

chart.init();
