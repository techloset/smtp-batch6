import { client } from "@/sanity/lib/client";

const fetchServices = async () => {
    const services = await client.fetch(
      '*[_type == "services"]',
      {},
      {
        // You can set any of the `cache` and `next` options as you would on a standard `fetch` call
        cache: 'no-cache',
      }
    )
    console.log(
        "services", services
    );
    return services
}

async function Contact() {
    const services = await fetchServices()
    return (
        <div>
            <h1>Data from sanity</h1>

            {
                services.map((service) => {
                    return (
                        <>
                            <h2>{service.title}</h2>
                            <p>{service.description}</p>
                            <p>{service._updatedAt}</p>
                            <hr />
                        </>
                    )
                })
            }
        </div>
    )
}

export default Contact;