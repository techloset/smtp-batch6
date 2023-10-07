
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <h1>Header</h1>
        {children}
        </body>
        <h1>Footer</h1>
    </html>
  )
}
