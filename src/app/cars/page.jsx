import CarCard from "@/components/CarCard";

const exploreCarsPage = async () => {
    const res = await fetch("http://localhost:5000/car")
    const cars = await res.json();
    console.log(cars)

    return (
        <div className="max-w-7xl mx-auto px-4 py-8">
            <h1 className="text-3xl mb-5 font-bold">All Cars</h1>
            <div  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center">
                {
                    cars.map(car => <CarCard key={car._id} car={car}></CarCard>)
                }
            </div>
        </div>
    );
};

export default exploreCarsPage;