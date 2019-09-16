
   //chart.js scirpt
var ctx = document.getElementById('myChart3');
var myChart = new Chart(ctx, {
    type: 'horizontalBar',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 7, 3],
            backgroundColor: [
                'rgba(54, 162, 235, 0.9)',
                'rgba(54, 162, 235, 0.9)',
                'rgba(54, 162, 235, 0.9)',
                'rgba(54, 162, 235, 0.9)',
                'rgba(54, 162, 235, 0.9)',
                'rgba(54, 162, 235, 0.9)'
            ],
            borderColor: [
                'rgba(54, 162, 235, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(54, 162, 235, 1)',
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});


new Chart(document.getElementById("line-chart"), {
  type: 'line',
  data: {
    labels: [1,1,1,1,1,1,1,1,1,2],
    datasets: [{ 
        data: [86,114,2000,2111,1500,1789,400,221,783,2478],
        label: "Africa",
        borderColor: "#3e95cd",
        fill: false
      },  
    ]
  },
  options: {
    maintainAspectRatio: false,
    title: {
      display: true,
      text: 'World population per region (in millions)'
    }
  }
});


var ctx = document.getElementById('myChart2');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
            'rgba(54, 162, 235, 0.9)',
                'rgba(54, 162, 235, 0.9)',
                'rgba(54, 162, 235, 0.9)',
                'rgba(54, 162, 235, 0.9)',
                'rgba(54, 162, 235, 0.9)',
                'rgba(54, 162, 235, 0.9)'
            ],
            borderColor: [
            'rgba(54, 162, 235, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(54, 162, 235, 1)',
            ],
            borderWidth: 1
        }]
    },
    options: {
        maintainAspectRatio: false,
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});

  
