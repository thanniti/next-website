import NextLink from "next/link";
import Tooltip from "../Tooltip";
import styles from "./index.module.scss";
import {useState} from "react";

export default function SocialIcons() {
  return (
    <div className={styles.socialIcons}>
      <Link
        link="https://www.youtube.com/channel/UC1zAcjvBEewJIZHZCE5eCOw"
        icon="fab fa-youtube"
        tooltip="Math animation"
        hoverColor="#ff0000"
      />
      <Link
        link="https://twitter.com/home"
        icon="fab fa-twitter"
        tooltip="Twitter"
        hoverColor="#1DA1F2"
      />
      <Link
        link="https://www.reddit.com/user/Tunsza"
        icon="fab fa-reddit"
        tooltip="community and contributing"
        hoverColor="#FF4500"
      />
      <Link
        link="https://www.instagram.com/tunsza/?next=%2F"
        icon="fab fa-instagram"
        tooltip="Daily life, i guess?"
        hoverColor="#FFDC80"
      />
      <Link
        link="https://www.facebook.com/profile.php?id=100013071330215"
        icon="fab fa-facebook"
        tooltip="Facebook"
        hoverColor="#4267B2"
      />
      <Link
        link="https://github.com/thanniti"
        icon="fab fa-github"
        tooltip="Repositories and more..."
        hoverColor="#049ed1"
      />
      <Link
        link="https://www.tiktok.com/@tunsza"
        icon="fab fa-tiktok"
        tooltip="stupid tiktok videos"
        hoverColor="#ff0050"
      />
      </div>
  );
}

// social link
function Link({ link, icon, tooltip, label = "", hoverColor="inherit"}) {

  const [color, setColor] = useState('inherit');

  return (
    <NextLink href={link} passHref>
      <Tooltip content={tooltip}>
          <i className={icon} style={{color: color}} onMouseEnter={() => setColor(hoverColor)} onMouseLeave={() => setColor('inherit')}/>
      </Tooltip>
    </NextLink>
  );
}
