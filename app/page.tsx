'use client'


export default function Home() {

  return (
    <div className="min-h-screen gap-16 w-screen font-[family-name:var(--font-geist-sans)]">
      <main className="row-start-2 items-start sm:items-start h-full">
        <div className="flex">
          {/* Left content */}
          <div className="w-full">
            <div className="flex flex-col h-screen">
              <div className="pl-24 p-4 h-full justify-end flex flex-col gap-6">
                <h1 className="text-10xl font-bold font-serif">Software Engineer</h1>
                
              </div>
            </div>
          </div>
          {/* Illustration */}
          <div className="bg-gray-200 p-4 w-4/6 h-screen relative">
            <div className="flex justify-between items-center h-5/6 absolute inset-0 z-50 mx-4 mt-28">
              aa
            </div>
            {/* <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/illustration1.jpeg')", filter: "grayscale(100%)" }}></div> */}
          </div>
        </div>
      </main>
    </div>
  );
}
