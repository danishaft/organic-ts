type bannerProps = {img: string, desc: string,}
function Banner(props: bannerProps) {
    const {img,  desc} = props
  return (
    <div>
        <img src={img} alt={desc} />
    </div>
  )
}

export default Banner