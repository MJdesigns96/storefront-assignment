import Header from "./components/Header";
import Footer from "./components/Footer";

export default function RootLayout({children}) {
  return (
    <html lang="en">
      <head>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossOrigin="anonymous"></link>
      </head>
      <body>
        <div className="container">
          <Header />
          <hr></hr>
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
