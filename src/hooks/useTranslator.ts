import { TranslatorContext } from "@/context/translator";
import { useContext } from "react";

const useTraslator = () => useContext(TranslatorContext);

export default useTraslator;