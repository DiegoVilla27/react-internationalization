import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

export enum ELanguage {
  EN = "en",
  ES = "es"
}

const useLanguage = () => {
  const {
    t,
    i18n: { changeLanguage, language }
  } = useTranslation();

  const [currentLanguage, setCurrentLanguage] = useState<ELanguage>(
    language as ELanguage
  );

  const handleChangeLanguage = () => {
    const newLanguage: ELanguage =
      currentLanguage === ELanguage.EN ? ELanguage.ES : ELanguage.EN;
    saveLanguage(newLanguage);
  };

  const saveLanguage = (language: ELanguage) => {
    setCurrentLanguage(language);
    changeLanguage(language);
    localStorage.setItem("lang", language);
  };

  useEffect(() => {
    const language: ELanguage = localStorage.getItem("lang") as ELanguage;
    if (Object.values(ELanguage).includes(language)) saveLanguage(language);
    else saveLanguage(ELanguage.EN);
  }, []);

  return {
    t,
    handleChangeLanguage
  };
};

export default useLanguage;
