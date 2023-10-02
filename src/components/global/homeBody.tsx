import MyCarousel from "../carousel";
import carouselphoto1 from "@/assets/thailand-tempel.jpg";
import carouselphoto2 from "@/assets/coolmountains.jpg";
import carouselphoto3 from "@/assets/grandcanyon.jpg";

export function HomeBody() {
  const images = [
    carouselphoto1.src,
    carouselphoto2.src,
    carouselphoto3.src,
    // ... add more images as you like
  ];
  const imageLinks = [
    "https://www.facebook.com",
    "https://www.instagram.com",
    "https://www.pinterest.com",
    //add more if needed
  ];
  return (
    <div>
      <MyCarousel images={images} imageLinks={imageLinks} />
    </div>
  );
}
