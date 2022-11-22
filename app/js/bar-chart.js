

    import Chart from 'chart.js/auto'

  const ctx = document.getElementById('bar-chart');

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Orange'],
      datasets: [{
        label: ' ',
        data: [70,100],
        borderWidth: 1
      }]
    },
    options: {
        responsive: true,
        maintainAspectRatio:false,
        plugins: {
                legend: {
                display: false
                        }
            },
            labels: {
                display: false,
            },
    scales: {
      y: {
        display: false,
        beginAtZero: true
      },
      x:{
                display:false,
              },

xAxes: [{
    barThickness: 2, 
        maxBarThickness: 1 ,
        }],

    }
  }
});
