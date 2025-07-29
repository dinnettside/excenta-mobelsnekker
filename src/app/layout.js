export const metadata = {
  title: "Møbelsnekker | Excenta AS",
  description: "Skreddersydd håndverk i eik, MDF og laminat – laget på mål",
};

export default function RootLayout({ children }) {
  return (
    <html lang="no">
      <body className="font-sans scroll-smooth bg-white text-gray-900">
        {children}
      </body>
    </html>
  );
}
