/*
  Because React Select doesn't use styles internally,
  we copied CSS from the project into .flint/static/main.css
*/

import Select from 'react-select'

let options = [
  { value: 'one', label: 'One' },
  { value: 'two', label: 'Two' },
  { value: 'three', label: 'Two' },
];

let logChange = val => console.log(`Selected: ${val}`)

view Main {
  <holder>
    <Select value="one" options={options} onChange={logChange} />
    <br />
    <Select value="two" options={options} onChange={logChange} />
    <br />
    <Select value="three" options={options} onChange={logChange} />
  </holder>

  $ = { padding: 127 }

  // Select defaults to full width
  $holder = { width: 200, }
}
