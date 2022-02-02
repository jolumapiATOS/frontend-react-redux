import image from '../logo.svg'

const CardUser = ({users}) => {
    const cards = users.map( (user) => { 
        return (
            <section className="individual-cards-for-user">
               <img height={80} src={image} />
                <h3> { user.name } </h3>
                <p> { user.email } </p>
            </section>
        )
      })
    return cards
}
 
export default CardUser;