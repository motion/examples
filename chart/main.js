import Chart from 'chart.js'

view Main {
  let data = {
      labels: ["React", "Angular", "Flint"],
      datasets: [
          {
              label: "My First dataset",
              fillColor: "rgba(220,220,220,0.5)",
              strokeColor: "rgba(220,220,220,0.8)",
              highlightFill: "rgba(220,220,220,0.75)",
              highlightStroke: "rgba(220,220,220,1)",
              data: [20, 12, 85]
          },
      ]
  };

  <h1>Awesomeness</h1>
  <Bar data={data} width={300} height={400} />
}

view Bar {
  let chart = null
  let render = () => {
    if (!chart) return
    let context = chart.getContext('2d')
    new Chart(context).Bar(view.props.data)
  }

  on.change(render)

  // in the new react, ref takes a function that returns the el
  <canvas
    ref={el => chart = el}
    width={view.props.width || 400}
    height={view.props.height || 400}>
  </canvas>
}