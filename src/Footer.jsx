import {PropTypes} from "./components/taskUtils";

const Footer = ({isDarkMode}) => {
  return (
    <footer
      className={`${
        isDarkMode
          ? "bg-[#181824] full_bleed_dark"
          : "bg-[#f6f6f8] full_bleed_light"
      } text-[#4f5160] full_bleed`}
    >
      <div className="attribution text-center">
        Developed by{" "}
        <p
          className="text-[#5b7ac0] hover:underline inline-block"
        >
          Vidushi
        </p>
      </div>
    </footer>
  );
};

Footer.propTypes = {
  isDarkMode: PropTypes.bool.isRequired,
};

export default Footer;
