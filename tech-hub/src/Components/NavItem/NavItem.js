import React from 'react';

const NavItem = ({ link, texto }) => {
  return (
    <li className="nav-item">
      <a className="nav-link" href={link}>
        {texto}
      </a>
    </li>
  );
};

export default NavItem;