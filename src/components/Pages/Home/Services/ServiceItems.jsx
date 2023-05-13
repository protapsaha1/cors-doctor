import { FaArrowRight } from "react-icons/fa";

const ServiceItems = ({ service }) => {
    // service_id,
    const { img, title, price } = service;
    return (
        <div className="card w-80 glass">
            <figure><img className="h-52" src={img} alt="car!" /></figure>
            <div className="card-body p-3">
                <h2 className="card-title">{title}</h2>
                <span className="flex justify-between items-center">
                    <p className="text-rose-500 font-bold">Price: ${price}</p>
                    <button className="btn btn-square btn-outline">
                        <FaArrowRight className="w-14" />
                    </button>
                </span>
            </div>
        </div>
    );
};

export default ServiceItems;