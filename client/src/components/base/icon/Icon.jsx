const Icon = ({ src, onClick }) => {
  const handleClick = () => {
    onClick()
  }
  return <img className="iconImg" src={src} alt="icon" onClick={handleClick} />
}

export default Icon
