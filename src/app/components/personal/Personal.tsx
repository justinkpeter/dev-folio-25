import { BemBuilder } from "@/app/lib/BemBuilder";
import styles from "./Personal.module.scss";
import FavoriteSong from "./FavoriteSong";
import { AudioPlayerProvider } from "../audio-player/AudioPlayerContext";
import Photo from "../photo/Photo";

export default function Personal() {
  const bem = new BemBuilder("personal", styles);
  const cloudinaryBaseUrl =
    "https://res.cloudinary.com/dja3kv6m2/image/upload/v1779904513/justincrediblemoments";

  return (
    <section id="personal" className={bem.block()}>
      <div className={bem.element("content")}>
        <span className={bem.element("eyebrow")}>Personal</span>
        <div className={bem.element("body")}>
          <p>
            In my spare time, I enjoy listening to music and taking photos with
            my Canon R5
          </p>
          <AudioPlayerProvider>
            <FavoriteSong />
          </AudioPlayerProvider>
          <Photo
            photos={[
              {
                src: `${cloudinaryBaseUrl}/la/01.jpg`,
                alt: "Photo 1",
              },
              {
                src: `${cloudinaryBaseUrl}/la/09.jpg`,
                alt: "Photo 1",
              },
              {
                src: `${cloudinaryBaseUrl}/line%20work/09.jpg`,
                alt: "Photo 3",
              },
              {
                src: `${cloudinaryBaseUrl}/wilson%20therapy/05.jpg`,
                alt: "Photo 4",
              },
            ]}
            instagramUrl="https://www.instagram.com/justincrediblemoments"
          />
        </div>
      </div>
    </section>
  );
}
