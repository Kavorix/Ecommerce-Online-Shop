import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "../../hooks/useLanguage";
import { ISlider } from "../../lib/interface/slider";

interface Props {
  sliderItem: ISlider;
  // className: string;
}
const Slide: React.FC<Props> = (props) => {
  const { t } = useLanguage();
  const { title, description, imgSrc, url } = props.sliderItem;
  return (
    <div className="relative">
      <Link href={url}>
        <a className="block">
          <Image src={imgSrc} alt={t[`${title}`]} width="2000" height="700" />
          <div className="absolute top-0">
            <h3>{t[`${title}`]}</h3>
            <p>{t[`${description}`]}</p>
          </div>
        </a>
      </Link>
    </div>
  );
};

export default Slide;
