export default function QuoteForm() {
  return (
    <div className="mt-14 grid gap-6 lg:grid-cols-[1fr_1fr_220px]">
      {/* Name */}

      <div>
        <label className="mb-4 block text-[20px] font-bold text-black">
          Name
        </label>

        <input
          type="text"
          placeholder="Enter Your Full Name"
          className="h-[62px] w-full rounded border border-[#ECD9D2] bg-white px-6 text-[17px] italic outline-none placeholder:text-gray-400 focus:border-[#B64627]"
        />
      </div>

      {/* Mobile */}

      <div>
        <label className="mb-4 block text-[20px] font-bold text-black">
          Mobile Number
        </label>

        <input
          type="text"
          placeholder="Enter Your Valid Phone Number"
          className="h-[62px] w-full rounded border border-[#ECD9D2] bg-white px-6 text-[17px] italic outline-none placeholder:text-gray-400 focus:border-[#B64627]"
        />
      </div>

      {/* Button */}

      <div className="flex items-end">
        <button className="flex h-[62px] w-full items-center justify-center gap-3 rounded bg-[#B64627] text-[22px] font-medium text-white transition duration-300 hover:bg-[#9B3A21]">
          Get Price

          <span className="text-[22px]">↗</span>
        </button>
      </div>
    </div>
  );
}