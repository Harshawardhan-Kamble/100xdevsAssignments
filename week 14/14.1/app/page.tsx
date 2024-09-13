import type { NextPage } from 'next';
import Image from 'next/image';

const Home: NextPage = () => {
  return (
    <div className=" mt-5 min-h-screen">
      {/* Hero Section */}
      <section className="bg-cover  bg-center h-96 relative">
        <div className="h-full bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white">
            <h2 className="text-4xl font-bold mb-4">Explore Books & Toys at Harsh Library</h2>
            <p className="text-xl mb-6">Discover a world of imagination with our collection of books, LEGO, chess sets, and more!</p>
            <button className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-700 transition duration-300">
              Shop Now
            </button>
          </div>
        </div>
      </section>
      {/* Featured Categories Section */}
      <section className="container mx-auto py-12">
        <h3 className="text-3xl font-bold text-center mb-8">Our Collections</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Books */}
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <Image
              src="https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c"
              alt="Books"
              width={400}
              height={300}
              className="mb-4 rounded"
            />
            <h4 className="text-2xl font-semibold mb-2">Books</h4>
            <p className="text-gray-600">Explore our wide range of books, from childrens stories to adult fiction.</p>
          </div>

          {/* LEGO */}
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <Image
              src="https://images.unsplash.com/photo-1592194996308-7f5e69f57fc4"
              alt="LEGO"
              width={400}
              height={300}
              className="mb-4 rounded"
            />
            <h4 className="text-2xl font-semibold mb-2">LEGO</h4>
            <p className="text-gray-600">Build and create with our exciting collection of LEGO sets.</p>
          </div>

          {/* Chess */}
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <Image
              src="https://images.unsplash.com/photo-1609073804024-33987e3b36dd"
              alt="Chess"
              width={400}
              height={300}
              className="mb-4 rounded"
            />
            <h4 className="text-2xl font-semibold mb-2">Chess</h4>
            <p className="text-gray-600">Master the game with our variety of chess sets for all skill levels.</p>
          </div>

          {/* Rockets */}
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <Image
              src="https://images.unsplash.com/photo-1592194996779-0b1c12f09f8b"
              alt="Rockets"
              width={400}
              height={300}
              className="mb-4 rounded"
            />
            <h4 className="text-2xl font-semibold mb-2">Rockets</h4>
            <p className="text-gray-600">Reach for the stars with our fun and educational rocket kits.</p>
          </div>
        </div>
      </section>
      {/* Footer Section */}
      <footer className="bg-blue-600 text-white py-6 mt-12">
        <div className="container mx-auto text-center">
          <p className="text-sm">&copy; 2024 Harsh Library. All rights reserved.</p>
          <p className="text-sm">Follow us on <a href="#" className="underline">Instagram</a>, <a href="#" className="underline">Facebook</a>, and <a href="#" className="underline">Twitter</a>.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
