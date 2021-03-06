$(function(){
  'use strict';
  /** AREA CHART **/
  console.log("HELLO WORLD")
  // var ctx9 = document.getElementById('chartArea1');
  var ctx9 = document.getElementById('chartArea1').getContext('2d');
  var gradient1 = ctx9.createLinearGradient(0, 350, 0, 0);
  gradient1.addColorStop(0, 'rgba(241,0,117,0)');
  gradient1.addColorStop(1, 'rgba(241,0,117,.5)');

  var gradient2 = ctx9.createLinearGradient(0, 280, 0, 0);
  gradient2.addColorStop(0, 'rgba(0,123,255,0)');
  gradient2.addColorStop(1, 'rgba(0,123,255,.3)');

  new Chart(ctx9, {
    type: 'line',
    data: {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      datasets: [{
        data: [40, 35, 44, 28, 34, 37, 32, 20, 25, 15, 25, 10],
        borderColor: '#f10075',
        borderWidth: 1,
        backgroundColor: gradient1
      },
      // {
      //   data: [10, 20, 25, 55, 50, 45, 35, 37, 45, 35, 55, 40],
      //   borderColor: '#007bff',
      //   borderWidth: 1,
      //   backgroundColor: gradient2
      // }
    ]
    },
    options: {
      maintainAspectRatio: false,
      legend: {
        display: false,
          labels: {
            display: false
          }
      },
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero:true,
            fontSize: 10,
            max: 100
          }
        }],
        xAxes: [{
          ticks: {
            beginAtZero:true,
            fontSize: 11
          }
        }]
      }
    }
  });
});


$(function(){
  'use strict';
  /** AREA CHART **/
  console.log("HELLO WORLD")
  // var ctx9 = document.getElementById('chartArea1');
  var ctx9 = document.getElementById('chartArea2').getContext('2d');
  var gradient1 = ctx9.createLinearGradient(0, 350, 0, 0);
  gradient1.addColorStop(0, 'rgba(241,0,117,0)');
  gradient1.addColorStop(1, 'rgba(241,0,117,.5)');

  var gradient2 = ctx9.createLinearGradient(0, 280, 0, 0);
  gradient2.addColorStop(0, 'rgba(0,123,255,0)');
  gradient2.addColorStop(1, 'rgba(0,123,255,.3)');

  new Chart(ctx9, {
    type: 'line',
    data: {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      datasets: [{
        data: [30, 42, 25, 45, 40, 58, 48, 90, 95, 86, 104, 106],
        borderColor: '#007bff',
        borderWidth: 1,
        backgroundColor: gradient2
      },
      // {
      //   data: [10, 20, 25, 55, 50, 45, 35, 37, 45, 35, 55, 40],
      //   borderColor: '#007bff',
      //   borderWidth: 1,
      //   backgroundColor: gradient2
      // }
    ]
    }
    ,
    options: {
      maintainAspectRatio: false,
      legend: {
        display: false,
          labels: {
            display: false
          }
      },
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero:true,
            fontSize: 10,
            max: 150
          }
        }],
        xAxes: [{
          ticks: {
            beginAtZero:true,
            fontSize: 11
          }
        }]
      }
    }
  });
});
