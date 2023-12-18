import React from "react";
import { Box, Button, IconButton, TextField, Typography } from "@mui/material";
import { CustomModal } from "../modal/Modal";
import CustomInput from "../utils/inputs/CustomInput";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

type IPropAddNote = {
   isOpen: boolean;
   handleClose: () => void;
};

export default function ModalAddNote({ isOpen, handleClose }: IPropAddNote) {
   return (
      <CustomModal.Root
         isOpen={isOpen}
         handleClose={handleClose}
         className="h-auto w-[30%]"
      >
         <>
            <CustomModal.CloseButton closeModal={handleClose} />

            <Box>
               <div className="flex flex-col gap-7 p-4">
                  <Typography variant="h1" fontSize="2rem" alignSelf="center">
                     Adicionar Nota
                  </Typography>

                  <div className="flex flex-col">
                     <label htmlFor="titulo" className="text-gray-600 mb-2">
                        Título
                     </label>
                     <TextField
                        id="titulo"
                        hiddenLabel
                        variant="outlined"
                        fullWidth
                     />
                  </div>

                  <div className="flex flex-col">
                     <label htmlFor="descricao" className="text-gray-600 mb-2">
                        Descrição
                     </label>
                     <TextField
                        id="descricao"
                        hiddenLabel
                        multiline
                        rows={4}
                        variant="outlined"
                        fullWidth
                     />
                  </div>

                  <div className="flex gap-20">
                     <div className="flex flex-col">
                        <label htmlFor="data" className="text-gray-600 mb-2">
                           Data
                        </label>
                        <CustomInput id="data" type="date" />
                     </div>

                     <div className="flex flex-col">
                        <label htmlFor="hora" className="text-gray-600 mb-2">
                           Horário
                        </label>
                        <CustomInput
                           id="hora"
                           IconLeft={AccessTimeIcon}
                           type="time"
                        />
                     </div>
                  </div>

                  <div className="flex justify-end gap-2 mt-4">
                     <Button onClick={handleClose} variant="outlined">
                        Cancelar
                     </Button>
                     <Button variant="contained" color="primary">
                        Salvar
                     </Button>
                  </div>
               </div>
            </Box>
         </>
      </CustomModal.Root>
   );
}
