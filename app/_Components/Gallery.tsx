import Image from "next/image";
import React from "react";

const images = [
  "https://media.discordapp.net/attachments/1244142650416824341/1266148156190752838/3D_cartoon_Disney_character_po_3.jpeg?ex=66a417dc&is=66a2c65c&hm=03a2c2f34ffc3cc302f426542d7fc5cac69a037647c6107e68092076972160ef&=&format=webp&width=917&height=611",
  "https://media.discordapp.net/attachments/1244142650416824341/1266148155947356241/A_sleek_and_modern_landing_pag.jpeg?ex=66a417dc&is=66a2c65c&hm=9fc136a1e6c60f140fc9a9d1df8e79cd7cdd2a0088429e4797531020a9b84fac&=&format=webp&width=917&height=611",
  "https://media.discordapp.net/attachments/1244142650416824341/1266148157171961946/anime_art_of_A_sleek_and_moder.jpeg?ex=66a417dc&is=66a2c65c&hm=7676d2e5debc89c0110a102ce6b17b744c7aa8ddb2f5fc909dc905d46e557cc0&=&format=webp&width=917&height=611",
  "https://media.discordapp.net/attachments/1244142650416824341/1266148157461495848/A_sleek_and_modern_landing_pag_1.jpeg?ex=66a417dc&is=66a2c65c&hm=2e69a518252aad005505c519386496d465d948fda73dffd8ba06dac29dfaf88c&=&format=webp&width=917&height=611",
];

const Gallery = () => {
  return (
    <section id="gallery" className="bg-gray-100 py-16">
      <div className="container mx-auto text-center">
        <h3 className="text-3xl font-bold mb-8">Gallery</h3>
        <div className="grid grid-cols-2 gap-4">
          {images.map((image, index) => (
            <Image
              key={index}
              src={image}
              alt={`Gallery ${index}`}
              width={500}
              height={500}
              className="rounded shadow"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
