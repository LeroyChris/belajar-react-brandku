import Card from "./Card";

const CardGrid = ({ features = [] }) => {
    return (
        <section className="bg-white py-16">
            <h2 className="text-center text-2xl font-bold">Mengapa BrandKu?</h2>
            <div className="mt-10 max-w-4xl mx-auto grid md:grid-cols-3 gap-8 grid-cols-1">
                {features.map((item) => (
                    <Card
                        key={item.id}
                        id={item.id}
                        icon={item.icon}
                        title={item.title}
                        description={item.description}
                    />
                ))}
            </div>
        </section>
    );
};

export default CardGrid;