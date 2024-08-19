import type { Metadata } from "next";
import { Inter, Sarabun } from "next/font/google";
import "@/styles/globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Footer from "@/components/footer";

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
});

const sarabun = Sarabun({
  subsets: ['latin', 'thai'],
  weight: ['100','200','300','400','500','600','700','800'],
  style: ['normal', 'italic'],
  display: 'swap',
});



export const metadata: Metadata = {
  title: "P31NN",
  description: "P31NN-blogs",
};

export default function RootLayout({  
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body className={`${inter.className} ${sarabun.className}`}>
        <ThemeProvider 
          attribute="class" 
          defaultTheme="system" 
          enableSystem
          disableTransitionOnChange
        >
          <main>
            {children}
          </main>
          <Footer />
          
        </ThemeProvider>
      </body>
    </html>
  );
}
