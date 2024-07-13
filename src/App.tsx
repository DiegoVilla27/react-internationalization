import useLanguage from "./hooks";

function App() {
  const { t, handleChangeLanguage } = useLanguage();

  return (
    <>
      <h1>{t("WELCOME")}</h1>
      <h3>{t("TITLE", { name: "Diego" })}</h3>
      <br />
      <button
        type="button"
        onClick={handleChangeLanguage}
      >
        {t("CHANGE_LANGUAGE")}
      </button>
    </>
  );
}

export default App;
