import logo from '../images/logo.svg';

export default function Header () {
  return (
    <header class="header">
      <img src={logo} alt="text logo around the us" class="header__logo" />
    </header>
  )
}