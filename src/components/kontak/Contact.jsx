import { useState } from 'react';

const Contact = () => {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const sendWhatsAppMessage = (e) => {
    e.preventDefault();
    const phoneNumber = '081219538787';
    const formattedMessage = `Nama: ${name}\nPesan: ${message}`;
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(formattedMessage)}`;
    window.open(whatsappURL, '_blank');
    setSuccessMessage('Pesan berhasil dikirim ke WhatsApp!');
    setName('');
    setMessage('');
  };

  return (
    <div className="flex lg:pt-32 pt-16 mb-10 flex-col font-poppins items-center justify-center min-h-screen bg-white p-4">
      <h1 className="text-[35px] font-[600] mb-12">Kontak Saya</h1>
      <form className="w-full max-w-md" onSubmit={sendWhatsAppMessage}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
            Nama
          </label>
          <input
            className="shadow appearance-none text-[12px] border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            placeholder="Masukkan nama Anda"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
            Pesan
          </label>
          <textarea
            className="shadow appearance-none border text-[12px] rounded w-full h-[200px] py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="message"
            rows="4"
            placeholder="Masukkan pesan Anda"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
        </div>
        <button
          className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Kirim Pesan
        </button>
      </form>
      {successMessage && <p className="mt-10 text-green-500">{successMessage}</p>}
    </div>
  );
};

export default Contact;
