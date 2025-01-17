import { Outlet } from 'react-router-dom';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import styles from './Layout.module.css';

const Layout: React.FC = () => {
	return (
		<>
			<Header />
			<main className={styles.main}>
				<section className={styles.section}>
					<Outlet />
				</section>
			</main>
			<Footer />
		</>
	);
};

export default Layout;
