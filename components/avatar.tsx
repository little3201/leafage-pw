import Image from "next/legacy/image";

type Props = {
  name: string
  picture: string
}

const Avatar = ({ name, picture }: Props) => {
  return (
    <Image src={picture} className="rounded-full mx-4" alt={name} width={40} height={40} />
  )
}

export default Avatar
