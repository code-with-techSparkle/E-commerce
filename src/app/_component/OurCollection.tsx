export default function OurCollection() {
    return (
      <section className="py-16 max-md:py-7 sm:px-8 md:px-12 bg-white">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-4">Our Collection</h2>
        <p className="text-lg md:text-xl opacity-60 text-center mb-12">Inspire and let yourself be inspired, from one unique fashion to another.</p>
  
        <div className="grid grid-cols-1 sm:grid-cols-2 grid-rows-3 md:grid-rows-2 gap-6 h-auto sm:h-[600px]">
          <div className="sm:row-span-2 relative overflow-hidden rounded-3xl h-72 sm:h-auto group">
            <img
              src="https://ik.imagekit.io/qss3mmw4a/E-commerce/women?updatedAt=1750061179512"
              alt="Women"
              className="w-full h-full object-cover rounded-3xl group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 left-7 top-7">
              <h3 className="text-black text-4xl font-semibold">Women</h3>
            </div>
          </div>
  
          <div className="relative overflow-hidden rounded-3xl h-72 sm:h-auto group">
            <img
              src="https://ik.imagekit.io/qss3mmw4a/E-commerce/men?updatedAt=1750061159543"
              alt="Men"
              className="w-full h-full object-cover rounded-3xl group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 left-7 top-7">
              <h3 className="text-black text-4xl font-semibold">Men</h3>
            </div>
          </div>
  
          <div className="relative overflow-hidden rounded-3xl h-72 sm:h-auto group">
            <img
              src="https://ik.imagekit.io/qss3mmw4a/E-commerce/bag?updatedAt=1750061201844"
              alt="Bags"
              className="w-full h-full object-cover rounded-3xl group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 left-7 top-7">
              <h3 className="text-black text-4xl font-semibold">Bags</h3>
            </div>
          </div>
        </div>
      </section>
    );
  }
  