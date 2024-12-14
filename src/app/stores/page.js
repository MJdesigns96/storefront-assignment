import StoreLocations from "../components/StoreLocations"

export default async function Stores() {
    return(
        <>
            <div className="row mt-5 mx-5 py-5 px-5">
                <div className="col h-75">
                    <h1>Locations</h1>
                    <p>Listed below are some of our locations found across Canada.</p>
                    <p>Feel free to visit during opening hours or contact them.</p>
                    <StoreLocations />
                </div>
            </div> 
        </>
    )
}