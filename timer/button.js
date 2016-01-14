view Button {
  prop children
  prop disabled = false

  <div root yield />

  $ = {
    cursor: 'pointer',
    opacity: disabled ? .3 : 1,
    marginLeft: 16,
    ':hover': {
      borderColor: disabled ? 'none' : '#737373'
    },
    width: 50,
    height: 50,
    color: 'black',
    background: 'transparent',
    borderRadius: '50%',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: disabled ? '#ccc' : 'black',
    padding: 16,
    position: 'relative',
    transition: 'all 300ms ease-in',
    userSelect: 'none',
    outline: 'none',
  }
}
