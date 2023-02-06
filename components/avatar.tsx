import Image from "next/image";

type Props = {
  name: string
  picture: string
}

const Avatar = ({ name, picture }: Props) => {
  return (
    <Image
      src={picture}
      className="rounded-full"
      alt={name}
      width={40}
      height={40}
      style={{
        objectFit: 'contain',
        objectPosition: "center"
      }} />
  );
}

export default Avatar
