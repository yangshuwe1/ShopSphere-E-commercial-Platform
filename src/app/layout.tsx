import React from "react";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import "./globals.css";
import { AuthProvider } from "./providers/AuthProvider";

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <html lang="en" suppressHydrationWarning>
            <body suppressHydrationWarning>
            <AuthProvider>
                <Header />
                {children}
                <Footer />
            </AuthProvider>
            </body >
        </html>
    )
}

export default Layout;