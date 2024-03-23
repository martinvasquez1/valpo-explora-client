import Button from './Button.jsx';

export default function Layout() {
  return (
    <div className="mx-auto max-w-5xl">
      <div className="flex flex-col justify-center gap-12 px-8 py-10 sm:flex-row sm:py-14 lg:py-14">
        <div className="pt-8">
          <h1 className="font-playfair text-center text-3xl font-bold text-slate-900 sm:text-4xl md:text-left lg:text-7xl">
            Explora <br />
            Valparaiso
          </h1>
          <p className="mt-6 text-slate-700">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            voluptate ratione doloremque.
          </p>
          <Button className="mt-4">Empieza a explorar</Button>
        </div>

        <div className="width-full flex gap-4">
          <div className="flex flex-col gap-4">
            <img
              className="h-60 rounded-xl object-cover"
              src="https://images.unsplash.com/photo-1629537745251-57c3bc5b8670?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="#"
            />
            <img
              className="h-48 rounded-xl object-cover"
              src="https://images.unsplash.com/photo-1566275163755-bbb09bbc5a13?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="#"
            />
          </div>
          <div className="flex items-center">
            <img
              className="h-80 rounded-xl object-cover"
              src="https://images.unsplash.com/photo-1490782300182-697b80ad4293?q=80&w=1527&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="#"
            />
          </div>
        </div>
      </div>
      <div className="px-8 py-10">
        <h2 className="text-2xl font-semibold text-slate-900">H2</h2>
      </div>
    </div>
  );
}
