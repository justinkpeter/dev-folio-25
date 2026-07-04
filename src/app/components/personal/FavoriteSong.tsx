import { BemBuilder } from "@/app/lib/BemBuilder";
import styles from "./FavoriteSong.module.scss";
import Link from "next/link";
import AudioPlayer from "../audio-player/AudioPlayer";

export default function FavoriteSong() {
  const bem = new BemBuilder("favoriteSong", styles);
  const linkURI = `spotify:track:78vkxGOY3zrvFkGfaskQP3`;
  const songPreview = `https://p.scdn.co/mp3-preview/8e2e85c6028b00488d3d14319b54697df3598b1d?cid=f2832746f6704700943baa0fe142b41e`;

  return (
    <div className={bem.element("wrapper")}>
      <div className={bem.element("heading")}>Recently on repeat</div>
      <div className={bem.element("music")}>
        <img
          src={
            "https://i.scdn.co/image/ab67616d0000b273d80e4b17b729f00fe5274adf"
          }
        />
        <div>
          <h4>goodnight</h4>
          <p>Isaia Huron</p>
        </div>
      </div>
      <div className={bem.element("controls")}>
        <div className={bem.element("player")}>
          <AudioPlayer src={songPreview} trackId="goodnight-isaia-huron" />
        </div>
        <Link className={bem.element("spotify")} href={linkURI}>
          Listen on Spotify
          <img src={`/img/spotify-icon-white.png`} />
        </Link>
      </div>
    </div>
  );
}
