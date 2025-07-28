import Carousel from '../components/Carousel';
import banner1 from '../assets/banners/banner1.png';
import banner2 from '../assets/banners/banner2.png';
import banner3 from '../assets/banners/banner3.png';

const bannerImages = [banner1, banner2, banner3];

export default function Offers_week() {
  return (
    <div>
      <Carousel slides={bannerImages} />
    </div>
  );
}
