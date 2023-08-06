
import { Flowbite } from "flowbite-react";
import Image from "next/image";
import Link from "next/link";

const BlogEntry = ({ imageUrl, title, description }) => {
  const blogEntryStyles =
    "relative flex flex-col items-start m-1 transition duration-300 ease-in-out delay-150 transform bg-white shadow-2xl rounded-xl md:w-80 md:-ml-16 md:hover:-translate-x-16 md:hover:-translate-y-8";
  const imageStyles =
    "object-cover object-center w-full rounded-t-xl lg:h-48 md:h-36";
  const titleStyles = "mt-4 text-2xl font-semibold text-neutral-600";
  const descriptionStyles =
    "mt-4 text-base font-normal text-gray-500 leading-relax";

  return (
    <Link href="">
      <div className="flex w-full">
        <div className={blogEntryStyles}>
          <Image
            className={imageStyles}
            src={imageUrl}
            width={600}
            height={400}
            alt="blog"
          />
          <div className="px-6 py-8">
            <h4 className={titleStyles}>
              <span className="">{title}</span>
            </h4>
            <p className={descriptionStyles}>{description}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

const SectionHorarios = () => {
  return (
    <Flowbite>
      <section className="bg-gray-100 sm:ps-80">
        <div className="flex flex-wrap mx-auto md:flex-nowrap p-5">
          <BlogEntry
            imageUrl="/Img/logo.png"
            title="Entry"
            description="Install Tailwind CSS without any Javascript Framewrok locally with purgeCSS, enable the dark mode option, prefferences or class is upt to you."
          />
          <BlogEntry
            imageUrl="/Img/logo.png"
            title="Entry"
            description="Install Tailwind CSS without any Javascript Framewrok locally with purgeCSS, enable the dark mode option, prefferences or class is upt to you."
          />
          <BlogEntry
            imageUrl="/Img/logo.png"
            title="Entry"
            description="Install Tailwind CSS without any Javascript Framewrok locally with purgeCSS, enable the dark mode option, prefferences or class is upt to you."
          />
        </div>
      </section>
    </Flowbite>
  );
};

export default SectionHorarios;
