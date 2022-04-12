import { StyledImg } from "./Styles/StyledImg";

interface Props {
  src: string;
  alt: string;
}

const Img = ({ src, alt }: Props) => {
  return <StyledImg src={src} alt={alt} />;
};

export default Img;
