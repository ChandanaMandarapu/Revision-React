// destructuring props without using .props

const Review = ({name,stars}) => {
  return (
    <div>
        <h2>{name}</h2>
        <h2>{stars}</h2>
    </div>
  )
}

export default Review