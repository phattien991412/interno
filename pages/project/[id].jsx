import Layout from "@/Components/Layout";
import BlurredImage from "@/components/LazyLoadingImage";

export default function Detail() {
  const data = [
    {
      title: "Client",
      detail: "Your client name"
    },
    {
      title: "Category",
      detail: "Interiors"
    },
    {
      title: "Tags",
      detail: "Interior, Home"
    },
    {
      title: "Date",
      detail: "Date 03, 02, 2023"
    },
    {
      title: "Link",
      detail: "Link example.com"
    }
  ];

  return (
    <>
      <div
        style={{ backgroundImage: `url(/images/project-detail-banner.png)` }}
        className="relative bg-cover bg-center bg-no-repeat h-[50vh]"
      />
      <div className="w-[70%] mx-auto mt-36">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center place-items-center">
          <div className="bg-primaryColor3 rounded-mainRadius w-4/5 py-12 px-16">
            {data.map((item) => (
              <div
                key={item.title}
                className="flex justify-between items-center gap-16 my-4"
              >
                <h3>{item.title}</h3>
                <p>{item.detail}</p>
              </div>
            ))}
          </div>

          <div className="mt-20 text-center lg:mt-0 lg:text-left">
            <h1>Minimal Look Bedrooms</h1>
            <p className="py-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin
              tellumassa, vbel maximus purus posuere in. Dojrices gravida
              dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut
              dolor odio. Aenean in the ipsum vel lectus bibendum commodo.
            </p>
            <p>
              In nec sem suscipit, convallis leo vitae, lacinia nibh. Cras amet
              tellus lectus. Vivamus ipsum nunc, mattis quis nibh id,
              pellentesque arcu. Donec a pellentesque Cras erat enim, gravida
              non ante vitae,elequis convallis elit, in viverra felis. Donec
              ultrices tellus vitae iaculisvd porta. Proin tincidunt ligula id
              purus porttitor.
            </p>
          </div>
        </div>
        <div className="mt-32">
          <BlurredImage
            className={"rounded-mainRadius"}
            width={1200}
            height={1200}
            src={"/images/project-img.png"}
            alt={"project"}
          />
        </div>
      </div>
    </>
  );
}

Detail.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
