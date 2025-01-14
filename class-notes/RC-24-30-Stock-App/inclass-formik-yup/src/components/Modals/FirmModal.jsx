import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function FirmModal({ open, handleClose }) {
  return (
    <div>
      {/* Button modalı açıyor.Açma işlemi firms sayfasında NEw Firm yaptığı için burda pasif hale getirdik */}
      {/* <Button onClick={handleOpen}>Open modal</Button> */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box component={form}>
            <TextField
              label="Firm Name"
              variant="outlined"
              type="text"
              name="name"
            />
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
