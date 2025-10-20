import Image from "next/image";

export default function Experience() {
  return (
    <div className="w-full py-12 bg-gray-100 font-sans overflow-hidden">
      {/* Container untuk animasi logo yang berjalan */}
      <div className="flex items-center justify-center">
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
        <div className="flex-shrink-0 mx-8 flex flex-col items-center">
          <div className="mb-3">
            <Image src="/logo/python.png" alt="Python" width={100} height={75} className="opacity-30 grayscale"/>
          </div>
        </div>
        <div className="flex-shrink-0 mx-8 flex flex-col items-center">
          <div className="mb-3">
            <Image src="/logo/javascript.svg" alt="JavaScript" width={100} height={75} className="opacity-30 grayscale"/>
          </div>
        </div>
        <div className="flex-shrink-0 mx-8 flex flex-col items-center">
          <div className="mb-3">
            <Image src="/logo/typescript.svg" alt="TypeScript" width={100} height={75} className="opacity-30 grayscale"/>
          </div>
        </div>
        <div className="flex-shrink-0 mx-8 flex flex-col items-center">
          <div className="mb-3">
            <Image src="/logo/git.svg" alt="Git" width={100} height={75} className="opacity-30 grayscale"/>
          </div>
        </div>
        <div className="flex-shrink-0 mx-8 flex flex-col items-center">
          <div className="mb-3">
            <Image src="/logo/mysql.svg" alt="MySQL" width={100} height={75} className="opacity-30 grayscale"/>
          </div>
        </div>
        <div className="flex-shrink-0 mx-8 flex flex-col items-center">
          <div className="mb-3">
            <Image src="/logo/postgresql.svg" alt="PostgreSQL" width={100} height={75} className="opacity-30 grayscale"/>
          </div>
        </div>
      </div>
    </div>
  );
}