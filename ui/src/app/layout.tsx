import './globals.css';
import Header from '../components_/layout/header/header';
import Footer from '../components_/layout/footer/footer';
import { ThemeProvider } from '../components_/theme-provider';

const isTestEnvironment = process.env.NODE_ENV === 'test';

const RootLayout = ({
    children
}: {
  children?: React.ReactNode
}) => {
    const content = (
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
        >
            <Header />
            <main>
                {children}
            </main>
            <Footer />
        </ThemeProvider>
    );

    if (isTestEnvironment) {
        return content;
    }

    return (
        <html lang="en">
            <head />
            <body>
                {content}
            </body>
        </html>
    );
};

export default RootLayout;
