import { useEffect, useState } from "react";
import ServiceItems from "./ServiceItems";

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch("services.json")
            .then(res => res.json())
            .then(data => setServices(data))
            .catch(error => console.log(error.message))
    }, [])

    return (
        <div className="w-[1000px] mx-auto mt-10">
            <div className="space-y-3 text-center">
                <h3 className="text-3xl text-red-500
                    font-semibold ">Our Services</h3>
                <h2 className="text-5xl font-semibold">Our Service Area</h2>
                <p className="font-semibold
                    text-slate-400">Lorem ipsum dolor sit
                    amet consectetur adipisicing elit. <br />Beatae
                    reiciendis quo facilis autem sed nesciunt.
                    Dolore vel eaque voluptas?
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 md:gap-4 lg:gap-6 my-10">
                {
                    services.map(service => <ServiceItems
                        key={service._id}
                        service={service}
                    ></ServiceItems>)
                }
            </div>
        </div>
    );
};

export default Services;