import React from 'react'
import Cookies from 'js-cookie'
import {
  Grid,
  Paper,
  Avatar,
  TextField,
  Button,
  Typography,
  Link,
  FormControl,
  InputLabel,
  InputAdornment,
  IconButton,
  Input,
} from '@material-ui/core'
import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'

const Login = props => {
  const [showPassword, setShowPassword] = React.useState(false)
  const [email, setEmail] = React.useState('')
  const [emailError, setEmailError] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [passwordError, setPasswordError] = React.useState('')
  const {loginDetails} = props

  const handleClickShowPassword = () => setShowPassword(show => !show)

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    event.preventDefault()
  }

  const onBlurEmail = () => {
    if (email === '') {
      setEmailError('*Enter a Email')
    } else if (!email.includes('.com')) {
      setEmailError('*Enter a Valid Email')
    } else {
      setEmailError('')
    }
  }

  const onChangeEmail = event => {
    setEmail(event.target.value)
    onBlurEmail()
  }

  const onBlurPassword = () => {
    if (password === '') {
      setPasswordError('Enter Password')
    } else if (password.length < 8) {
      setPasswordError('*Password must be 8 characters long')
    } else {
      setPasswordError('')
    }
  }

  const onChangePassword = event => {
    setPassword(event.target.value)
    onBlurPassword()
  }
  const onClickSubmit = () => {
    onBlurPassword()
    onBlurEmail()

    if (password.length > 8 && email.includes('.com')) {
      Cookies.set('jwt_token', 'loginSuccess', {expires: 30})
    }
    loginDetails(true)
  }

  const paperStyle = {
    padding: '50px',
    marginTop: '100px',
    width: 300,
    margin: '20px auto',
  }
  const avatarStyle = {backgroundColor: '#1bbd7e'}
  const btnStyle = {margin: '8px 0'}
  return (
    <Grid
      styles={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
      }}
    >
      <Paper elevation={10} style={paperStyle}>
        <Grid align="center">
          <Avatar style={avatarStyle}>
            <AccountCircleRoundedIcon />
          </Avatar>
          <h2>Welcome</h2>
        </Grid>
        <TextField
          label="Email"
          placeholder="Enter email"
          fullWidth
          required
          value={email}
          onBlur={onBlurEmail}
          onChange={onChangeEmail}
        />
        {emailError !== '' && (
          <Typography style={{color: 'red'}}>{emailError}</Typography>
        )}
        <FormControl sx={{m: 1, width: '25ch'}} variant="standard">
          <InputLabel htmlFor="standard-adornment-password">
            Password
          </InputLabel>
          <Input
            id="standard-adornment-password"
            type={showPassword ? 'text' : 'password'}
            onChange={onChangePassword}
            onBlur={onBlurPassword}
            value={password}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
        {passwordError !== '' && (
          <Typography style={{color: 'red'}}>{passwordError}</Typography>
        )}
        <FormControlLabel
          control={<Checkbox name="checkedB" color="primary" />}
          label="Remember me"
        />
        <Button
          type="submit"
          color="primary"
          variant="contained"
          style={btnStyle}
          fullWidth
          onClick={onClickSubmit}
        >
          Sign in
        </Button>
        <Typography>
          <Link href="/">Forgot password ?</Link>
        </Typography>
      </Paper>
    </Grid>
  )
}

export default Login
