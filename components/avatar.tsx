import Image from "next/image"

type Props = {
  name: string
  picture: string
}

const Avatar = ({ name, picture }: Props) => {
  return (
    <div className="flex items-center">
      <Image src={picture} className="rounded-full mx-4" alt={name} width={48} height={48} />
      <div className="text-xl font-bold">{name}</div>
    </div>
  )
}

export default Avatar
