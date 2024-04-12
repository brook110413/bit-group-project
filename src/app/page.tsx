import { ExchangeRateTable } from '@/components';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <header className="w-full text-center py-4 border-b sticky top-0 bg-black">
        <div className="text-2xl mb-4 ">Rate Table(TWD)</div>
        <div className="flex">
          <div className="flex-1">Currency</div>
          <div className="flex-1">Price</div>
        </div>
      </header>
      <ExchangeRateTable />
      <footer className="w-full text-center py-4 border-t sticky bottom-0 bg-black">
        <button className="border px-2 py-3 rounded-2xl">
          Rate Conversion
        </button>
      </footer>
    </main>
  );
}
