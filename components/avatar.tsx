import Image from "next/image"

type Props = {
  name: string
  picture: string
}

const Avatar = ({ name, picture }: Props) => {
  return (
    <div className="flex items-center">
      <Image src={picture} className="rounded-full mx-4" alt={name} width={48} height={48} />
      <span className="text-xl font-bold ml-4">{name}</span>
    </div>
  )
}

export default Avatar
