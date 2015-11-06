view Main {
  <H1>Hello world!</H1>
  <BigButton onClick={() => alert("welcome!")}>hello</BigButton>
  <br />
  <Text>everything is a view</Text>

  $ = { padding: 20 }
  /* if you apply a style to a view, it's merged with the view's own styles */
  $BigButton = { marginTop: 30, display: 'flex', width: 110 }
  $Text = { marginTop: 50, display: 'flex' }
}