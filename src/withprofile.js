
function withProfile(Wrapper){
    return(props)=>{
        return(
            <Wrapper {...props} name={"Rahul"} />
        )
    }
}

export default withProfile;