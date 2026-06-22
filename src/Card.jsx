import { useState, useEffect } from "react";

const Card = ({ id, icon, title, description }) => {
    
    const [jumlahSuka, setJumlahSuka] = useState(() => {
        const saved = localStorage.getItem(`suka-${id}`);
        return saved ? parseInt(saved) : 0;
    });

    useEffect(() => {
        localStorage.setItem(`suka-${id}`, jumlahSuka);
    }, [id, jumlahSuka]);
 
    return (
        <article className="rounded-xl border shadow-lg text-left p-6">
            <h3>{icon}</h3>
            <h3 className="font-semibold text-lg">{title}</h3>
            <p className="text-gray-600 text-sm">
                {description}
            </p>
            <button
                className="mt-4 px-4 py-2 bg-pink-100 text-pink-600 rounded-lg hover:bg-pink-100/80 transition"
                onClick={() => setJumlahSuka(abc => abc+1)}
            >
                ❤️ Suka ({jumlahSuka})
            </button>
        </article>
    )
}

export default Card;