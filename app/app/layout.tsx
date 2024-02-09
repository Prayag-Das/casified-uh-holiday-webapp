import './globals.css';
import Header from '@/components/layout/header/Header';
import Footer from '@/components/layout/footer/Footer';
import {ThemeProvider} from "@/components/theme-provider";
/*import HolidayModal from '@/components/modals/holiday_modal/HolidayModal';

const theme = createTheme({
    primaryColor: 'blue'
});*/
  
const RootLayout = ({
    children
}: {
    children?: React.ReactNode
}) => (
    <html lang="en">
        <head/>
        <body>
            <ThemeProvider
                attribute="class"
                defaultTheme="system"
                enableSystem
                disableTransitionOnChange
            >
                <Header />
                {children}
                <Footer />
            </ThemeProvider>
        </body>
    </html>
);

export default RootLayout;
