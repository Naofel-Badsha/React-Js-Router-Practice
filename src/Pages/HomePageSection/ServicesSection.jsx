

const ServicesSection = () => {
 const services = [
  {
    "id": 1,
    "name": "Free Delivery",
    "description": "Free shipping on all order",
    "images": "https://i.ibb.co/TDjJKvCR/imgi-42-default.png"
  },
  {
    "id": 2,
    "name": "Money Return",
    "description": "Back guarantee under 7 day",
    "images": "https://i.ibb.co/273bmm92/imgi-43-default.png"
  },
  {
    "id": 3,
    "name": "Online Support 24/7",
    "description": "Support online 24 hours a day",
    "images": "https://i.ibb.co/W4RKHtWk/imgi-44-default.png"
  },
  {
    "id": 4,
    "name": "Reliable",
    "description": "Trusted by 1000+ brands",
    "images": "https://i.ibb.co/jPhNC6L3/imgi-45-default.png"
  }
]

  return (
    <div className="py-28 max-w-[1350px] mx-auto px-4">
      <div className="flex items-center justify-center flex-wrap gap-8">
        {services.map((service) => (
          <div className=" text-center">
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
