import ServicesFooter from "../(components)/servicesFooter/servicesFooter"

function ServiceLayout({children}) {
    return (
      <div>
        {children}
        <ServicesFooter/>
      </div>
    )
}
export default ServiceLayout