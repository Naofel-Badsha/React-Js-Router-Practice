import { useEffect, useState } from "react";


const ServicesSection = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('/public/services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div className="py-28 max-w-[1350px] mx-auto">
            <div className="grid gap-8 grid-cols-1 md:grid-cols-4 lg:grid-cols-4">
                {
                    services.map(service => <div service={service.key}>
                        <div className="flex gap-5">
                            <div>
                                <img className="w-[70px]" src={service.images} alt="" />
                            </div>
                            <div>
                                <h1 className="text-xl font-medium">{service.name}</h1>
                                <p className="text-[16px] text-[#555]">{service.description}</p>
                            </div>
                        </div>
                    </div>)
                }
            </div>

        </div>
    );
};

export default ServicesSection;