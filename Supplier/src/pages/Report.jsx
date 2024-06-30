import { Link } from 'react-router-dom';

export default function Report() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <div className="bg-white rounded-lg shadow-md p-6 lg:ml-24">
        <Link to="/" className="text-blue-500 mb-4 block hover:underline">← Back to Home</Link>
        <h2 className="text-3xl font-semibold mb-4 text-gray-800">Supplier Management Overview</h2>
        <p className="text-lg mb-6 text-gray-700 leading-relaxed">
          Our Supplier Management System offers an efficient solution for suppliers to register and manage their profiles within the system. Suppliers can initiate the registration process by signing up, after which their request is subject to approval by the system administrator. Once approved, suppliers gain access to their personalized profiles, where they can update their information, manage account details, and perform various actions related to their supplier accounts.
        </p>
        <p className="text-lg mb-6 text-gray-700 leading-relaxed">
          Within the system, suppliers have the flexibility to add new details, update existing information, and delete their accounts if necessary. Additionally, suppliers can log in and log out of the system as needed, ensuring secure access to their profiles. One of the key features of our system is the ability for suppliers to view their items, allowing them to track inventory and manage product listings effectively.
        </p>
        <p className="text-lg mb-6 text-gray-700 leading-relaxed">
          Furthermore, suppliers can utilize the search functionality to quickly locate specific items within their inventory by item name. This streamlined process empowers suppliers to efficiently manage their product offerings and enhance their overall operational efficiency within the system.
        </p>
        <h3 className="text-xl font-semibold mb-2 text-gray-800">About Us</h3>
        <p className="text-lg text-gray-700 leading-relaxed">
          We are dedicated to providing top-notch solutions for supplier management, helping businesses streamline their operations and improve efficiency.
        </p>
      </div>
    </div>
  );
}
