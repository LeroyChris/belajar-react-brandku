const Card = ({ icon, title, description }) => {
    return (
        <article className="rounded-xl border shadow-lg text-left p-6">
            <h3>{icon}</h3>
            <h3 className="font-semibold text-lg">{title}</h3>
            <p className="text-gray-600 text-sm">{description}</p>
        </article>
    );
};

export default Card;