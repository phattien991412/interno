import React from "react";

const Map = () => {
  return (
    <div className="mt-32">
      <div className="bg-primaryColor3 rounded-[70px]">
        <iframe
          className="rounded-[70px] p-8"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.479521218655!2d106.68986717440386!3d10.774537889374121!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f396a9573b1%3A0x3ef2307ad14f1770!2sTao%20Dan%20Park!5e0!3m2!1sen!2s!4v1687945980974!5m2!1sen!2s"
          width={"100%"}
          height={450}
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  );
};

export default Map;
