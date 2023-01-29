import Image from "next/image";

type Props = {
  name: string
  picture: string
}

const Avatar = ({ name, picture }: Props) => {
  return (
    <Image
      src={picture}
      className="rounded-full mx-4"
      alt={name}
      width={40}
      height={40}
      style={{
        maxWidth: "100%",
        height: "auto"
      }} />
  );
}

export default Avatar
