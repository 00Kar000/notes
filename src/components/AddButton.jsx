import { Link } from "react-router-dom";
import { IoAdd } from "react-icons/io5";

const AddButton = () => {
  return (
    <Link to="/note/new" className="floating-button">
      <IoAdd />
    </Link>
  );
};

export default AddButton;
