import Header from "./(components)/Header"
import Sidebar from "./(components)/SideBar"
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="bg-gray-100 min-h-screen">
        <Sidebar>
          <Header/>
        {children}</Sidebar>
        </div>
        </body>
    </html>
  )
}
