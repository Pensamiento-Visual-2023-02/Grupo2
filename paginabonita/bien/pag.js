const ctx = document.getElementById('doughnut');

  new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: ['Consumo Propio', 'Industria y Minería', 'Transporte', 'Comercial', 'Centros de Transformación'],
      datasets: [{
        label: '% Del Total de Consumo',
        data: [1.75, 18.39, 17.31, 11.56, 50.97],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
