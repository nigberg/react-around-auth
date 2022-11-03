import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Login({ loggedIn, isWaiting, onSubmit, history }) {
  const [inputs, setInputs] = useState({})
  const [errors, setErrors] = useState({})
  const [valid, setValid] = useState(false)

  const handleSubmit = (evt) => {
    evt.preventDefault()
    onSubmit({
      email: inputs.email,
      password: inputs.password,
    })    
  }
  const handleInputChange = (evt) => {
    setInputs({
      ...inputs,
      [evt.target.name]: evt.target.value,
    })
    setErrors({
      ...errors,
      [evt.target.name]: evt.target.validationMessage,
    })
  }

  useEffect(() => {
    setValid(
      inputs.email && inputs.password && !errors.email && !errors.password,
    )
  }, [inputs, errors])

  useEffect(() => {
    setErrors({})
    setInputs({})
    setValid(false)
  }, [loggedIn])

  return (
    <div className="sign">
      <h2 className="sign__title">Log in</h2>
      <div className="sign__container">
        <form className="form sign__form" onSubmit={handleSubmit} name="signin">
          <div className="form__field">
            <input
              type="email"
              minLength="2"
              maxLength="100"
              required
              className="form__input sign__form-input"
              name="email"
              placeholder="Enter your email"
              value={inputs.email || ''}
              onChange={handleInputChange}
            />
            <span
              className={`form__input-error ${
                valid ? '' : 'form__input-error_active'
              }`}
            >
              {valid ? '' : errors.email}
            </span>
          </div>
          <div className="form__field">
            <input
              type="password"
              minLength="8"
              maxLength="200"
              required
              className="form__input sign__form-input"
              name="password"
              placeholder="Enter your password"
              value={inputs.password || ''}
              onChange={handleInputChange}
            />
            <span
              className={`form__input-error ${
                valid ? '' : 'form__input-error_active'
              }`}
            >
              {valid ? '' : errors.password}
            </span>
          </div>
          <button
            disabled={!valid}
            type="submit"
            className={`sign__submit-button form__submit-button ${
              valid ? '' : 'form__submit-button_inactive'
            }`}
          >
            {isWaiting ? 'Logging you in securely...' : 'Log in'}
          </button>
        </form>
        <div className="sign__footer">
          <Link to="/signup" className="sign__footer-link">
            Not a member yet? Sign up here!
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Login
