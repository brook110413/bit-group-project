import Image from 'next/image';
import { formatNumberWithCommas } from '@/utils';

interface ExchangeRate {
  currency: string;
  currency_icon: string;
  twd_price: number;
  amount_decimal: string;
  id: string;
}

export const ExchangeRateTable = async () => {
  const res = await fetch(
    'https://65efcc68ead08fa78a50f929.mockapi.io/api/v1/pairs'
  );

  const exchangeRateList: ExchangeRate[] = await res.json();

  return (
    <ul className="w-full text-center py-1">
      {exchangeRateList.map((item) => (
        <li key={item.id} className="flex py-3">
          <div className="flex-1 flex items-center space-x-2 justify-center">
            <Image src={item.currency_icon} alt="icon" width={30} height={30} />
            <span>{`${item.currency} / TWD`}</span>
          </div>
          <div className="flex-1">{formatNumberWithCommas(item.twd_price)}</div>
        </li>
      ))}
    </ul>
  );
};
