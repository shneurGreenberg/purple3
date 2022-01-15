import React, { useState } from "react";
import Cropper from "react-easy-crop";
import getCroppedImg from "./cropImage";

const aspectRatios = [{ value: 16 / 9, text: "16/9" }];

export const ImageCropDialog = ({
  id,
  imageUrl,
  cropInit,
  zoomInit,
  aspectInit,
  onCancel,
  setCroppedImageFor,
  resetImage,
}) => {
  if (zoomInit == null) {
    zoomInit = 1;
  }
  if (cropInit == null) {
    cropInit = { x: 0, y: 0 };
  }
  if (aspectInit == null) {
    aspectInit = aspectRatios[0];
  }
  const [zoom, setZoom] = useState(zoomInit);
  const [crop, setCrop] = useState(cropInit);
  const [aspect] = useState(aspectInit);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);

  const onCropChange = (crop) => {
    setCrop(crop);
  };

  const onZoomChange = (zoom) => {
    setZoom(zoom);
  };

  const onCropComplete = (croppedArea, croppedAreaPixels) => {
    setCroppedAreaPixels(croppedAreaPixels);
  };

  const onCrop = async () => {
    const croppedImageUrl = await getCroppedImg(imageUrl, croppedAreaPixels);
    setCroppedImageFor(id, crop, zoom, aspect, croppedImageUrl);
  };

  const onResetImage = () => {
    resetImage(id);
  };

  return (
    <div>
      <div className="backdrop">
        <div className="crop-container">
          <Cropper
            image={imageUrl}
            zoom={zoom}
            crop={crop}
            aspect={aspect.value}
            onCropChange={onCropChange}
            onZoomChange={onZoomChange}
            onCropComplete={onCropComplete}
          />
        </div>
        <div className="controls">
          <div className="controls-upper-area">
            <input
              type="range"
              min={1}
              max={3}
              step={0.01}
              value={zoom}
              onInput={(e) => {
                onZoomChange(e.target.value);
              }}
              className="slider"
            ></input>
          </div>
          <div className="button-area">
            <button onClick={onCancel}>Cancel</button>
            <button onClick={onResetImage}>Reset</button>
            <button onClick={onCrop}>Crop</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageCropDialog;
