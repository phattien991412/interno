import React from "react";

const Count = () => {
  const data = [
    {
      number: "12",
      text: "Years Of Experiance"
    },
    {
      number: "85",
      text: "Success Project"
    },
    {
      number: "15",
      text: "Active Project"
    },
    {
      number: "95",
      text: "Happy Customers"
    }
  ];
  return (
    <div className="w-full bg-primaryColor3">
      <table className="w-[80%] lg:w-[60%] mx-auto py-16 border-separate text-center">
        <tbody>
          <tr>
            {data.map((item) => (
              <td className="border-r border-primaryColor1">
                <p className="text-5xl lg:text-[85px] text-primaryColor1">{item.number}</p>
                <p>{item.text}</p>
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Count;
