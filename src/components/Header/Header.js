import React from 'react';

// IMAGE LOGO
import Logo from '../../assets/img/logo.png';
import User from '../../assets/img/user.jpg';

// COMPONENTS
import Container from '../Container/Container';
import Button from '../Button/Button';
import SvgIcon from '../SgvIcon/SvgIcon';
import Nav from '../Nav/Nav';
import SpanNotif from '../SpanNotif/SpanNotif';
import Form from '../Form/Form';
import Input from '../Input/Input';

const Header = () => (
  <header className="header">
    <img src={Logo} alt="logo" className="logo" />
    <Form>
      <Input className="search__input" placeholder="Search hotels" />

      <Button className="search__button">
        <SvgIcon className="search__icon" icon="magnifying-glass" />
      </Button>
    </Form>

    <Nav className="user-nav">
      <Container className="user-nav__icon-box">
        <SvgIcon className="user-nav__icon" icon="bookmark" />
        <SpanNotif className="user-nav__notification" notif="7" />
      </Container>

      <Container className="user-nav__icon-box">
        <SvgIcon className="user-nav__icon" icon="chat" />
        <SpanNotif className="user-nav__notification" notif="13" />
      </Container>
      <Container className="user-nav__user">
        <img src={User} alt="User pic" className="user-nav__user-photo" />
        <SpanNotif className="user-nav__user-name" notif="Jonas " />
      </Container>
    </Nav>
  </header>
);

export { Header as default };
