

// fully non-Flint

let { div, span } = React.DOM

Flint.view('Main', (view) => {
  view.render(() =>
    div(null,
      span({ style: styles.hello }, 'Hello World'),
      div(null, view.el('JSX'))
    )
  )

  let styles = {
    hello: {
      background: 'red'
    }
  }
})



// Just JSX

Flint.view('JSX', (view) => {
  view.render(() =>
    <div>
      <span style={styles.hello}>JSX Hello World</span>
      <Styled />
    </div>
  )

  let styles = {
    hello: {
      background: '#000',
      color: '#fff'
    }
  }
})



// JSX + Styles

Flint.view('Styled', (view) => {
  view.render(() =>
    <styled>
      <hello>JSX Hello World</hello>
      <ShortHandStyles />
      <Implicit />
    </styled>
  )

  view.styles.hello = () => ({
    background: '#999'
  })
})

// ... or with the style passed in

Flint.view('ShortHandStyles', (view, on, style) => {
  view.render(() => <hello>JSX Hello World</hello>)

  style.hello = () => ({
    background: '#eee'
  })
})



// JS + Implicit render

Flint.view('Implicit', (view, on, style) => {
  <hello>
    Implicit Render, in JS
    <Flint />
  </hello>

  style.hello = () => ({
    background: 'red'
  })
})



// Fully Flint

view Flint {
  <hi>Flint!</hi>

  $hi = {
    background: 'crimson'
  }
}