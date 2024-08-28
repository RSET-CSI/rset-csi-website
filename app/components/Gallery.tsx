import React, { useState } from "react";
import { Dialog, IconButton, ImageList, ImageListItem } from "@mui/material";
import {
  Close as CloseIcon,
  ArrowBack,
  ArrowForward,
} from "@mui/icons-material";
import { images } from "../data"; // Assuming images is an array of image URLs

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  // Function to open the image dialog
  const openImage = (index: number) => {
    setCurrentIndex(index);
    setSelectedImage(images[index]);
  };

  // Function to close the image dialog
  const closeImage = () => setSelectedImage(null);

  // Function to navigate to the previous image
  const prevImage = () => {
    const newIndex = (currentIndex - 1 + images.length) % images.length;
    setCurrentIndex(newIndex);
    setSelectedImage(images[newIndex]);
  };

  // Function to navigate to the next image
  const nextImage = () => {
    const newIndex = (currentIndex + 1) % images.length;
    setCurrentIndex(newIndex);
    setSelectedImage(images[newIndex]);
  };

  return (
    <div
      style={{
        background: `
        radial-gradient(circle at top left, rgba(187, 108, 230, 0.4) 9%, rgba(187, 108, 230, 0) 30%),
        radial-gradient(circle at bottom right, rgba(56, 72, 241, 0.4) 15%, rgba(56, 72, 241, 0) 40%),
        linear-gradient(to bottom right, #0a041c, #0a041c)
      `,
      }}
      id="gallery"
    >
      <h2 className="text-5xl font-extrabold text-center mb-10 pt-10">
        Image <span className="text-[#3848f1]">Gallery</span>
      </h2>
      <ImageList variant="masonry" cols={3} gap={8}>
        {images.map((img, index) => (
          <ImageListItem key={index} onClick={() => openImage(index)}>
            <img
              src={img}
              alt={`Gallery Image ${index + 1}`}
              style={{ width: "100%", height: "auto", borderRadius: "8px" }}
            />
          </ImageListItem>
        ))}
      </ImageList>

      <Dialog
        open={!!selectedImage}
        onClose={closeImage}
        maxWidth="md"
        fullWidth
      >
        {selectedImage && (
          <div style={{ position: "relative", textAlign: "center" }}>
            <IconButton
              aria-label="Close"
              style={{ position: "absolute", top: 16, right: 16 }}
              onClick={closeImage}
            >
              <CloseIcon />
            </IconButton>
            <img
              src={selectedImage}
              alt="Selected"
              style={{ width: "80%", maxWidth: "500px", borderRadius: "8px" }}
            />
            <IconButton
              aria-label="Previous"
              style={{
                position: "absolute",
                left: 16,
                top: "50%",
                transform: "translateY(-50%)",
              }}
              onClick={prevImage}
            >
              <ArrowBack />
            </IconButton>
            <IconButton
              aria-label="Next"
              style={{
                position: "absolute",
                right: 16,
                top: "50%",
                transform: "translateY(-50%)",
              }}
              onClick={nextImage}
            >
              <ArrowForward />
            </IconButton>
          </div>
        )}
      </Dialog>
    </div>
  );
};

export default Gallery;
