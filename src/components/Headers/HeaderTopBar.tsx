import { PhoneIcon, EnvelopeIcon, MapPinIcon } from "@heroicons/react/24/solid";
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";

export default function HeaderTopBar() {
  return (
    <div className="hidden lg:block text-sm bg-oxford">
      <div className="max-w-screen-xl mx-auto px-6">
        <div className="py-4 flex flex-row items-center justify-between border-b border-gray-600">
          <div className="flex flex-row items-center gap-8 font-bold tracking-wide text-sm">
            <span className="flex items-center gap-2">
              <PhoneIcon className="h-5 w-5 text-mint" /> +58 414 2005820
            </span>
            <span className="flex items-center gap-2">
              <EnvelopeIcon className="h-5 w-5 text-mint" /> Info@dfglobal.com.ve
            </span>
            <span className="flex items-center gap-2">
              <MapPinIcon className="h-5 w-5 text-mint" /> Torre Domus, Piso 10, Plaza Venezuela, Distrito Capital
            </span>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center h-8 w-8 rounded-full border border-mint text-mint hover:bg-mint hover:text-oxford transition-transform transform hover:scale-110"
            >
              <FaInstagram className="h-4 w-4" />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center h-8 w-8 rounded-full border border-mint text-mint hover:bg-mint hover:text-oxford transition-transform transform hover:scale-110"
            >
              <FaFacebookF className="h-4 w-4" />
            </a>
            <a
              href="https://linkedin.com"
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