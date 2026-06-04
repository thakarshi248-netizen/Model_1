function Static_Website(){
    const Open_Web=()=>{
        window.open("https://opulent-space-disco-q7rrqwj9vp9wfxgr6-5500.app.github.dev/website/","_blank");
    }
    return(
        <div>
            <h1>Welcome to Static_Website</h1>
            <button onClick={Open_Web}>Open Website</button>
        </div>    
    )
}

export default Static_Website;