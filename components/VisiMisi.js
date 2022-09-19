import React from "react";
import { PlusCircleIcon } from "@heroicons/react/outline";

function VisiMisi() {
  return (
    <div className="max-w-7xl mx-auto py-16   space-y-8 md:flex md:items-start md:justify-center  md:space-y-0 md:space-x-3 md:px-5 px-5">
      {/* VISION */}
      <div className="md:flex-1">
        <h1 className="font-extrabold text-2xl text-blue-500">Vision</h1>
        <hr className="border-2 border-gray-300 mb-2"></hr>
        <ul className="list-disc ml-5 marker:text-blue-600 space-y-2 text-sm md:text-base text-gray-600">
          <li>
            Mewujudkan generasi milenial yang SIAP (Sinergis, Aspiratif
            Produktif)
          </li>
        </ul>
      </div>

      {/* MISION */}
      <div className="md:flex-1">
        <h1 className="font-extrabold text-2xl text-blue-500">Mission</h1>
        <hr className="border-2 border-gray-300 mb-2"></hr>
        <ul className="list-disc ml-5 marker:text-blue-600 space-y-2 text-sm md:text-base text-gray-600">
          <li>
            Young Talk Indonesia hadir ditengan generasi milenial untuk memberi
            edukasi yang bermanfaat untuk membangun peradaban
          </li>
          <li>
            Menjadi wadah restorasi perubahan yang terbuka untuk generasi
            milenial supaya au menyuarakan gagasan-gagasan ide besarnya.
          </li>
          <li>
            Mengharmonisasikan setiap anggota di internal Young Talk Indonesia
            sesuai dengan tupoksi yang ada
          </li>
          <li>
            Young Talk Indonesia menjalin komunikasi bebas aktif dengan seluruh
            stakeholder terkait
          </li>
          <li>
            Menjalin bargaining position informasi yang bermanfaat bagi
            milenial, masyarakat, dan pemerintah.
          </li>
        </ul>
      </div>
    </div>
  );
}

export default VisiMisi;
