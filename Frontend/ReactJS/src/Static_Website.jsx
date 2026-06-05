function Static_Website(){
    const Open_Web=()=>{
        window.open("https://model-1-1-6iur.onrender.com/website/","_blank");
    }
    return(
       <div className="page">
    <div className="theme-card text-center">
        <h2>Static Website</h2>

        <p style={{marginBottom:"20px"}}>
            Open the hosted website.
        </p>

        <button
            className="theme-btn"
            onClick={Open_Web}
        >
            Open Website
        </button>
    </div>
</div>
    )
}

export default Static_Website;