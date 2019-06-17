import React from 'react';

class Menu extends React.Component {
    render() {
        const items = this.props.items.map((item, index) => {
          return <li key={index}><a href={item.href}>{item.title}</a></li>;
        })
    
        return (
            <nav className="header">
                <ul className="navigation__menu">
                    {items}
                </ul>
            </nav>
        );
      }
}

export default Menu;