/*
  note: flint/index.html has been edited to include the bootstrap css
*/

import Button from 'react-bootstrap/lib/Button';
/*
  Flint does not currently allow importing nested variables
  such as <Modal.Header> so here we deeply destructure
*/
import { Header, Dialog, Title, Body, Footer } from 'react-bootstrap/lib/Modal';

view Main {
  let hi = false

  <Button onClick={() => hi = true}>Say hi!</Button>
  <Dialog if={hi}>
    <Header>
      <Title>hello</Title>
    </Header>

    <Body>
      <msg>Welcome</msg>
    </Body>

    <Footer>
      <Button onClick={() => hi = false}>Close</Button>
    </Footer>
  </Dialog>

  $ = {
    padding: 40,
  }

  $msg = {
    fontSize: 24
  }
}
