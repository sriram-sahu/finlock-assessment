import {Button, Typography, Container} from '@material-ui/core'
import Cookies from 'js-cookie'

const Home = props => {
  const {loginDetails} = props
  const onClickLogout = () => {
    Cookies.remove('jwt_token')
    loginDetails('logout')
  }
  return (
    <Container
      style={{
        display: 'flex',
        minHeight: '100vh',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Typography variant="h1">Welcome User</Typography>

      <Button color="primary" variant="contained" onClick={onClickLogout}>
        Logout
      </Button>
    </Container>
  )
}

export default Home
