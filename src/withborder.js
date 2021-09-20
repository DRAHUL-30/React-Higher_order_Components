
function withBorder(WrapperComponent){
    return()=>{
        return(
            <>
            <div style={{border: "1px solid black"}}>
            <p>Tagging</p>
            <WrapperComponent />
            <p>Tagging</p>
            <p>Tagging</p>
            </div>
            </>
        );
    }
}

export default withBorder;