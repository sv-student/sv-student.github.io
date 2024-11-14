// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#292b2c';

// Bar Chart Example
var ctx = document.getElementById("myBarChart");
var myLineChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ["Tiny", "Cute", "Fluffy", "Silly", "Orange", "Poptart"],
    datasets: [{
      label: "Tags",
      backgroundColor: "rgba(2,117,216,1)",
      borderColor: "rgba(2,117,216,1)",
      data: [0, 0, 0, 0, 0, 0],
    }],
  },
  options: {
    scales: {
      xAxes: [{
        time: {
          unit: 'month'
        },
        gridLines: {
          display: false
        },
        ticks: {
          maxTicksLimit: 6
        }
      }],
      yAxes: [{
        ticks: {
          min: 0,
          max: 50,
          maxTicksLimit: 5
        },
        gridLines: {
          display: true
        }
      }],
    },
    legend: {
      display: false
    }
  }
});


window.addEventListener("DOMContentLoaded", async function fetchTagCountsAndUpdateChart() {
  const tags = ["tiny", "cute", "fluffy", "silly", "orange", "poptart"]; 
  const tagCounts = []; 

  try {
      for (const tag of tags) {
          // Fetch the images for the current tag
          const response = await fetch(`https://cataas.com/api/cats?tags=${tag}`);
          const images = await response.json();
          tagCounts.push(images.length); // Use the length of the returned array as the count
      }

      // Update the chart with the fetched data
      myLineChart.data.datasets[0].data = tagCounts;
      myLineChart.update();
  } catch (error) {
      console.error("Failed to fetch data for tags:", error);
  }
});