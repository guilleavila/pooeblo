const MyFollowedVillages = ({ followedVillages }) => {

    return (
        <>
            {
                followedVillages.map(eachVillage => {
                    return <p key={eachVillage._id}>{eachVillage.name}</p>
                })
            }
            <hr />

        </>
    )
}

export default MyFollowedVillages