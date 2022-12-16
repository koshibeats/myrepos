import { MyContext } from "../MyContext";

export default function ButtonSection() {
  return (
    <div className="buttonSection">
      <MyContext.Provider value="message">
        <button type="button" className="button">
          GitHub
        </button>
        <button type="button" className="button">
          LinkedIn
        </button>
      </MyContext.Provider>
    </div>
  );
}
