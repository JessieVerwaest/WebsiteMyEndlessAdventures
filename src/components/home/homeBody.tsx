import carouselphoto1 from "@/assets/thailand-tempel.jpg";
import carouselphoto2 from "@/assets/coolmountains.jpg";
import carouselphoto3 from "@/assets/grandcanyon.jpg";
import { CarouselWrapper } from "../global/carouselWrapper/carouselWrapper";
import { CAROUSEL_SETTINGS } from "@/consts/general.consts";

export function HomeBody() {
  const images = [carouselphoto1.src, carouselphoto2.src, carouselphoto3.src];

  return (
    <div>
      <div>
        <h2> Single Item</h2>
        <CarouselWrapper settings={CAROUSEL_SETTINGS}>
          {images.map((image, index) => (
            <div key={index}>
              <img src={image} className="max-h-[900px]" />
            </div>
          ))}
        </CarouselWrapper>
      </div>
    </div>
  );
}
