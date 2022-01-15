import "./App.css";
import { useState } from "react";
import ImageCropDialog from "./ImageCrop";
// import image from "./image.jpeg";

export function MainCrop(props) {
  const initData = [
    {
      id: 1,
      imageUrl: props.imageCrop,
      croppedImageUrl: null,
    },
  ];

  const [cars, setCars] = useState(initData);
  const [selectedCar, setSelectedCar] = useState(null);

  const onCancel = () => {
    setSelectedCar(null);
  };

  const setCroppedImageFor = (id, crop, zoom, aspect, croppedImageUrl) => {
    const newCarsList = [...cars];
    const car = cars[0];
    const newCar = {
      ...car,
      croppedImageUrl,
      crop,
      zoom,
      aspect,
    };
    newCarsList[0] = newCar;
    setCars(newCarsList);
    setSelectedCar(null);
  };

  const resetImage = (id) => {
    setCroppedImageFor(id);
  };

  return (
    <div className="App">
      <div>
        {" "}
        {selectedCar ? (
          <ImageCropDialog
            id={selectedCar.id}
            imageUrl={props.imageCrop}
            cropInit={selectedCar.crop}
            zoomInit={selectedCar.zoom}
            aspectInit={selectedCar.aspect}
            onCancel={onCancel}
            setCroppedImageFor={setCroppedImageFor}
            resetImage={resetImage}
          />
        ) : null}{" "}
        {cars.map((car) => (
          <div className="imageCard" key={car.id}>
            <img
              src={car.croppedImageUrl ? car.croppedImageUrl : car.imageUrl}
              alt=""
              onClick={() => {
                console.log(car);
                setSelectedCar(car);
              }}
            />{" "}
          </div>
        ))}{" "}
      </div>{" "}
    </div>
  );
}
