
import { ReactNode } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import '../../styles/globals.scss'

type LayoutProps = {
    children: ReactNode;
};

const LayoutDefault = ({ children }: LayoutProps) => {
    return (
        <div className="layout-default">
            <Navbar />
            <main>
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default LayoutDefault;