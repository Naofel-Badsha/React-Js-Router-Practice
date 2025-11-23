import { useEffect, useState } from "react";

const ServicesSection = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("/public/services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div className="py-28 max-w-[1350px] mx-auto px-4">
      <div className="flex items-center justify-center flex-wrap gap-8">
        {services.map((service) => (
          <div service={service.key} className=" text-center">
            <div className="flex gap-5 text-center items-center m-auto">
              <div>
                <img className="w-[70px] m-auto " src={service.images} alt="" />
              </div>
              <div>
                <h1 className="text-xl font-medium ">{service.name}</h1>
                <p className="text-[16px] text-[#555]">{service.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesSection;
