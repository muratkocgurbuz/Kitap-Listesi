import React from "react";

export default function FavoriPaneli({ favoriler, kitaplar, onFavoriKaldir }) {
  const favoriKitaplar = kitaplar.filter((kitap) => favoriler.includes(kitap.id));

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200 sticky top-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">
        Favoriler ({favoriler.length})
      </h2>
      <ul className="space-y-3">
        {favoriKitaplar.length > 0 ? (
          favoriKitaplar.map((kitap) => (
            <li
              key={kitap.id}
              className="flex justify-between items-center bg-yellow-100 p-3 rounded-md"
            >
              <span className="text-gray-800 font-medium">{kitap.baslik}</span>
              <button
                onClick={() => onFavoriKaldir(kitap.id)}
                className="text-gray-500 hover:text-red-700 font-semibold text-sm transition-colors"
              >
                Kaldır
              </button>
            </li>
          ))
        ) : (
          <p className="text-gray-500">Henüz favori kitabınız yok.</p>
        )}
      </ul>
    </div>
  );
}
