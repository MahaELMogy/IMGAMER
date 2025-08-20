import { PacmanLoader } from "react-spinners";

function Spinners() {
  return (
    <div className="flex justify-center items-center mt-[90px] min-h-screen">
      <PacmanLoader color="#E16428" loading size={50} />
    </div>
  );
}

export default Spinners;
