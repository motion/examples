/*
  note: flint/index.html has been edited to include the bootstrap css
*/

import { Button, Modal } from 'react-bootstrap'
const { Header, Title, Footer, Body } = Modal

view Main {
  let active = false
  let close = () => active = false

  <Button onClick={() => active = true}>Say hi!</Button>
  <Modal show={active} onHide={close}>
    <Header>
      <Title>Flint & Bootstrap</Title>
    </Header>

    <Body>enjoy</Body>

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
