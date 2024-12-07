"use client";
import { RiRecycleLine } from "react-icons/ri";
import { RiArrowDropDownFill } from "react-icons/ri";
import Utility from "@/components/Utiliity";
//@ muy importante imponerlo, es relativo a la carpeta src,
//es decir si cambiamos la ubicacion de la carpeta components,
//no tendremos que cambiar la ruta
export default function Home() {
  return (
    <>
      <div className="mt-32 flex items-center flex-col">
        <div className="bg-emerald-950/90 rounded-lg border-white border-[0.5px] p-4 backdrop-blur-sm">
          <Utility name="Wallet" elemento_dos="100" />
          <Utility
            name="Evaluation points"
            elemento_dos="42"
            icon={
              <button className="text-bold hover:scale-125">
                <RiRecycleLine />
              </button>
            }
          />
          <Utility
            name="Cursus"
            elemento_dos="42Cursus"
            icon={
              <button className="size-5">
                <RiArrowDropDownFill />
              </button>
            }
          />
          <Utility name="Grade" elemento_dos="Learner" />
        </div>
      </div>
    </>
  );
}
