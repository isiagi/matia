import React from "react";
import HeaderBanner from "../components/headerBanner/HeaderBanner";
import Image from "next/image";
import Priest from "../components/priest/Priest";

function page() {
  return (
    <div>
      <HeaderBanner title={"About Us"} />

      <div className="mx-5 py-20">
        <div className="grid grid-cols-fluid gap-20">
          <div>
            <Image
              src="/assets/images/matia.jpg"
              alt="priest"
              width={0}
              height={0}
              sizes="100vw"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: "30px",
              }}
            />
          </div>
          <div>
            <h3 className="text-3xl font-semibold">
              A Diverse and Inclusive Community
            </h3>

            <p className="mt-3 leading-relaxed text-sm">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Obcaecati, at. Velit quae cupiditate nobis natus. Sit ut ipsam
              architecto nihil sed, similique inventore fugiat maxime totam in
              veritatis vero reprehenderit. Necessitatibus adipisci eum natus
              commodi explicabo ullam officiis, quam voluptates id? Possimus
              autem, doloremque unde nemo rerum at aliquam ducimus temporibus
              necessitatibus eius cupiditate, ea assumenda minima aperiam.
              Sapiente, voluptates.
            </p>

            <p className="mt-3 leading-relaxed text-sm">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Inventore vitae vero obcaecati soluta, qui ut natus dignissimos
              sequi dicta enim molestiae eos voluptatum ipsa sit distinctio?
              Quae harum totam atque! Praesentium dolorum voluptatum vero
              corporis laudantium fugit temporibus aperiam at quia consequatur
              repellat, est nobis aliquam atque doloribus tenetur magnam
              veritatis dignissimos quod doloremque commodi! Perferendis earum
              cumque dignissimos id. Ea magni nemo sequi laboriosam, nihil fuga
              cum minus? Inventore omnis cumque vel laborum excepturi? Vero sed,
              vel provident tempora nesciunt quisquam temporibus repudiandae
              incidunt illo, fugit praesentium minus doloremque.
            </p>
          </div>
        </div>
        {/* second */}
        <div className="grid grid-cols-fluid gap-20 pt-16">
          <div>
            <h3 className="text-3xl font-semibold">Our Story</h3>

            <p className="mt-3 leading-relaxed text-sm">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Obcaecati, at. Velit quae cupiditate nobis natus. Sit ut ipsam
              architecto nihil sed, similique inventore fugiat maxime totam in
              veritatis vero reprehenderit. Necessitatibus adipisci eum natus
              commodi explicabo ullam officiis, quam voluptates id? Possimus
              autem, doloremque unde nemo rerum at aliquam ducimus temporibus
              necessitatibus eius cupiditate, ea assumenda minima aperiam.
              Sapiente, voluptates.
            </p>

            <p className="mt-3 leading-relaxed text-sm">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Inventore vitae vero obcaecati soluta, qui ut natus dignissimos
              sequi dicta enim molestiae eos voluptatum ipsa sit distinctio?
              Quae harum totam atque! Praesentium dolorum voluptatum vero
              corporis laudantium fugit temporibus aperiam at quia consequatur
              repellat, est nobis aliquam atque doloribus tenetur magnam
              veritatis dignissimos quod doloremque commodi! Perferendis earum
              cumque dignissimos id. Ea magni nemo sequi laboriosam, nihil fuga
              cum minus? Inventore omnis cumque vel laborum excepturi? Vero sed,
              vel provident tempora nesciunt quisquam temporibus repudiandae
              incidunt illo, fugit praesentium minus doloremque.
            </p>
          </div>
          <div>
            <Image
              src="/assets/images/matia.jpg"
              alt="priest"
              width={0}
              height={0}
              sizes="100vw"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: "30px",
              }}
            />
          </div>
        </div>
      </div>
      <Priest />
    </div>
  );
}

export default page;
