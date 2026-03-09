import React from 'react';
import { CartIcon } from '../../components/cart/CartIcon';
import { ProfileDropdown } from '../../components/navigation/ProfileDropdown';
import '../../styles/style.css';
import Logo from '../../components/layout/Logo';

export function Header({ cartCount, username }) {
  return (
    <header className="header">
      <div className="header-content">
        <Logo />
        <div className="header-actions">
          <CartIcon count={cartCount} />
          <ProfileDropdown username={username} />
        </div>
      </div>
    </header>
  );
}