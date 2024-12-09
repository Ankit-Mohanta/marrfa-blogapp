import dynamic from 'next/dynamic';

const HomePage = dynamic(
  ()=> import('@/components/Home/Home'),
  {
      loading: () => (
        <div className='w-full h-full flex items-center justify-center'>
          Loading...
        </div>
      )
    }
)

export default function Home() {
  return (
    <>
    <HomePage />
    </>
  );
}
