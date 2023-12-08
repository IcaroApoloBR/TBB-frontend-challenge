
import { ReactNode } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

type LayoutInterface = {
    children: ReactNode;
};

const LayoutDefault = ({ children }: LayoutInterface) => {
    return (
        <div>
            <Navbar />
            <main>
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default LayoutDefault;