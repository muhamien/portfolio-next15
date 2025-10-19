import Image from "next/image";

export default function Experience() {
  return (
    <div className="w-full py-12 bg-gray-100 font-sans overflow-hidden">
      {/* Container untuk animasi logo yang berjalan */}
      <div className="flex items-center animate-scroll-left hover:pause-animation">
        {/* Logo pertama */}
        <div className="flex-shrink-0 mx-8 flex flex-col items-center">
          <div className="mb-3">
            <Image src="/logo/laravel.svg" alt="Laravel" width={100} height={75} className="opacity-30"/>
          </div>
        </div>
        <div className="flex-shrink-0 mx-8 flex flex-col items-center">
          <div className="mb-3">
            <Image src="/logo/nextjs.svg" alt="Next.js" width={100} height={75} className="opacity-30"/>
          </div>
        </div>
        <div className="flex-shrink-0 mx-8 flex flex-col items-center">
          <div className="mb-3">
            <Image src="/logo/flutter.svg" alt="Flutter" width={100} height={75} className="opacity-30"/>
          </div>
        </div>
        <div className="flex-shrink-0 mx-8 flex flex-col items-center">
          <div className="mb-3">
            <Image src="/logo/odoo.svg" alt="Odoo" width={100} height={75} className="opacity-30"/>
          </div>
        </div>
        {/* Duplikasi pertama untuk efek loop yang mulus */}
        <div className="flex-shrink-0 mx-8 flex flex-col items-center">
          <div className="mb-3">
            <Image src="/logo/laravel.svg" alt="Laravel" width={100} height={75} className="opacity-30"/>
          </div>
        </div>
        <div className="flex-shrink-0 mx-8 flex flex-col items-center">
          <div className="mb-3">
            <Image src="/logo/nextjs.svg" alt="Next.js" width={100} height={75} className="opacity-30"/>
          </div>
        </div>
        <div className="flex-shrink-0 mx-8 flex flex-col items-center">
          <div className="mb-3">
            <Image src="/logo/flutter.svg" alt="Flutter" width={100} height={75} className="opacity-30"/>
          </div>
        </div>
        <div className="flex-shrink-0 mx-8 flex flex-col items-center">
          <div className="mb-3">
            <Image src="/logo/odoo.svg" alt="Odoo" width={100} height={75} className="opacity-30"/>
          </div>
        </div>
      </div>
    </div>
  );
}