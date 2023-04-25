import { SSRProvider } from 'react-bootstrap';
import type { AppProps } from 'next/app';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css';
import Layout from '@/components/layout/Layout';
import HolidaysTable from "@/components/tables/holidays_table/HolidaysTable";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <SSRProvider>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </SSRProvider>
    );
}

export default MyApp
