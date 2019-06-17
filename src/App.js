import React from 'react';
import ReactDOM from 'react-dom';

import Menu from './Menu';
import Login from './Login';

class App extends React.Component {
  render() {

    const menuItems = [
      { href: "#", title: "Главная" },
      { href: "#", title: "О нас" },
      { href: "#", title: "Услуги" },
      { href: "#", title: "Контакты" },
      { href: "#", title: "Доставка" }
    ]

    return (
      <div>
          <Menu items={menuItems}/>
          <Login/>
      </div>);
  }
}


ReactDOM.render(
    <App/>, document.getElementById('root'));