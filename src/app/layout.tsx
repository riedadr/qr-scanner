import Header from "@/components/Header";
import "./globals.css";

export const metadata = {
	title: "QR Scanner",
	description: "QR Code Scanner with Nextjs",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="de">
			<body className="md:px-4 text-white">
				<Header />
				<main className="w-full h-full max-w-7xl m-auto mt-8 px-4">
					{children}
				</main>
			</body>
		</html>
	);
}
