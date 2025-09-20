import { redirect } from 'next/navigation';

const HomePage = () => {
  redirect('/discover');
  // return <div className="bg-success text-3xl underline font-poppins p-2">HomePage</div>;
};

export default HomePage;
