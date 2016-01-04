/*
  note: flint/index.html has been edited to include the bootstrap css
*/

import Button from 'react-bootstrap/lib/Button';
/*
  Flint does not currently allow importing nested variables
  such as <Modal.Header> so here we deeply destructure
*/
import Modal, { Header, Title, Body, Footer } from 'react-bootstrap/lib/Modal';

view Main {
  let active = false
  let close = () => active = false

  <Button onClick={() => active = true}>Say hi!</Button>
  <Modal show={active} onHide={close}>
    <Header closeButton>
      <Title>Welcome to Flint</Title>
    </Header>

    <Body>and bootstrap!</Body>

    <Footer>
      <Button onClick={close}>Close</Button>
    </Footer>
  </Modal>

  $ = {
    padding: 40,
  }

  $msg = {
    fontSize: 24
  }
}
