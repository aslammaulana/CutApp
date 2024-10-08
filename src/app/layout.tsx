import './globals.css';
import { Poppins } from 'next/font/google';
import Navbar from '@/components/themebuilder/02-Navbar';


const poppins = Poppins ({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export const metadata = {
  title: "Cut Ludesc",
  description: "Generated by Aslam",
  icon: "/images/KensenLogoRound.png",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={poppins.className}> {/* Menambahkan font Montserrat */}
      <head>
        <link rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,500,0,0" />
      </head>
      <body className="min-h-screen p-0 m-0">
        <div className="min-h-screen bg-[#fcfcfc] flex flex-col">
          <Navbar />
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
