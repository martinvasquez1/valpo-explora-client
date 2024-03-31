const mockData = {
  title: 'Place name',
  body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde repellat neque laborum! Fuga deleniti, dignissimos ut suscipit, aperiam, excepturi doloribus cumque sed sit voluptates ex voluptatibus non natus veritatis numquam. Molestias quasi eum officia temporibus molestiae facere repellat quas assumenda ipsam excepturi aperiam earum, ex saepe. Quos quia repellat iste.',
  imageUrl:
    'https://images.unsplash.com/photo-1544023920-93dd2bd912e0?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
};

export default function Place({}) {
  return (
    <div className="mx-auto min-h-screen max-w-5xl px-8">
      <div className="pt-12">
        <img
          src={mockData.imageUrl}
          alt="#"
          className="h-96 w-full rounded-lg object-cover"
        />
      </div>
      <div className="py-8">
        <h1 className="font-playfair text-5xl font-semibold text-slate-900">
          {mockData.title}
        </h1>
        <p className="pt-6 text-slate-700">{mockData.body}</p>
      </div>
    </div>
  );
}
