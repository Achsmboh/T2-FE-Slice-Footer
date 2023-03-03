import "../styles/App.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function App() {
  return (
    <div className="h-screen overflow-auto bg-hijau">
      <Navbar />
      <div className=" h-full w-full flex justify-center items-center ">
        <div className=" w-full lg:grid md:grid grid-cols-2 px-10 ">
          <div className=" lg:m-10 md:m-10 lg:flex md:flex justify-end items-center lg:mt-0 lg:mb-0 md:mt-0 md:mb-0 mt-20 mb-10">
            <img width={500} className="rounded-3xl" src="https://placehold.co/600x400" alt="https://placehold.co/600x400" />
          </div>
          <div className="flex justify-start items-center">
            <div className="lg:mr-20 md:mr-20">
              <h1 className="text-4xl font-bold text-sky-900">Indoweb.id - Ahlinya Website, Android & Aplikasi</h1>
              <p className="mt-5 text-sky-900">
                <span className="font-bold">Lorem, ipsum dolor</span> sit amet consectetur adipisicing elit. Doloribus, voluptas aut molestiae et sapiente dignissimos beatae voluptatum officia laboriosam quisquam libero unde repellat
                temporibus cupiditate quo laudantium provident reiciendis fuga. Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum ab fugiat distinctio qui totam placeat dolorum quas exercitationem quia perferendis, nam ipsam?
                Nulla sunt explicabo veniam assumenda inventore voluptatum quae! Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam omnis autem ad, dicta, repellat sit, nemo minus atque ea animi eius explicabo! Aut quos sunt
                quibusdam aspernatur, consectetur facere ad.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
