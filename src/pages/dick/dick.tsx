import Dickimg from "./images/dick.jpg"
import Globin from "./images/globin.png"

export default function Dick() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
            <div className="flex">
                <div className="bg-white p-8 rounded-lg shadow-lg">
                    <img
                        src={Dickimg}
                        alt="um pinto"
                        className="w-64 h-64 object-cover rounded-lg hover:scale-105 transition-transform duration-300"
                    />
                </div>
                <div className="bg-white p-8 rounded-lg shadow-lg">
                    <img
                        src={Globin}
                        alt="um pinto"
                        className="w-64 h-64 object-cover rounded-lg hover:scale-105 transition-transform duration-300"
                    />
                </div>
            </div>
        </div>
    )
}
