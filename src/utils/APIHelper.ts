export async function formatAPIRequest(requestTemplate: string, values: any[]): Promise<string> {
    return requestTemplate.replace(/{(\d+)}/g, (match, index) => {
        const indexNum = parseInt(index, 10);
        return indexNum < values.length ? values[indexNum] : match;
    });
}

export async function getPOSTAPIRequestBody(fname:string, lname:string, price:number, depositPaid:boolean, additionalNeeds:string, checkin:string, checkout:string) {
    const apiRequest: BookingAPI = {
        firstname: fname,
        lastname: lname,
        totalprice: price,
        depositpaid: depositPaid,
        bookingdates : {
            checkin: checkin,
            checkout: checkout
        },
        additionalneeds: additionalNeeds
    };
    return apiRequest;
}