import { PhoneIcon, EnvelopeIcon, MapPinIcon } from "@heroicons/react/24/solid";
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";

export default function HeaderTopBar() {
  return (
    <div className="hidden lg:block text-sm bg-oxford">
      <div className="max-w-screen-xl mx-auto px-6">
        <div className="py-4 flex flex-row items-center justify-between border-b border-gray-600">
          <div className="flex flex-row items-center gap-8 font-bold tracking-wide text-sm">
            <span className="flex items-center gap-2">
              <PhoneIcon className="h-5 w-5 text-mint" /> +58 212 7710251
            </span>
            <a href="mailto:Info@dfglobal.com.ve" className="flex items-center space-x-2">
              <EnvelopeIcon className="h-5 w-5 text-mint" />
              <span>Info@dfglobal.com.ve</span>
            </a>
            <a
              href="https://www.google.com/maps/place/Torre+Domus,+Caracas+1052,+Distrito+Capital/@10.4955263,-66.8845235,17z"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <MapPinIcon className="h-5 w-5 text-mint" />
              <span>Torre Domus, Piso 10, Plaza Venezuela, Distrito Capital</span>
            </a>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="https://www.instagram.com/dfglobaloficial?igsh=MW0yNW5iM2U1N3N2NA%3D%3D&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center h-8 w-8 rounded-full border border-mint text-mint hover:bg-mint hover:text-oxford transition-transform transform hover:scale-110"
            >
              <FaInstagram className="h-4 w-4" />
            </a>
            <a
              href="https://www.facebook.com/share/1DM7QV2vM5/?mibextid=wwXIfr"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center h-8 w-8 rounded-full border border-mint text-mint hover:bg-mint hover:text-oxford transition-transform transform hover:scale-110"
            >
              <FaFacebookF className="h-4 w-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/dfglobal-consulting-55a836394?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center h-8 w-8 rounded-full border border-mint text-mint hover:bg-mint hover:text-oxford transition-transform transform hover:scale-110"
            >
              <FaLinkedinIn className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}