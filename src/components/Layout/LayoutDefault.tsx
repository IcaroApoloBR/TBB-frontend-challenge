
import { ReactNode } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import '../../styles/globals.scss'

type LayoutInterface = {
    children: ReactNode;
};

const LayoutDefault = ({ children }: LayoutInterface) => {
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