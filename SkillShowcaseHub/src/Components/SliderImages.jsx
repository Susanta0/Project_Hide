const imageSlider = [
  {
    id: 1,
    images:
      "https://d117h1jjiq768j.cloudfront.net/images/default-source/blogs/2021/2021-05/1200x600_prgs_blogs.png?sfvrsn=9deb130e_0",
  },
  {
    id: 2,
    images: "https://cdn.mycplus.com/mycplus/wp-content/uploads/2011/02/Programming_challenge-e1522093628775-1280x640.jpg",
  },
  {
    id: 3,
    images:
      "https://miro.medium.com/v2/resize:fit:1000/1*OhrAmSvpDWk0gzb_08PkhQ.png",
  },
  {
    id: 4,
    images: "https://rooturaj.com/wp-content/uploads/2022/06/Coding-Competition-Kids-post-01.jpg",
  },
  {
    id: 5,
    images:
      "https://contentstatic.techgig.com/photo/74969192/how-coding-competitions-are-significant-in-a-developers-career.jpg?798505",
  },
];
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const SliderImages = () => {
  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };

  return (
    <Slider {...settings}>
      {imageSlider.map((ele) => (
        <div key={ele.id}>
          <div key={ele.id} className="border ">
            <img className=" h-[500px] w-[100%]" src={ele.images} alt="" />
          </div>
        </div>
      ))}
    </Slider>
  );
};
