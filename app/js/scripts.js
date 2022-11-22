
$(function () {
    var ctx = document.getElementById("myChart").getContext("2d");
    var json_url = "data.json";

    var myChart = new Chart(ctx, {
        type: 'line',
        data: {
          labels: [],
          datasets: [{
            label: '# of Votes',
            data: [],
            borderWidth: 1,
            borderColor: '#2ccc74',
          }],
    },
    options: {
        responsive: true,
        maintainAspectRatio:false,
        legend: {
            display: false
         },
         tooltips: {
            enabled: false
         },
            scales:
            {
                xAxes: [{
                    gridLines : {
                        drawOnChartArea: false
                    }
                }],
                yAxes: [{
                    display: false,
                }]
            }
    }
       
    });

    ajax_chart(myChart, json_url);

    function ajax_chart(chart, url, data) {
        var data = data || {};

        $.getJSON(url, data).done(function(response) {
            chart.data.labels = response.labels;
            chart.data.datasets[0].data = response.data.quantity; 
            chart.update();
        });
    }
});