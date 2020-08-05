import React from 'react';
import './Home.css';
import Product from './Product';

function Home() {
  return (
	<div className="home">
		<img className="home__image"
		src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
		alt="Amazon prime background"/>
		{/* Product id, title, price, rating, image*/}
		<div className="home__row">
			<Product 
				id={12321341} 
				title="Samsung Galaxy Tab A 8.0'' 32 GB Wifi Android 9.0 Pie Tablet Black (2019) - SM-T290NZKAXAR"
				price={129.99}
				rating={5}
				image="https://m.media-amazon.com/images/I/41UPtXbP4LL._AC_UY218_.jpg"
			/>
			<Product 
				id={12321342} 
				title="MSI GL65 Leopard 10SFK-062 15.6'' FHD 144Hz 3ms Thin Bezel Gaming Laptop Intel Core i7-10750H RTX2070 16GB 512GB NVMe SSD Win 10"
				price={1339.00}
				rating={5}
				image="https://m.media-amazon.com/images/I/81Mbw6RBtPL._AC_UY218_.jpg"
			/>
		</div>
			<div className="home__row">
				<Product 
					id={12321343} 
					title="ASUS VivoBook 15 Thin and Light Laptop, 15.6” FHD Display, Intel i3-1005G1 CPU, 8GB RAM, 128GB SSD, Backlit Keyboard, Fingerprint, Windows 10 Home in S Mode, Slate Gray, F512JA-AS34"
					price={349.99}
					rating={4}
					image="https://m.media-amazon.com/images/I/81fstJkUlaL._AC_UY218_.jpg"
				/>
				<Product 
					id={12321344} 
					title="Apple iPad (10.2-inch, Wi-Fi, 32GB) - Space Gray (Latest Model)"
					price={319.99}
					rating={4}
					image="https://images-na.ssl-images-amazon.com/images/I/41h0H4SCgPL._AC_US160_.jpg"
				/>
				<Product 
					id={12321345} 
					title="Acer Aspire 5 Slim Laptop, 15.6 inches Full HD IPS Display, AMD Ryzen 3 3200U, Vega 3 Graphics, 4GB DDR4, 128GB SSD, Backlit Keyboard, Windows 10 in S Mode, A515-43-R19L,Silver"
					price={349.99}
					rating={3}
					image="https://m.media-amazon.com/images/I/71vvXGmdKWL._AC_SX236_SY340_FMwebp_QL65_.jpg"
				/>
			</div>
		    <div className="home__row">
				<Product 
					id={12321346} 
					title="Samsung SSD 860 EVO 1TB 2.5 Inch SATA III Internal SSD (MZ-76E1T0B/AM)"
					price={134.99}
					rating={4}
					image="https://images-na.ssl-images-amazon.com/images/I/41qR7C253KL._AC_US160_.jpg"
				/>
			</div>
	</div>
  );
}

export default Home;
