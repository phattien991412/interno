import React from 'react';
import Banner from '../ReusedComponent/Banner';
import FAQ from '../ReusedComponent/FAQ';

const FaqPage = () => {
    const data = [
        {
          key: "1",
          label: <h3>What is the Hipcouch Interior Design Service?</h3>,
          children: (
            <p>
              Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae
              turpmaximus.posuere in.Contrary popular belief.There are many
              variations of passages of Lorem Ipsum available, but the majority
              randomised.{" "}
            </p>
          )
        },
        {
          key: "2",
          label: <h3>So, how exactly does this work?</h3>,
          children: (
            <p>
              Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae
              turpmaximus.posuere in.Contrary popular belief.There are many
              variations of passages of Lorem Ipsum available, but the majority
              randomised.{" "}
            </p>
          )
        },
        {
          key: "3",
          label: <h3>What cities do you currently operate in?</h3>,
          children: (
            <p>
              Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae
              turpmaximus.posuere in.Contrary popular belief.There are many
              variations of passages of Lorem Ipsum available, but the majority
              randomised.{" "}
            </p>
          )
        },
        {
          key: "4",
          label: <h3>Hipcouch Interior Design Service?</h3>,
          children: (
            <p>
              Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae
              turpmaximus.posuere in.Contrary popular belief.There are many
              variations of passages of Lorem Ipsum available, but the majority
              randomised.{" "}
            </p>
          )
        },
        {
          key: "5",
          label: <h3>What kind of interior designers do you have?</h3>,
          children: (
            <p>
              Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae
              turpmaximus.posuere in.Contrary popular belief.There are many
              variations of passages of Lorem Ipsum available, but the majority
              randomised.{" "}
            </p>
          )
        }
      ];

      const data2 = [
        {
          key: "1",
          label: <h3>How long does it take?</h3>,
          children: (
            <p>
              Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae
              turpmaximus.posuere in.Contrary popular belief.There are many
              variations of passages of Lorem Ipsum available, but the majority
              randomised.{" "}
            </p>
          )
        },
        {
          key: "2",
          label: <h3>Can I use my existing furnishings?</h3>,
          children: (
            <p>
              Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae
              turpmaximus.posuere in.Contrary popular belief.There are many
              variations of passages of Lorem Ipsum available, but the majority
              randomised.{" "}
            </p>
          )
        },
        {
          key: "3",
          label: <h3>I put into redesigning my interior?</h3>,
          children: (
            <p>
              Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae
              turpmaximus.posuere in.Contrary popular belief.There are many
              variations of passages of Lorem Ipsum available, but the majority
              randomised.{" "}
            </p>
          )
        },
        {
          key: "4",
          label: <h3>What do your services cost?</h3>,
          children: (
            <p>
              Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae
              turpmaximus.posuere in.Contrary popular belief.There are many
              variations of passages of Lorem Ipsum available, but the majority
              randomised.{" "}
            </p>
          )
        },
        {
          key: "5",
          label: <h3>Do you offer free consultations?</h3>,
          children: (
            <p>
              Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae
              turpmaximus.posuere in.Contrary popular belief.There are many
              variations of passages of Lorem Ipsum available, but the majority
              randomised.{" "}
            </p>
          )
        }
      ];
    return (
        <div>
            <Banner image={"/images/faq-banner.png"} page={"FAQ's"} />
            <div className="xl:w-[70%] w-[90%] mx-auto">
               <FAQ  data={data} title={"Every Question Answered"} image={"/images/faq-img1.png"} />
               <FAQ  data={data} title={"Project related questions"} image={"/images/faq-img2.png"} className={"flex-row-reverse"} />
            </div>
        </div>
    );
};

export default FaqPage;