Chart.defaults.color = '#000';
var ctx = document.getElementById("barChart").getContext('2d');
  var barChart = new Chart(ctx, {
    type: 'bar',
    title: "Patients ",
    data: {
      labels: ["Jan", "Feb", "March", "Apr", "May", "June" , "Jul" , "Aug", "Sep" , "Nov" , "Dec"],
      datasets: [{
        label: 'patients',
        data: [12, 19, 10, 8, 7, 6 ,14, 19, 6, 7, 12, 13 ],
        backgroundColor:"#003366",
      }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true,
            barwidth: 120,
          }
        }],
        xAxes: [{
            barThickness: 50,
        }]
      }
    },
});
