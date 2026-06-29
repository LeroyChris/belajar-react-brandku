export default function Hero({ clickCount, onButtonClick }) {
  return (
    <section className="flex flex-col items-center text-center py-20 px-6">
      <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
        Solusi Terbaik untuk Bisnismu
      </h1>
      <p className="text-lg text-gray-600 max-w-xl mb-8">
        Platform all-in-one untuk manajemen, pemasaran, dan pertumbuhan bisnis kecil.
      </p>

      {clickCount < 2 && (
        <button
          id="cta-button"
          onClick={onButtonClick}
          className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
        >
          Mulai Gratis
        </button>
      )}

      {clickCount >= 1 && (
        <p id="clicked-message" className="mt-4 text-green-600 font-medium">
          Tombol telah diklik! Terima kasih atas ketertarikan Anda.
        </p>
      )}

      {clickCount >= 2 && (
        <p id="thank-you-message" className="mt-2 text-blue-600 font-medium">
          Terima kasih! Tim kami akan menghubungi Anda segera.
        </p>
      )}
    </section>
  );
}