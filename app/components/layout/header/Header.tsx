/*
import { getCurrentUser } from '@/access/AuthenticationService';
import { Container, Group } from '@mantine/core';
import LoginButton.ts from './login_button/LoginButton.ts';
import Role from '@/access/Role';
import ColorSchemeToggle from './color_scheme_toggle/ColorSchemeToggle';
import CampusDropdown from './campus_dropdown/CampusDropdownMenu';
import HamburgerMenu from './hamburger_menu/HamburgerMenu';
import UHBrand from './uh_brand/UHBrand';
import Link from 'next/link';

const Header = async () => {
    const currentUser = await getCurrentUser();

    return ( 
        <header className="border-b-[1px] text-light-dark-3-4">
            <Container py={5}>
                <Group justify="space-between">
                    <UHBrand />

                    <Group visibleFrom="sm" data-testid="header-links">
                        <Link className="link" href="/">Home</Link>
                        {currentUser.roles.includes(Role.UH) 
                            && <Link className="link" href="/contact">Contact</Link>}
                        <Link className="link" href="/about">About</Link>
                        <CampusDropdown />
                        <LoginButton.ts currentUser={currentUser} />
                        <ColorSchemeToggle />
                    </Group>

                    <HamburgerMenu currentUser={currentUser} />
                </Group>
            </Container>
        </header>
    );
}
 
export default Header;
*/

import { getCurrentUser } from '@/access/AuthenticationService';
import LoginButton from './login_button/LoginButton';
import Role from '@/access/Role';
import ColorSchemeToggle from './color_scheme_toggle/ColorSchemeToggle';
import CampusDropdown from './campus_dropdown/CampusDropdownMenu';
import HamburgerMenu from './hamburger_menu/HamburgerMenu';
import UHBrand from './uh_brand/UHBrand';
import Link from 'next/link';

const Header = async () => {
    const currentUser = await getCurrentUser();

    return (
        <header className="border-b border-light-dark-3-4 text-light-dark-3-4">
            <div className="container py-5">
                <div className="flex justify-between items-center">
                    <UHBrand />

                    <div className="hidden sm:flex" data-testid="header-links">
                        <Link href="/" className="link">Home</Link>
                        {currentUser && currentUser.roles.includes(Role.UH) && (
                            <Link href="/contact" className="link">Contact</Link>
                        )}
                        <Link href="/about" className="link">About</Link>
                        <CampusDropdown />
                        <LoginButton currentUser={currentUser} />
                        <ColorSchemeToggle />
                    </div>

                    <HamburgerMenu currentUser={currentUser} />
                </div>
            </div>
        </header>
    );
}

export default Header;
