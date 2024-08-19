import { AuthProvider } from "@/providers/auth";
import "./globals.css";


export const metadata = {
  title: "Framework",
  description: "A sua plataforma de projetos",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
