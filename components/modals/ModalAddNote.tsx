import React from "react";

type IPropAddNote = {
   isOpen: boolean;
   handleClose: () => void;
};

export default function ModalAddNote({ isOpen, handleClose }: IPropAddNote) {
   return (
      <div className="flex flex-col gap-7 p-4">
         <div className="flex flex-col">
            <label htmlFor="titulo" className="text-gray-600 mb-2">
               Título
            </label>
         </div>

         <div className="flex flex-col">
            <label htmlFor="descricao" className="text-gray-600 mb-2">
               Descrição
            </label>
         </div>

         <div className="flex gap-20">
            <div className="flex flex-col">
               <label htmlFor="data" className="text-gray-600 mb-2">
                  Data
               </label>
            </div>

            <div className="flex flex-col">
               <label htmlFor="hora" className="text-gray-600 mb-2">
                  Horário
               </label>
            </div>
         </div>

         <div className="flex justify-end gap-2 mt-4"></div>
      </div>
   );
}
