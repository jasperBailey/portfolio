import "./globals.css";

export const metadata = {
    title: "JB Portfolio",
    description: "Portfolio website created with next.js",
};

export default function RootLayout({
    children }) {
    return (
        <html lang="en">
            <body>
                {children}
            </body>
        </html>
    );
}