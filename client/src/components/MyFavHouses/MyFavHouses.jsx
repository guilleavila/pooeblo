

const MyFavHouses = ({ favHouses }) => {

    return (
        <>
            {
                favHouses.map(eachHouse => {
                    return <p key={eachHouse._id}>{eachHouse.name}</p>
                })
            }
            <hr />
        </>
    )
}

export default MyFavHouses