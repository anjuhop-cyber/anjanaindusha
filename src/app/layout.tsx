import "./globals.css";
export const metadata = {
  title: "Indusha & Anjana | Wedding Invitation",
  description:
    "A timeless wedding invitation for Indusha & Anjana — 03 December 2026.",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
