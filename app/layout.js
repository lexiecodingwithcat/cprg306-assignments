
import "./globals.css";

export const metadata = {
  title: "Shopping List",
  description: "My grocery shopping list",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
