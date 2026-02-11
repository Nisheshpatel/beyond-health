import { Head, Html, Main, NextScript } from 'next/document'
import Script from 'next/script'

const Document = () => {
	return (
		<Html lang="en">
			<Head>
				{/* Google Tag Manager */}
				<script
					dangerouslySetInnerHTML={{
						__html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-58H8S95C');`
					}}
				/>
				{/* End Google Tag Manager */}
				<link
					href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,700;1,400&family=Raleway:wght@400;500;600;700&display=swap"
					rel="stylesheet"
				/>
				<Script
					src="https://cdn.safecharge.com/safecharge_resources/v1/websdk/safecharge.js"
					strategy="beforeInteractive" // Asegura que el script se cargue antes de la renderización interactiva
					onLoad={() => console.log('safecharge.js cargado con éxito')}
				/>
			</Head>
			<body>
				{/* Google Tag Manager (noscript) */}
				<noscript>
					<iframe
						src="https://www.googletagmanager.com/ns.html?id=GTM-58H8S95C"
						height="0"
						width="0"
						style={{ display: 'none', visibility: 'hidden' }}
					/>
				</noscript>
				{/* End Google Tag Manager (noscript) */}
				<Main />
				<NextScript />
			</body>
		</Html>
	)
}

export default Document
