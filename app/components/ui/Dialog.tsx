import React from "react";

interface CustomDialogProps {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const CustomDialog: React.FC<CustomDialogProps> = ({
  open,
  onClose,
  children,
}) => {
  if (!open) return null;

  return (
    <div style={overlayStyles} onClick={onClose}>
      <div style={dialogStyles} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};

const overlayStyles: React.CSSProperties = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 1000,
};

const dialogStyles: React.CSSProperties = {
  backgroundColor: "rgba(255, 255, 255, 0.2)",
  borderRadius: 12,
  border: "1px solid rgba(255, 255, 255, 0.2)",
  backdropFilter: "blur(16px) saturate(180%)",
  WebkitBackdropFilter: "blur(16px) saturate(180%)",
  padding: 20,
  position: "relative",
  width: "45%",
  maxWidth: "90%",
  maxHeight: "90%",
  overflow: "auto",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

export default CustomDialog;
