import dataCheck from '../assets/dataCheck.png';
import dataIntegrate from '../assets/dataIntegrate.png';
import datasecurityy from '../assets/datasecurityy.png';
import datavpn from '../assets/datavpn.png';

const DataSecurity = () => {
  return (
    <div className="relative w-full h-screen font-helvetica">
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="./src/assets/earth.mp4"
        autoPlay
        loop
        muted
        style={{ objectFit: 'cover' }}
      />
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 flex justify-end items-center h-full mr-4 md:mr-16">
        
        <div className="flex flex-col items-end p-4 md:p-0">
          <h1 className="text-2xl md:text-4xl font-semibold text-white mb-6 md:mb-12 text-center md:text-left">Comprehensive Data Protection Plan</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-10 mt-6 md:mt-10">
            
            {/* card 1 */}
            <div className="bg-white p-4 md:p-6 rounded-md shadow-2xl transition-all duration-300 ease-in-out border-l-4 border-blue-500 w-full md:w-[250px]">
              <div className="flex items-center mb-2">
                <img src={dataIntegrate} className="text-[#00B0F0] mr-2" width={28} height={28} />
                <h2 className="text-lg md:text-xl font-semibold text-[#00B0F0]">Data Backup</h2>
              </div>
              <p className="text-gray-700 text-xs md:text-sm mb-4 font-helvetica-light">Daily snapshots for data protection.</p>
            </div>

            {/* card 2 */}
            <div className="bg-white p-4 md:p-6 rounded-md shadow-2xl transition-all duration-300 ease-in-out border-l-4 border-blue-500 w-full md:w-[250px]">
              <div className="flex items-center mb-2">
                <img src={datasecurityy} className="text-[#00B0F0] mr-2" width={40} height={40} />
                <h2 className="text-lg md:text-xl font-semibold text-[#00B0F0]">Encryption</h2>
              </div>
              <p className="text-gray-700 text-xs md:text-sm mb-4 font-helvetica-light">HTTPS 1.2, AES encryption.</p>
            </div>

            {/* card 3 */}
            <div className="bg-white p-4 md:p-6 rounded-md shadow-2xl transition-all duration-300 ease-in-out border-l-4 border-blue-500 w-full md:w-[250px]">
              <div className="flex items-center mb-2">
                <img src={dataCheck} className="text-[#00B0F0] mr-2" width={28} height={28} />
                <h2 className="text-lg md:text-xl font-semibold text-[#00B0F0]">Security Compliance</h2>
              </div>
              <p className="text-gray-700 text-xs md:text-sm mb-4 font-helvetica-light">GDPR, ISO 27001 certified</p>
            </div>

            {/* card 4 */}
            <div className="bg-white p-4 md:p-6 rounded-md shadow-2xl transition-all duration-300 ease-in-out border-l-4 border-blue-500 w-full md:w-[250px]">
              <div className="flex items-center mb-2">
                <img src={datavpn} className="text-[#00B0F0] mr-2" width={28} height={28} />
                <h2 className="text-lg md:text-xl font-semibold text-[#00B0F0]">Dedicated VPC hosting</h2>
              </div>
              <p className="text-gray-700 text-xs md:text-sm mb-4 font-helvetica-light">Dedicated VPC hosting.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataSecurity;
