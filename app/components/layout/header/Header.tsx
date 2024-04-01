import { getCurrentUser } from '@/access/AuthenticationService';
import Role from '@/access/Role';
import LoginButton from './login_button/LoginButton';
import ColorSchemeToggle from './color_scheme_toggle/ColorSchemeToggle';
/*import HamburgerMenu from './hamburger_menu/HamburgerMenu';*/
import UHBrand from './uh_brand/UHBrand';
import Menu from "@/components/layout/header/header_menu/HeaderMenu";
import AuthMenu from "@/components/layout/header/header_menu/HeaderMenuAuth";

const Header = async () => {
    const currentUser = await getCurrentUser();

    return (
        <header className="border-b border-light-dark-3-4 text-light-dark-3-4">
            <div className="container py-5">
                <div className="flex justify-between items-center">
                    <UHBrand />

                    <div className="hidden sm:flex space-x-1" data-testid="header-links">
                        <Menu/>
                        {currentUser && currentUser.roles.includes(Role.UH) && (
                            <AuthMenu/>
                        )}
                        <LoginButton currentUser={currentUser} />
                        <ColorSchemeToggle />
                    </div>
                    {/* <HamburgerMenu currentUser={currentUser} /> */}
                </div>
            </div>
        </header>
    );
}

export default Header;
