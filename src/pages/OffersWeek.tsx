import { useEffect, useState } from 'react';
import Carousel from '../components/Carousel';
import ProductCard from '../components/ProductCard';
import type { Product } from '../types/Product';

const bannerImages = [
  '../../public/banners/banner1.png',
  '../../public/banners/banner2.png',
  '../../public/banners/banner3.png',
];

const bannerImagesMobile = [
  '/banners/banner1-mobile.png',
  '/banners/banner2-mobile.png',
  '/banners/banner3-mobile.png',
];

function useIsMobile(breakpoint: number = 768): boolean {
  const [isMobile, setIsMobile] = useState<boolean>(
    typeof window !== 'undefined' && window.innerWidth < breakpoint,
  );
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < breakpoint);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [breakpoint]);

  return isMobile;
}

export default function OffersWeek() {
  const [produtos, setProdutos] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const isMobile = useIsMobile();
  const selectedBanners = isMobile ? bannerImagesMobile : bannerImages;
  useEffect(() => {
    const fetchProdutos = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        setProdutos(data);
      } catch (error) {
        console.error('Erro ao buscar produtos:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProdutos();
  }, []);

  return (
    <div className="max-w-[1920px] mx-auto">
      <Carousel slides={selectedBanners} />

      <h2 className="text-2xl font-semibold mt-12 mb-6 text-center">
        Ofertas da Semana
      </h2>

      {loading ? (
        <p>Carregando produtos...</p>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6 px-4 max-w-[1280px] mx-auto">
          {produtos.slice(0, 6).map((produto) => (
            <ProductCard key={produto.id} product={produto} />
          ))}
        </div>
      )}
    </div>
  );
}
