

function SearchBar({
    placeholder, data
}){
    return(
        <form action="index.html" method="get" className="tm-search-form tm-section-pad-2">
                                <div className="form-row tm-search-form-row">                                
                                    <div className="form-group tm-form-group tm-form-group-pad tm-form-group-1">
                                        <label for="inputCity">Choose Your Destination</label>
                                        <input name="destination" type="text" className="form-control" id="inputCity" placeholder="Type your destination..." />
                                    </div>
                                    <div className="form-group tm-form-group tm-form-group-1">                                    
                                        <div className="form-group tm-form-group tm-form-group-pad tm-form-group-2">
                                            <label for="inputRoom">How many rooms?</label>
                                            <select name="room" className="form-control tm-select" id="inputRoom">
                                                <option value="1" selected>1 Room</option>
                                                <option value="2">2 Rooms</option>
                                                <option value="3">3 Rooms</option>
                                                <option value="4">4 Rooms</option>
                                                <option value="5">5 Rooms</option>
                                                <option value="6">6 Rooms</option>
                                                <option value="7">7 Rooms</option>
                                                <option value="8">8 Rooms</option>
                                                <option value="9">9 Rooms</option>
                                                <option value="10">10 Rooms</option>
                                            </select>                                        
                                        </div>
                                        <div className="form-group tm-form-group tm-form-group-pad tm-form-group-3">                                       
                                            <label for="inputAdult">Adult</label>     
                                            <select name="adult" className="form-control tm-select" id="inputAdult">
                                                <option value="1" selected>1</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                                <option value="4">4</option>
                                                <option value="5">5</option>
                                                <option value="6">6</option>
                                                <option value="7">7</option>
                                                <option value="8">8</option>
                                                <option value="9">9</option>
                                                <option value="10">10</option>
                                            </select>                                        
                                        </div>
                                        <div className="form-group tm-form-group tm-form-group-pad tm-form-group-3">

                                            <label for="inputChildren">Children</label>                                            
                                            <select name="children" className="form-control tm-select" id="inputChildren">
                                            	<option value="0" selected>0</option>
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                                <option value="4">4</option>
                                                <option value="5">5</option>
                                                <option value="6">6</option>
                                                <option value="7">7</option>
                                                <option value="8">8</option>
                                                <option value="9">9</option>
                                            </select>                                        
                                        </div>
                                    </div>
                                </div> 
                                <div className="form-row tm-search-form-row">

                                    <div className="form-group tm-form-group tm-form-group-pad tm-form-group-3">
                                        <label for="inputCheckIn">Check In Date</label>
                                        <input name="check-in" type="text" className="form-control" id="inputCheckIn" placeholder="Check In" />
                                    </div>
                                    <div className="form-group tm-form-group tm-form-group-pad tm-form-group-3">
                                        <label for="inputCheckOut">Check Out Date</label>
                                        <input name="check-out" type="text" className="form-control" id="inputCheckOut" placeholder="Check Out" />
                                    </div>
                                    <div className="form-group tm-form-group tm-form-group-pad tm-form-group-1">
                                        <label for="btnSubmit">&nbsp;</label>
                                        <button type="submit" className="btn btn-primary tm-btn tm-btn-search text-uppercase" id="btnSubmit">Check Availability</button>
                                    </div>
                                </div>                              
                            </form>  
    );
};

export default SearchBar;