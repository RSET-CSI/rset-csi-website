import React, { useState } from "react";
import {
  Dialog,
  IconButton,
  ImageList,
  ImageListItem,
  Typography,
} from "@mui/material";
import {
  Close as CloseIcon,
  ArrowBack as ArrowBackIcon,
  ArrowForward as ArrowForwardIcon,
} from "@mui/icons-material";
import { images } from "../data"; // Import the data

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const openImage = (index: number) => {
    setCurrentIndex(index);
    setSelectedImage(images[index]);
  };

  const closeImage = () => setSelectedImage(null);

  const prevImage = () => {
    const newIndex = (currentIndex - 1 + images.length) % images.length;
    setCurrentIndex(newIndex);
    setSelectedImage(images[newIndex]);
  };

  const nextImage = () => {
    const newIndex = (currentIndex + 1) % images.length;
    setCurrentIndex(newIndex);
    setSelectedImage(images[newIndex]);
  };

  return (
    <div
      className="absolute "
      style={{
        background: `
          radial-gradient(circle at bottom left, rgba(187, 108, 230, 0.4) 10%, rgba(187, 108, 230, 0) 25%),
          radial-gradient(circle at top right, rgba(56, 72, 241, 0.4) 10%, rgba(56, 72, 241, 0) 25%),
          linear-gradient(to bottom right, #0a041c, #0a041c)`,
        zIndex: -1, // Ensure the background is behind the content
      }}
    >
      <h2 className="text-5xl font-extrabold text-center mb-10 text-[#3848f1]">
        Gallery
      </h2>
      <ImageList variant="masonry" cols={3} gap={8}>
        {images.map((img, index) => (
          <ImageListItem
            key={img}
            onClick={() => openImage(index)}
            sx={{
              "&:hover": {
                cursor: "pointer",
                opacity: 0.8,
              },
            }}
          >
            <img
              src={img}
              alt={`Gallery Image ${index + 1}`}
              style={{
                width: "100%",
                height: "auto",
                borderRadius: "8px",
                objectFit: "cover",
              }}
            />
          </ImageListItem>
        ))}
      </ImageList>

      <Dialog
        open={!!selectedImage}
        onClose={closeImage}
        maxWidth="md"
        fullWidth
        PaperProps={{
          sx: {
            position: "relative",
            backgroundColor: "transparent",
            boxShadow: "none",
          },
        }}
      >
        {selectedImage && (
          <div
            style={{
              position: "relative",
              padding: "16px",
              textAlign: "center",
            }}
          >
            <IconButton
              aria-label="Close"
              style={{
                position: "absolute",
                top: 16,
                right: 16,
                color: "#fff",
              }}
              onClick={closeImage}
            >
              <CloseIcon />
            </IconButton>
            <img
              src={selectedImage}
              alt="Selected"
              style={{
                width: "80%", // Adjust this value to make the image smaller or larger
                height: "auto",
                borderRadius: "8px",
                maxWidth: "500px", // Ensures image doesn't exceed a certain width
                margin: "0 auto", // Center the image
              }}
            />
            <IconButton
              aria-label="Previous Image"
              style={{
                position: "absolute",
                left: 16,
                top: "50%",
                transform: "translateY(-50%)",
                color: "#fff",
                backgroundColor: "#000",
              }}
              onClick={prevImage}
            >
              <ArrowBackIcon />
            </IconButton>
            <IconButton
              aria-label="Next Image"
              style={{
                position: "absolute",
                right: 16,
                top: "50%",
                transform: "translateY(-50%)",
                color: "#fff",
                backgroundColor: "#000",
              }}
              onClick={nextImage}
            >
              <ArrowForwardIcon />
            </IconButton>
          </div>
        )}
      </Dialog>
    </div>
  );
};

export default Gallery;
